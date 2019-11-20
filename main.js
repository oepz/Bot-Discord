const Discord = require("discord.js");
const { TOKEN } = require("./config");
const client = new Discord.Client();
const fs = require("fs");

require("./util/functions")(client);
client.mongoose = require("./util/mongoose");
client.commands = new Discord.Collection();

fs.readdir("./events/", (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
    if (!file.endsWith(".js")) return undefined;
    const event = require(`./events/${file}`);
    const eventName = file.split(".")[0];
    console.log(`Evénement ${eventName} chargé.`);
    client.on(eventName, event.bind(null, client));
  });
});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
    if (!file.endsWith(".js")) return undefined;
    const props = require(`./commands/${file}`);
    const cmdName = file.split(".")[0];
    console.log(`Commande ${cmdName} chargée.`);
    client.commands.set(cmdName, props);
  });
});

client.mongoose.init();
client.login(TOKEN);
client.on("error", console.error);
client.on("warn", console.warn);
