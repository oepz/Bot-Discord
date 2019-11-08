const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('Pong!');
  }
});

client.login('NjQyNDIyMDIyMTgxMzU1NTcz.XcXl7A.OnlOc9YEjCXNyI-a5ImLXl9ZSwU');