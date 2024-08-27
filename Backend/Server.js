const express = require('express')
const workoutRoutes = require('./routes/Workout')
const mongoose = require('mongoose')

require('dotenv').config()


//Express app
const app = express()


//Middleware
app.use(express.json())

app.use((req,res,next)=>{
  console.log(req.path, req.method)
  next()
})


//Routes
app.use('/api/workouts', workoutRoutes)


//CONNECT TO DATABASE
mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    //Listen for requests
    app.listen(process.env.PORT, ()=>{
    console.log('Server is connected to database & listening on port',process.env.PORT);
    })
  })
  .catch((err)=>{
    console.log(err)
  }) 