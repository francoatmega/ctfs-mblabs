const express = require('express');
const rateLimit = require('express-rate-limit')
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const sqlite3 = require('sqlite3');
const crypto = require('crypto');

const app = express();
const { initDb } = require('./initDb');
const port = 3000;
const secretKey = 'your_secret_key';

function sha1(data) {
    return crypto.createHash('sha1').update(data, 'binary').digest('hex')
}

const db = new sqlite3.Database(':memory:');

initDb(db);

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
})

app.use(limiter)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    if (!req.session) {
        req.session = {};
    }
    next();
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.get('/perfil', (req, res) => {
    res.sendFile(__dirname + '/profile.html');
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).send('Invalid credentials');
        }
    
        db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, sha1(password).toUpperCase()], (err, row) => {
            
            if (!row) {
                return res.status(401).send({ message: 'Invalid username or password'});
            }
    
            const tokenData = {
                id: row.id,
                role: row.role
            }
    
            const token = jwt.sign(tokenData, secretKey, { expiresIn: '30m' });
    
            return res.status(200).json({ token });
        });
    } catch (err) {

    }
});

app.get('/profile', async (req, res) => {
    try {
        const [_, token] = req.headers.authorization.split(' ');

        if (!token) {
            return res.status(401).send('Unauthorized access. Please provide a valid token.');
        }
    
        const decodedToken = jwt.decode(token);
    
        const userId = decodedToken.id;
        const role = decodedToken.role;
    
        await db.get('SELECT * FROM users WHERE id = ?', [userId], (err, row) => {
    
            if (err) {
                return res.status(500).send({ message: 'Internal server error'});
            }
    
            if (!row) {
                return res.status(400).send({ message:'User don\'t exist'});
            }
    
            if (row.role !== role) {
                return res.status(401).send({ message:'You don\'t have permission'});
            }
    
            return res.status(200).json(row);
        });
    } catch (err) {
        return res.status(500).send({ message:'Internal server error'});
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
