const User = require('../models/User');
const UserRepository = require('../repositories/UserRepository');
const Credentials = require('../utils/credentials');

const repository = new UserRepository();
const credentials = new Credentials();

class UserApplication {
    async create(req, res) {
        const body = req.body;
        let user = new User(body.name, body.email, body.password);

        if (await repository.findByEmail(user.email)) {
            res.status(400).json({ message: 'Email já cadastrado' });
            return;
        }

        const validation = user.validate();
        if (validation) {
            res.status(400).json({ message: validation });
        };
    
        user.password = await credentials.hash(user.password);
        user = await repository.store(user);

        const token = await credentials.createToken(user.lastID);

        res.status(201).json({ token: token });
    }

    async login(req, res) {
        const user = await repository.findByEmail(req.body.email)
        if (!user) {
            res.status(401).json({ message: 'Usuário não cadastrado!' });
            return;
        }

        if (await credentials.verify(user, req.body.password)) {
            const token = await credentials.createToken(user.id)
            res.status(200).json({ token: token });
            return;
        }

        res.status(401).json({ message: 'Senha incorreta!' });
    }
}

module.exports = UserApplication;