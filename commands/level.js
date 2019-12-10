/* const Discord = require("discord.js");
const xp = require("../json/xp.json");

exports.run = async (client, message) => {

  if (!message.guild) return;
  if (message.deletable) message.delete();
  if (!xp[message.author.id + message.guild.id]) {
    xp[message.author.id + message.guild.id] = {
      xp: 0,
      level: 1
    };
  }

  const cxp = xp[message.author.id + message.guild.id].xp;
  const clvl = xp[message.author.id + message.guild.id].level;
  const nextLvlup = clvl * clvl * 500;
  const difference = nextLvlup - cxp;

  const lvlEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setColor("#2affb4")
    .addField("**Niveau :**", clvl, true)
    .addField("**XP :**", cxp, true)
    .setFooter(`${difference} XP pour Level up.`);

  message.channel.send(lvlEmbed);
};

exports.help = {
  name: "level"
}; */
