const db = require('../../database/connection');

class UserRepository {
    async store(user) {
        return db().then(async (db) => {
            await db.run(`
                INSERT INTO users (name, email, password)
                VALUES ('${user.name}', '${user.email}', '${user.password}')
            `);
        })
    }

    async findByEmail(email) {
        return db().then(async (db) => {
            return await db.get(`
                SELECT * FROM users WHERE email = ?
            `, email);
        })
    }
}

module.exports = UserRepository;