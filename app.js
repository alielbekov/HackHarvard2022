require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const app =  express();
const mongoose = require("mongoose");
app.use(express.static("public"));
mongoose.connect("mongodb+srv://"+process.env.API_USERNAME+":"+process.env.API_KEY+"@cluster0.mjlk1.mongodb.net/?retryWrites=true&w=majority/testDB/test", { useNewUrlParser: true, useUnifiedTopology: true, writeConcern: { w: 'majority', j: true, wtimeout: 1000 }})

const blogPostSchema = new mongoose.Schema({
author: String,
title: String,
date: Object,
content: String,
source: String,
imgLink: String
});



const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds], partials: [Partials.Channel] });
client.login(process.env.DISCORD_BOT_TOKEN);
client.on('ready', ()=>{
  console.log(`${client.user.tag}`);
})

// const obj  = JSON.parse(json);
// obj.forEach((x)=>{
//   console.log(x);
// })


app.get("/", function(req, res){
  res.send("Hello")

})



app.listen(process.env.PORT || 3000, function(){
    console.log("It is working on port");
})
