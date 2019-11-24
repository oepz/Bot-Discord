exports.run = async (client, message) => {

  if (!message.guild) return;
  if (message.deletable) message.delete();
  const avatarUser = message.guild.member(message.mentions.users.first());
  message.channel.send("**Voici l'avatar de : **" + avatarUser.user + "\n" + avatarUser.user.avatarURL);
};

exports.help = {
  name: "avatar"
};