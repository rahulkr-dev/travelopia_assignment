require('dotenv').config();
const express = require('express')
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());


app.get("/",async(req,res)=>{
    res.send("Working fine")
});

app.listen(PORT,async()=>{
    console.log("listening on PORT",PORT)
})
