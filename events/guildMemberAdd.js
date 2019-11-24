module.exports = (client, member) => {

  const channel = client.channels.find(r => r.id === "637778501285707776");
  channel.send(`Salut à toi ${member} !`);
};
