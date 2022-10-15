require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const app =  express();
const mongoose = require("mongoose");
const dataParserObject = require(__dirname + "/views/dataParser.js");


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
mongoose.connect("mongodb+srv://"+process.env.API_USERNAME+":"+process.env.API_KEY+"@cluster0.mjlk1.mongodb.net/?retryWrites=true&w=majority/testDB/test", { useNewUrlParser: true, useUnifiedTopology: true, writeConcern: { w: 'majority', j: true, wtimeout: 1000 }})

const postSchema = new mongoose.Schema({
author: String,
title: String,
date: Object,
content: String,
source: String,
imgLink: String
});
const Post = mongoose.model("blogs", postSchema);

const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds], partials: [Partials.Channel] });
client.login(process.env.DISCORD_BOT_TOKEN);


client.on('ready', ()=>{
  console.log(`${client.user.tag}`);
})

app.get("/", function(req, res){
  var postObject = Post.find({}).sort([['date', -1]]).exec(function(err, callback){
  if(err){
    console.log(err);
  }else{

    var readyHtml = dataParserObject.getContentHtml(callback);
    res.render("list",{data:readyHtml});
  }});




});

app.get("/add", function(req, res){
    const time  = new Date();
    const post = new Blog({
      date: time,
      source:"httpssdlkj?skdjlkjoaspoj"
    });
    post.save();
    res.redirect("/");

});



app.listen(process.env.PORT || 3000, function(){
    console.log("It is working on port");
})
