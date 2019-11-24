const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

  if (!message.guild) return;
  if (message.deletable) message.delete();
  const kUser = message.guild.member(message.mentions.users.first());
  if (!kUser) return message.channel.send("*Je ne trouve pas cette personne sur le serveur... :pensive:*");
  const kReason = args.slice(1).join(" ");
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("__Tu n'as pas l'autorisation de kick ! :rage:__");
  if (kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("*Tu ne peux pas ban cette personne, dommage ^^.*");

  const kickEmbed = new Discord.RichEmbed()

    .setDescription("**💫 UN I-KICK VIENT D'ÊTRE LANCÉ ! 💫**")
    .setColor("ORANGE")
    .addField("Membre Kick :", `${kUser} d'ID : ${kUser.id}`)
    .addField("Kick par :", `<@${message.author.id}> d'ID : ${message.author.id}`)
    .addField("Kick dans :", message.channel)
    .addField("Raison :", kReason)
    .addField("Heure :", message.createdAt);

  const logsembed = new Discord.MessageEmbed()

    .setColor("RED")
    .addField("Membre banni :", `${kUser} ID : ${kUser.id}`)
    .addField("Banni par :", `<@${message.author.id}> ID : ${message.author.id}`)
    .addField("Raison :", kReason)
    .setTimestamp();

  const incidentchannel = message.guild.channels.find("id", "605813639433158666");
  if (!incidentchannel) return message.channel.send("Je ne trouve pas le channel dédié...");

  incidentchannel.send(logsembed);
  message.channel.send(kickEmbed);
  kUser.createDM().then(channel => {
    channel.send(kickEmbed);
  });
  {
    // eslint-disable-next-line no-use-before-define
    setTimeout(suiteTraitement, 2000);
  }
  function suiteTraitement() {
    message.guild.member(kUser).kick(kReason);
  }
};


exports.help = {
  name: "kick"
};