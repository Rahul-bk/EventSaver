const db =require('./user')

const register = (userId, email, password, date_of_birth) => {

    return db.User.findOne({ userId }).then(user => {
        console.log("user", user)
        if (user) {
            return {
                statusCode: 422,
                status: false,
                message: "Already Exist"
            }
        } else {
            const newUser = new db.User({
                userId,
                email,
                password,
                date_of_birth
            })
            newUser.save()
            return {
                statusCode: 200,
                status: true,
                message: "Register successfully"
            }
        }
    })
}
module.exports={register}