const mongoose=require('mongoose')


const Delete_event = mongoose.model("Delete_event", {
    eventName: String,
    eventDate: String,
    userId: String,
})

module.exports=Delete_event