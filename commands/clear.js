const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  if (!message.guild) return;
  if (message.deletable) message.delete();
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission pour réaliser ceci.");
  const count = args[0];
  if (!count) return message.channel.send("Veuillez saisir un nombre de message pour que je puisse les supprimer.");
  if (isNaN(count)) return message.channel.send("Votre nombre n'est pas valide, veuillez réssayer en notant des chiffres.");
  if (count < 1 || count > 100) return message.channel.send("Votre nombre doit être compris entre 1 et 100.");
  // eslint-disable-next-line radix
  message.channel.bulkDelete(parseInt(count) + 1);

  const logsembed = new Discord.MessageEmbed()

    .setColor("BLUE")
    .addField("Clear par :", `<@${message.author.id}> ID : ${message.author.id}`)
    .addField("A supprimé :", count + "messages.")
    .setTimestamp();

  const incidentchannel = message.guild.channels.find("id", "605813639433158666");
  if (!incidentchannel) return message.channel.send("Je ne trouve pas le channel dédié...");

  incidentchannel.send(logsembed);
};

exports.help = {
  name: "clear"
};