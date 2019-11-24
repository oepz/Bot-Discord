const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  if (!message.guild) return;
  if (message.deletable) message.delete();
  if (!args[0]) return message.channel.send("**Veuillez poser une question** :x:");
  const rep = ["Non :x:", "J'ai envie de dormir :zzz:", "Balek :face_palm:", "Peut être... :thinking:", "Absolument :interrobang:"];
  const reptaille = Math.floor(Math.random() * rep.length);
  const question = args.slice(0).join(" ");

  const ball_embed = new Discord.MessageEmbed()

    .setAuthor(message.author.tag)
    .setColor("#ffffff")
    .addField("Question:", question)
    .addField("Réponse:", rep[reptaille])
    .setThumbnail(message.author.displayAvatarURL);
    
  message.channel.send(ball_embed);
};

exports.help = {
  name: "8ball"
};