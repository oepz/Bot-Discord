const xp = require("../json/xp.json");
const fs = require("fs");


exports.run = async (bot, message, args) => {

  if (!message.guild) return;
  if (message.deletable) message.delete();
  const monsterlvl = args[0];
  const countxp = monsterlvl * monsterlvl * 100;
  // eslint-disable-next-line no-mixed-operators
  const xpAdd = Math.floor(Math.random() * countxp) + countxp / 2;
  console.log(xpAdd);

  if (!xp[message.author.id + message.guild.id]) {
    xp[message.author.id + message.guild.id] = {
      xp: 0,
      level: 1
    };
  }

  const curxp = xp[message.author.id + message.guild.id].xp;
  const curlvl = xp[message.author.id + message.guild.id].level;
  const nxtLvl = curlvl * curlvl * 500;
  xp[message.author.id + message.guild.id].xp = curxp + xpAdd;
  while (nxtLvl < curxp) {
    xp[message.author.id + message.guild.id].level += 1;

    message.channel.send(`Bravo, tu es passé au lvl ${curlvl + 1} !`);
  }

  fs.writeFile("./json/xp.json", JSON.stringify(xp), err => {
    if (err) console.log(err);
  });
};


exports.help = {
  name: "récompense"
};