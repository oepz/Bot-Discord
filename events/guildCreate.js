module.exports = (client, guild) => {
  const newGuild = {
    guildID: guild.id,
    guildName: guild.name
  };

  client.createGuild(newGuild);
};
