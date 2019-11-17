const Discord = require("discord.js");
const client = new Discord.Client();
const { TOKEN, PREFIX } = require("./config");

client.PREFIX = PREFIX;
require("./util/functions")(client);
client.mongoose = require("./util/mongoose");
client.commands = new Discord.Collection();

client.commands.set("say", require("./commands/say.js"));
client.commands.set("sinfo", require("./commands/sinfo.js"));
client.commands.set("image", require("./commands/image.js"));
client.commands.set("eval", require("./commands/eval.js"));

client.on("ready", () => require("./events/ready.js")(client));
client.on("message", msg => require("./events/message.js")(client, msg));
client.on("guildMemberAdd", member =>
  require("./events/guildMemberAdd.js")(client, member)
);
client.on("guildCreate", guild =>
  require("./events/guildCreate.js")(client, guild)
);

client.mongoose.init();
client.login(TOKEN);
client.on("error", console.error);
client.on("warn", console.warn);
