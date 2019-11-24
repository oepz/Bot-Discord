module.exports.run = async (bot, message) => {
  const Discord = require("discord.js");
  const ms = require("ms");
  const member = message.mentions.members.first();
  if (!member) return message.channel.send("**Tu dois mentionner un membre pour cela.**");
  let muteRole = message.guild.roles.find("name", "🔇 Muted 🔇");
  if (!muteRole) {
    try {
      muteRole = await message.guild.createRole({
        name: "🔇 Muted 🔇",
        color: "#2f3136",
        permissions: []
      });
      message.guild.channels.forEach(async channel => {
        await channel.overwritePermissions(muteRole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } catch (e) {
      console.error.log(e.stack);
    }
  }
  const params = message.content.split(" ").slice(1);
  const time = params[1];
  if (!time) return message.channel.send("**Il te faut préciser un temps de mute.");

  member.addRole(muteRole.id);

  const muteEmbed = new Discord.RichEmbed()

    .setDescription("**🔇 UN MUTE VIENT D'ÊTRE RÉALISÉ 🔇**")
    .setColor("BLUE")
    .addField("Membre Mute :", `${member} d'ID : ${member.id}`)
    .addField("A été mute pendant", `${ms(ms(time), { "long": true })}.`)
    .addField("Mute par :", `<@${message.author.id}> d'ID : ${message.author.id}`)
    .addField("Mute dans :", message.channel)
    .addField("Mute à :", message.createdAt);

  message.channel.send(muteEmbed);

  setTimeout(() => {
    member.removeRole(muteRole.id);
    message.channel.send(`<@${member.user.id}> **Tu viens de te faire unmute, le mute à duré : ${ms(ms(time), { "long": true })}**`);
  }, ms(time));

};


module.exports.help = {
  name: "mute"
};