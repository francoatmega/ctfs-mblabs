/*
Password123! - 49EFEF5F70D47ADC2DB2EB397FBEF5F7BC560E29
SecureP@ss - 322B1714F3B1AA0B51E3968FF0AF7D034B329CF1
RandomPass42 - 374711BA98BFE2A02E6BABE9AC7B4A8E85C1460A
StrongPwd!789 - E911ACE26A2A2B800BA8F573781D2C3B253FFD91
Pass120*#2 - 686A124638A2D95F013FB07A0E6E086C74C199A3
Ch@ll3ngeMe - 8F61D2674B641DE18A9AEACF76BEE85BEFDD449D
P@ssw0rdXYZ - 334BCC643C1BF17A517A4F1156939E4A354A577E
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
            profile_pic: 'https://w7.pngwing.com/pngs/177/551/png-transparent-user-interface-design-computer-icons-default-stephen-salazar-graphy-user-interface-design-computer-wallpaper-sphere-thumbnail.png',
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
            profile_pic: 'https://w7.pngwing.com/pngs/177/551/png-transparent-user-interface-design-computer-icons-default-stephen-salazar-graphy-user-interface-design-computer-wallpaper-sphere-thumbnail.png',
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
            profile_pic: 'https://w7.pngwing.com/pngs/177/551/png-transparent-user-interface-design-computer-icons-default-stephen-salazar-graphy-user-interface-design-computer-wallpaper-sphere-thumbnail.png',
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
            profile_pic: 'https://w7.pngwing.com/pngs/177/551/png-transparent-user-interface-design-computer-icons-default-stephen-salazar-graphy-user-interface-design-computer-wallpaper-sphere-thumbnail.png',
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
            profile_pic: 'https://w7.pngwing.com/pngs/177/551/png-transparent-user-interface-design-computer-icons-default-stephen-salazar-graphy-user-interface-design-computer-wallpaper-sphere-thumbnail.png',
            role: 'user',
            description: '',
            full_name: 'Luan Carlos',
            date_of_birth: '1999-04-12',
            location: 'Maceió, Pernambuco'
          },
          {
            id: 'MB202420',
            username: 'juanzito',
            password: '8F61D2674B641DE18A9AEACF76BEE85BEFDD449D',
            email: 'juan.cleiton@mblabs.com.br',
            profile_pic: 'https://w7.pngwing.com/pngs/177/551/png-transparent-user-interface-design-computer-icons-default-stephen-salazar-graphy-user-interface-design-computer-wallpaper-sphere-thumbnail.png',
            role: 'user',
            description: 'Aqui terá os dados de outra flag',
            full_name: 'Juan Cleiton',
            date_of_birth: '1990-07-25',
            location: 'Rio de Janeiro, Brasil'
          },
          {
            id: 'MB202421',
            username: 'maraba',
            password: '334BCC643C1BF17A517A4F1156939E4A354A577E',
            email: 'marcello.marabita@mblabs.com.br',
            profile_pic: 'https://w7.pngwing.com/pngs/177/551/png-transparent-user-interface-design-computer-icons-default-stephen-salazar-graphy-user-interface-design-computer-wallpaper-sphere-thumbnail.png',
            role: 'admin',
            description: 'Aqui é o perfil do administrador, parabéns por ter conseguido acessar, agora decifre o seguinte código e mande um email para marcello.marabita com o valor decodificado e como descobriu a falha! <br> Rápido pois só terá um ganhador!',
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