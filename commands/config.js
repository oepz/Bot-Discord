exports.run = async (client, message, args, settings) => {
  
  if (!message.guild) return;
  if (message.deletable) message.delete();
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Tu n'as pas les permissions requises.");
  
  const getSetting = args[0];
  const newSetting = args.slice(1).join(" ");

  switch (getSetting) {
  case "prefix": {
    if (newSetting) {
      await client.updateGuild(message.guild, { prefix: newSetting });
      return message.channel.send(`Prefix mis à jour : \`${settings.prefix}\` -> \`${newSetting}\``);
    }
    message.channel.send(`Prefix actuel : \`${settings.prefix}\``);
    break;
  }
  case "welcomeChannel": {
    if (newSetting) {
      await client.updateGuild(message.guild, { welcomeChannel: newSetting });
      return message.channel.send(`Channel de bienvenue mis à jour : \`${settings.welcomeChannel}\` -> \`${newSetting}\``);
    }
    message.channel.send(`Channel de bienvenue actuel : \`${settings.welcomeChannel}\``);
    break;
  }
  case "welcomeMessage": {
    if (newSetting) {
      await client.updateGuild(message.guild, { welcomeMessage: newSetting });
      return message.channel.send(`Message de bienvenue mis à jour : \`${settings.welcomeMessage}\` -> \`${newSetting}\``);
    }
    message.channel.send(`Message de bienvenue actuel : \`${settings.welcomeMessage}\``);
    break;
  }
  }
};

exports.help = {
  name: "config"
};