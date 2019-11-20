const { MessageEmbed } = require("discord.js");

exports.run = (client, message) => {
  if (!message.guild) return;
  if (message.deletable) message.delete();

  const sembed = new MessageEmbed()

    .setDescription(message.guild.name)
    .setThumbnail(message.guild.owner.user.avatarURL())
    .addField("Membres :", message.guild.memberCount, true)
    .addField("Owner :", message.guild.owner.user.tag, true)
    .setImage(message.guild.iconURL())
    .setTimestamp();
  message.channel.send(sembed);
};

exports.help = {
  name: "sinfo"
};