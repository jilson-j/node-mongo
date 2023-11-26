const express=require('express')
const mongoose=require('mongoose')
const app=express()
const userRoute=require('./routes')
app.use(express())
app.use(express.json())
app.use(userRoute)
//mongo db connection 
const url = 'mongodb://localhost:27017';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

//end mongodb connection

//routes setup


// end routed setup

app.listen(3000,(err,res)=>{
    console.log('Port running  on the port 3000')
})