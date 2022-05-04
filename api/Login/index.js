module.exports = async function (context, req) {
    context.log('Login request received')

    const username = (req.query.username || (req.body && req.body.username))
    const password = (req.query.password || (req.body && req.body.password))

    if (username && password) {
        const users = require('./users.json')
        try {
        const query = users.find(item => {
            return item.username === username && item.password === password
         }).token
         return {
            status: 200,
            body: {
                message: username + ' logged in at ' + new Date().toLocaleString(),
                token: query,
            },
        }
        } catch (error) {
            return {
                status: 500,
                body: {
                    message: 'user not found',
                },
            }
        }
    } else {
        return {
            status: 400,
            body: {
                message: 'Please pass a username and password in the query string or in the request body',
            },
        }
    }
}
