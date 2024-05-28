const InvestmentRepository = require("../repositories/InvestmentRepository");
const repository = new InvestmentRepository();

class InvestmentApplication {
    async create(req, res) {
        res.sendStatus(200);
    }

    async list(req, res) {
        res.sendStatus(200);
    }
}

module.exports = InvestmentApplication;