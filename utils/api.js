const axios = require('axios');
const api = {
    async getUser(username) {
        const user = await axios.get(`https://api.github.com/users/${username}`)
        return user.data;
    }
};

module.exports = api