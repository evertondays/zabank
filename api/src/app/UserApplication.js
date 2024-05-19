const User = require('../models/User');
const UserRepository = require('../repositories/UserRepository');
const repository = new UserRepository();
const argon2 = require('argon2');

class UserApplication {
    async create(req, res) {
        const body = req.body;
        const user = new User(body.name, body.email, body.password);

        if (await repository.findByEmail(user.email)) {
            res.status(400).json({ message: 'Email já cadastrado' });
            return;
        }

        const validation = user.validate();
        if (validation) {
            res.status(400).json({ message: validation });
        };
    
        user.password = await argon2.hash(user.password);
        await repository.store(user);

        res.sendStatus(201);
    }

    async login(req, res) {
        res.sendStatus(200);
    }
}

module.exports = UserApplication;