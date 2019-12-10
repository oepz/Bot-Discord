module.exports = async (client, member) => {

  const channel = client.channels.find(r => r.id === "637778501285707776");
  channel.send(`Salut à toi ${member} !`);

  const newUser = {
    GuildID: member.guild.id,
    userID: member.id,
    userName: member.userName
  };

  await client.createGuild(newUser);
};