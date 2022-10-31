const mongoose=require('mongoose')


const Event = mongoose.model("Event", {
    eventName: String,
    eventDate: String,
    userId: String,
    Priority: String
   
})

module.exports=Event