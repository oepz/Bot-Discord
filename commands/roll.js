const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.guild) return;
  if (message.deletable) message.delete();
  const count = args[0];
  if (isNaN(count)) return message.channel.send("Ceci n'est pas un chiffre.");
  const number = Math.floor(Math.random() * count) + 1;

  const roll_embed = new Discord.RichEmbed()
    .setAuthor(`Roll de ${message.author}`, message.author.displayAvatarURL)
    .addField("**A roll :** ", "🎲** " + number + "** *sur*  " + count)
    .setThumbnail(message.author.displayAvatarURL)
    .setColor("BLUE");
  message.channel.send(roll_embed);
};

module.exports.help = {
  name: "roll"
};
