const mongoose=require('mongoose')


const User = mongoose.model("User", {
    userId: String,
    email: String,
    password: String,
    date_of_birth: String
})

module.exports ={User}