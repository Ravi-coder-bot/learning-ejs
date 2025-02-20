const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static("public/css"));
app.use(express.static("public/js"));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs")
})

app.get("/ig/:username",(req,res)=>{

    let{ username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(instaData[username]);
    res.render("instagram.ejs",{data});
})

app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6) + 1;
    res.render("rolldice.ejs",{diceVal});
})

app.listen(port , ()=>{
    console.log(`listening on port ${port}`);
});