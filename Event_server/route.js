const express=require('express')

const router=express.Router()

const Event=require('./service/event')

const Delete_event=require('./service/deleteEvent')

const objectId=require('mongoose').Types.ObjectId

//
router.post('/event',(req,res)=>{
    let event=new Event({
        eventName:req.body.eventName,
        eventDate:req.body.eventDate,
        userId:req.body.userId,
        Priority:req.body.Priority
    })
    event.save((err,doc)=>{
        if(err){
            console.log("Error",err)
        }else{
            res.send(doc)
        }
    })
})
//GET
router.get('/add',(req,res)=>{
    Event.find((err,doc)=>{
        if(err){
            console.log("error",err)
        }else{
            res.send(doc)
           

        }
    })
})
//DELETE

router.delete('/:id',(req,res)=>{
    if(objectId.isValid(req.params.id)){
        Event.findByIdAndRemove(req.params.id,(err,doc)=>{
            if(err){
                console.log("error event id",err)
            }else{
                res.send(doc)
                
            }
        })

    }else{
        return res.status(400).send(`No record found with ID ${req.params.id}`)
    }
})

router.post('/deleteadd',(req,res)=>{
    let delete_event=new Delete_event({
        eventName:req.body.eventName,
        eventDate:req.body.eventDate,
        userId:req.body.userId
    })
    delete_event.save((err,doc)=>{
        if(err){
            console.log("Error",err)
        }else{
            res.send(doc)
        }
    })
})
router.get('/trash',(req,res)=>{
    Delete_event.find((err,doc)=>{
        if(err){
            console.log("error",err)
        }else{
            res.send(doc) 

        }
    })
})

module.exports=router
