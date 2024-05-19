const argon2 = require('argon2');
const UserRepository = require('../repositories/UserRepository');
const crypto = require('crypto');

const userRepository = new UserRepository();

class Credentials {
    async hash(password) {
        return argon2.hash(password);
    }

    async verify(user, password) {
        return argon2.verify(user.password, password);
    }

    async createToken(userId) {
        const token = crypto.randomUUID();
        await userRepository.updateToken(userId, token);

        return token;
    }
}

module.exports = Credentials;