const db = require("../../database/connection");

class InvestmentRepository {
    async store(userId, name, qtt) {
        return await db.run(`
              INSERT INTO investments (user_id, name, qtt)
              VALUES ('${userId}', '${name}', '${qtt}')
          `);
    }
}

module.exports = InvestmentRepository;