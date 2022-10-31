const db = require('./user')

const login = (email, password) => {
    return db.User.findOne({ email, password }).then(user => {
        if (user) {
            return {
                statusCode: 200,
                status: true,
                message: "Login success",

            }
        } else {
            return {
                statusCode: 422,
                status: false,
                message: "Login Error",
            }
        }
    })
}
module.exports={login}