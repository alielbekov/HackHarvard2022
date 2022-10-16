require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const app =  express();
const mongoose = require("mongoose");
const dataParserObject = require(__dirname + "/views/dataParser.js");
const patternRecognizerObject = require(__dirname+"/views/recognizePattern.js");
const Instagram = require("instagram-web-api");
const PREFIX = "?";
var posting = false;


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
mongoose.connect("mongodb+srv://"+process.env.API_USERNAME+":"+process.env.API_KEY+"@cluster0.mjlk1.mongodb.net/?retryWrites=true&w=majority/testDB/test", { useNewUrlParser: true, useUnifiedTopology: true, writeConcern: { w: 'majority', j: true, wtimeout: 1000 }})


const postSchema = new mongoose.Schema({
date: Object,
type: String,
source: String,
});
const Memo = mongoose.model("memo", postSchema);
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages
  ],
     partials: [Partials.Channel] });
client.login(process.env.DISCORD_BOT_TOKEN);


client.on('messageCreate', msg => {
  if(msg.author.bot) return;
   // You can view the msg object here with console.log(msg)
   if (msg.content.startsWith(PREFIX)) {
   const [CMD_NAME, ...args] = msg.content.trim().substring(PREFIX.length).split(/\s+/);
   if(CMD_NAME === "help"){
     msg.reply("\
      \n   *?help*-- for instructions.\n\
     *?post*-- for starting posts.\n\
      *?stop* -- for stopping posts.")
     //do smth
   }
   else if(CMD_NAME === "stop"){
     posting = false;
     msg.reply("Posting has finished! type in ?help for help!")

     //do smth
   }
   else if(CMD_NAME === "post"){
     posting = true;
     msg.reply("Posting has started! You can post now!")
   }else{
      msg.reply("Sorry, I do not recognize this command! Try ?help for help!");
     }
   }
    if(posting){
      if(msg.author.bot) return;
      var ret = patternRecognizerObject.recognize(msg.content);
        if(ret){
          const type =ret;
          const time  = new Date();
          const post = new Memo({
            date: time,
            type: type,
            source: msg.content
          });
          post.save();
          msg.reply("Your post has been saved!!!");

        }else{
          msg.reply("Did not recognize this type format!")
        }

      }
    else{
      msg.reply("You are in a posting mode. Use ?help for help!")
        // do nothning
      }
});



app.get("/", function(req, res){
  var postObject = Memo.find({}).sort([['date', -1]]).exec(function(err, callback){
  if(err){
    console.log(err);
  }else{

    var readyHtml = dataParserObject.getContentHtml(callback);
    res.render("list",{data:readyHtml});
  }});
});




app.listen(process.env.PORT || 3000, function(){
    console.log("It is working!");
})
