const Discord  = require('discord.js');

const client = new Discord.Client();

const prefix = '>'

client.once('ready', ()=>{
    console.log('RichItActivities is on the action!');
})

client.on('message', message=>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;
})





client.login('mytoken');

