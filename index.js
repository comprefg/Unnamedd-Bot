//////////////24/7

const express = require('express');
const server = express();
server.all('/', (req, res)=>{
    res.send('Discord Bot Working')
})
function keepAlive(){
    server.listen(3000, ()=>{console.log("Server is Ready!")});
}
module.exports = keepAlive;
keepAlive();
///////////////////
require("dotenv").config()



const{Client}=require('discord.js')
const client= new Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']})

emojis =["👱‍♂️","👨‍🦱","👩‍🦰","🙇","❤️","🧡'","💛","💚","💜","🤍","🖤","🛑","⏹️","🔇","🔉","🔊","🚩"]
roles =["818930792859959326","818926045977640971","818926084359192587","818987430891356190","818987555755130971","818987616829440011","818987640766464022","818987862883565650","818987895595204640","818987926577872927","818987966155456532","818988032211812407","818988063647596595","818989300493975582","818989334060728362","818989378465562664","819268381068099635"]

client.on("ready",()=>{
  console.log("bot enter")
  //client.channels.cache.get(818936508152807445).message.cache.get(818986591959515157)
  guild=client.guilds.cache.get("818908487270531074");
})

client.on("message",(message)=>{
  console.log(message.content)
})

client.on("messageReactionAdd",(r,who)=>{
  if(r.message.id==818986591959515157){
  
  //console.log(r._emoji.name=="👱‍♂️")
  //console.log(r.emoji)
  emojis.forEach((it,i)=>{
    //console.log(emojis[i])
  if(r._emoji.name==emojis[i]){
    //console.log("trigger")
    //console.log(guild.roles.cache.find(r => r.id === "818925757605871647"))
    guild.member(who).roles.add(guild.roles.cache.find(r => r.id === roles[i])).catch(console.error);
    
  }
  })
}
})

client.on("messageReactionRemove",(r,who)=>{
  if(r.message.id==818986591959515157){
  //console.log(r._emoji.name=="👱‍♂️")
  //console.log(r.emoji)
  emojis.forEach((it,i)=>{
    //console.log(emojis[i])
  if(r._emoji.name==emojis[i]){
    //console.log("trigger")
    //console.log(guild.roles.cache.find(r => r.id === "818925757605871647"))
    guild.member(who).roles.remove(guild.roles.cache.find(r => r.id === roles[i])).catch(console.error);
    
  }
  })
  }
})
client.on("guildMemberAdd",(member)=>{
  guild.member(member).roles.add(guild.roles.cache.find(r => r.id == 818909737403154482))
})


client.login(process.env.token)