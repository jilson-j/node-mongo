const express= require('express')

const app =express.Router()

app.get('/user',async(req,res)=>{
    try{
        return res.json({
            'message':'test'
        })
    }catch(error){

    }
})

module.exports=app