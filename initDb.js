/*
Password123! - 49EFEF5F70D47ADC2DB2EB397FBEF5F7BC560E29
SecureP@ss - 322B1714F3B1AA0B51E3968FF0AF7D034B329CF1
RandomPass42 - 374711BA98BFE2A02E6BABE9AC7B4A8E85C1460A
StrongPwd!789 - E911ACE26A2A2B800BA8F573781D2C3B253FFD91
Pass120*#2 - 686A124638A2D95F013FB07A0E6E086C74C199A3
_Ch@ll3ngeMe_H4RD3435 - D17A74C83DF95C6ABDD2690954B9E04D985B0547
*P@ssw0rdXYZ-1mP0ss1bl3*& - 60BB3AFDB9ED05374269AA86AECBE01EE31DA713
*/

const initDb = (db) => {
    db.serialize(() => {
        db.run('CREATE TABLE IF NOT EXISTS users (id TEXT, username TEXT, password TEXT, email TEXT, profile_pic TEXT, role TEXT, description TEXT, full_name TEXT, date_of_birth TEXT, location TEXT)');
        
        const usersToAdd = [
          {
            id: 'MB20241',
            username: 'francoatmega',
            password: '49EFEF5F70D47ADC2DB2EB397FBEF5F7BC560E29',
            email: 'jardel.matias@mblabs.com.br',
            profile_pic: 'https://ca.slack-edge.com/T06JRN0TA-U040UG6G4VB-f080d5028a70-512',
            role: 'user',
            description: 'Happy Hacking! ;)',
            full_name: 'Jardel Matias',
            date_of_birth: '1988-11-30',
            location: 'Juazeiro do Norte, Brasil'
          },
          {
            id: 'MB20242',
            username: 'e.campos',
            password: '322B1714F3B1AA0B51E3968FF0AF7D034B329CF1',
            email: 'erick.campos@mblabs.com.br',
            profile_pic: 'https://ca.slack-edge.com/T06JRN0TA-U04CQUK2JNN-03e645dac281-512',
            role: 'user',
            description: '',
            full_name: 'Erick Campos',
            date_of_birth: '1985-02-14',
            location: 'Salvador, Brasil'
          },
          {
            id: 'MB20243',
            username: 'alê',
            password: '374711BA98BFE2A02E6BABE9AC7B4A8E85C1460A',
            email: 'alessandro.vaiz@mblabs.com.br',
            profile_pic: 'https://ca.slack-edge.com/T06JRN0TA-U035EHP8DH9-b519af8afb25-512',
            role: 'user',
            description: 'Alessandro Vaiz',
            full_name: 'Alessandro Vaiz',
            date_of_birth: '1993-09-08',
            location: 'São Miguel do Oeste, Brasil'
          },
          {
            id: 'MB20244',
            username: 'nori',
            password: 'E911ACE26A2A2B800BA8F573781D2C3B253FFD91',
            email: 'leonardo.nori@mblabs.com.br',
            profile_pic: 'https://ca.slack-edge.com/T06JRN0TA-U634BR602-adc2d054a429-192',
            role: 'user',
            description: 'Descrição do Usuário 5',
            full_name: 'Leonardo Nori',
            date_of_birth: '1996-04-12',
            location: 'Campinas, Brasil'
          },
          {
            id: 'MB20245',
            username: 'lcarlos',
            password: '686A124638A2D95F013FB07A0E6E086C74C199A3',
            email: 'luan.carlos@mblabs.com.br',
            profile_pic: 'https://ca.slack-edge.com/T06JRN0TA-U04M3NGB25D-b050d816dcb7-192',
            role: 'user',
            description: 'Almost there...',
            full_name: 'Luan Carlos',
            date_of_birth: '1999-04-12',
            location: 'Maceió, Pernambuco'
          },
          {
            id: 'MB202420',
            username: 'juanzito',
            password: 'D17A74C83DF95C6ABDD2690954B9E04D985B0547',
            email: 'juan.cleiton@mblabs.com.br',
            profile_pic: 'https://ca.slack-edge.com/T06JRN0TA-U03FHG74XLM-f8317a9df0ca-192',
            role: 'user',
            description: 'Parabéns até aqui, você conseguiu "invadir" a aplicação, agora para recuperar o seu prêmio mande uma mensagem para Jardel Matias no Slack, com o seguinte código: IDOR-VULN-2024-600ccd1b71569232d01d110bc63e906beab04d8c <br> Rápido pois só o primeiro que conseguir será o ganhador!',
            full_name: 'Juan Cleiton',
            date_of_birth: '1990-07-25',
            location: 'Rio de Janeiro, Brasil'
          },
          {
            id: 'MB202421',
            username: 'maraba',
            password: '60BB3AFDB9ED05374269AA86AECBE01EE31DA713',
            email: 'marcello.marabita@mblabs.com.br',
            profile_pic: 'https://ca.slack-edge.com/T06JRN0TA-U06JRM6AJ-3f2af327e91e-192',
            role: 'admin',
            description: 'Aqui é o perfil do administrador, parabéns por ter conseguido "invadir" a aplicação, agora para recuperar o seu prêmio mande uma mensagem para Jardel Matias no Slack, com o seguinte código: BROKEN-AUTH-VULN-2024-6dcd4ce23d88e2ee9568ba546c007c63d9131c1b <br> Rápido pois só o primeiro que conseguir será o ganhador!',
            full_name: 'Marcello Marabita',
            date_of_birth: '1980-02-28',
            location: 'Campinas, SP'
          }
        ];
      
        const stmt = db.prepare('INSERT INTO users (id, username, password, email, profile_pic, role, description, full_name, date_of_birth, location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
      
        usersToAdd.forEach(user => {
          stmt.run(
            user.id,
            user.username,
            user.password,
            user.email,
            user.profile_pic,
            user.role,
            user.description,
            user.full_name,
            user.date_of_birth,
            user.location
          );
        });
      
        stmt.finalize();
      });
}


module.exports = { initDb }; 