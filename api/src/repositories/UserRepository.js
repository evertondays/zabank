const db = require('../../database/connection');

class UserRepository {
    async store(user) {
        return db().then(async (db) => {
            return await db.run(`
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

    async updateToken(id, token) {
        return db().then(async (db) => {
            return await db.run(`
                UPDATE users SET token = '${token}' WHERE id = ${id}
            `);
        })
    }
}

module.exports = UserRepository;