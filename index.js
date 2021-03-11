require("dotenv").config()

let emojis =[]

const{Client}=require('discord.js')
const client= new Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']})

client.on("ready",()=>{
  console.log("bot enter")
  //client.channels.cache.get(818936508152807445).message.cache.get(818986591959515157)
  guild=client.guilds.cache.get("818908487270531074");
})

client.on("message",(message)=>{
  console.log(message.content)
})

client.on("messageReactionAdd",(r,who)=>{
  //console.log(r._emoji.name=="👱‍♂️")
  //console.log(r)
  if(r._emoji.name=="👱‍♂️"){
    console.log(guild.member(who))
    console.log(guild.roles.cache.find(r => r.id === "818925757605871647"))
    guild.member(who).roles.add(guild.roles.cache.find(r => r.id === "818925757605871647")).catch(console.error);
    
  }
})

client.login(process.env.token)