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
        await repository.store(user);
        user = await repository.findByEmail(user.email);

        const token = await credentials.createToken(user.id);

        res.status(201).json({ id: user.id, name: user.name, token: token });
    }

    async login(req, res) {
        const user = await repository.findByEmail(req.body.email)
        if (!user) {
            res.status(401).json({ message: 'Usuário não cadastrado!' });
            return;
        }

        if (await credentials.verify(user, req.body.password)) {
            const token = await credentials.createToken(user.id)
            res.status(200).json({ id: user.id, name: user.name, token: token });
            return;
        }

        res.status(401).json({ message: 'Senha incorreta!' });
    }

    async myself(req, res) {
        const authUserId = req.headers.id;
        const myself = await repository.find(authUserId);

        const response = { id: myself.id, name: myself.name, picture: myself.picture }
        res.status(200).json(response);
    }

    async logout(req, res) {
        const authUserId = req.headers.id;
        await repository.updateToken(authUserId, null);

        res.sendStatus(200);
    }

    async updatePicture(req, res) {
        const authUserId = req.headers.id;
        await repository.updatePicture(authUserId, req.params.pictureId);

        res.sendStatus(200);
    }
}

module.exports = UserApplication;