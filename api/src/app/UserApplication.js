const db = require('../../database/connection');
const User = require('../models/User');

class UserApplication {
    async create(req, res) {
        const body = req.body;
        const user = new User(body.name, body.email, body.password);
        
        const validation = user.validate();
        if (validation) {
            res.status(400).json({ message: validation });
        };
    
        res.sendStatus(201);
    }

    async login(req, res) {
        res.sendStatus(200);
    }
}

module.exports = UserApplication;