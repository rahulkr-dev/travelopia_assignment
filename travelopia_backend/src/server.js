require('dotenv').config();
const express = require('express')
const app = express();
const cors = require('cors');

// Travel all routes
const travelForm = require('./routes/travelForm.routes')

// Database connection function
const connect = require('./database/db')

const PORT = process.env.PORT || 8080;

// Default Middlewares
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:true}));

// Routes
app.use('/api/travel-form',travelForm);


app.get("/",async(req,res)=>{
    res.send("Working fine")
});

app.listen(PORT,async()=>{
    await connect();
    console.log("listening on PORT",PORT)
})
