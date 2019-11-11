const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content.startsWith(`${config.PREFIX}ping`)) {
    msg.channel.send("Pong!");
  }
  if (msg.content.startsWith(`${config.PREFIX}pong`)) {
    msg.channel.send("Ping!");
  }
});

client.login(config.TOKEN);
