const db = require("../../database/connection");

class UserRepository {
  async find(id) {
    return db().then(async (db) => {
      return await db.get(
        `
                SELECT * FROM users WHERE id = ?
            `,
        id
      );
    });
  }

  async store(user) {
    return db().then(async (db) => {
      return await db.run(`
                INSERT INTO users (name, email, password)
                VALUES ('${user.name}', '${user.email}', '${user.password}')
            `);
    });
  }

  async findByEmail(email) {
    return db().then(async (db) => {
      return await db.get(
        `
                SELECT * FROM users WHERE email = ?
            `,
        email
      );
    });
  }

  async updateToken(id, token) {
    return db().then(async (db) => {
      return await db.run(`
                UPDATE users SET token = '${token}' WHERE id = ${id}
            `);
    });
  }

  async updateValue(id, value) {
    return db().then(async (db) => {
      return await db.run(`
                UPDATE users SET value = '${value}' WHERE id = ${id}
            `);
    });
  }

  async getByToken(userId, token) {
    return db().then(async (db) => {
      return await db.get(
        `
                SELECT * FROM users WHERE id = ? AND token = ?
            `,
        userId,
        token
      );
    });
  }
}

module.exports = UserRepository;
