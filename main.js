const Discord = require("discord.js");
const client = new Discord.Client();
const { TOKEN, PREFIX } = require("./config");

client.PREFIX = PREFIX;

client.commands = new Discord.Collection();
client.commands.set("say", require("./commands/say.js"));
client.commands.set("sinfo", require("./commands/sinfo.js"));
client.commands.set("image", require("./commands/image.js"));

client.on("ready", () => require("./events/ready.js")(client));
client.on("message", msg => require("./events/message.js")(client, msg));
client.on("guildMemberAdd", member =>
  require("./events/guildMemberAdd.js")(client, member)
);

client.login(TOKEN);
client.on("error", console.error);
client.on("warn", console.warn);
