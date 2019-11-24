const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  if (!message.guild) return;
  if (message.deletable) message.delete();
  const bUser = message.guild.member(message.mentions.users.first());
  if (!bUser) return message.channel.send("*Je ne trouve pas cette personne sur le serveur... :pensive:*");
  const bReason = args.slice(1).join(" ");
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("__Tu n'as pas l'autorisation de bannir ! :rage:__");
  if (bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("*Tu ne peux pas ban cette personne, dommage ^^.*");

  const banEmbed = new Discord.MessageEmbed()

    .setAuthor("**💥 LE MARTEAU DU BAN A FRAPPÉ ! 💥**")
    .setColor("RED")
    .addField("Membre banni :", `${bUser} ID : ${bUser.id}`)
    .addField("Banni par :", `<@${message.author.id}> ID : ${message.author.id}`)
    .addField("Banni dans :", message.channel)
    .addField("Raison :", bReason)
    .setTimestamp();

  const logsembed = new Discord.MessageEmbed()

    .setColor("RED")
    .addField("Membre banni :", `${bUser} ID : ${bUser.id}`)
    .addField("Banni par :", `<@${message.author.id}> ID : ${message.author.id}`)
    .addField("Raison :", bReason)
    .setTimestamp();

  const incidentchannel = message.guild.channels.find("id", "605813639433158666");
  if (!incidentchannel) return message.channel.send("Je ne trouve pas le channel dédié...");

  incidentchannel.send(logsembed);
  message.channel.send(banEmbed);
  bUser.createDM().then(channel => {
    channel.send(banEmbed);
  });
  {
    // eslint-disable-next-line no-use-before-define
    setTimeout(suiteTraitement, 2000);
  }
  function suiteTraitement() {
    message.guild.member(bUser).ban(bReason);
  }
};

exports.help = {
  name: "ban"
};