const mongoose = require("mongoose");
const { Guild, User } = require("../models/index");

module.exports = client => {
  client.getGuild = async guild => {
    const data = await Guild.findOne({ guildID: guild.id });
    if (data) return data;
    return client.config.defaultSettings;
  };

  client.updateGuild = async (guild, settings) => {
    let data = await client.getGuild(guild);
    if (typeof data !== "object") data = {};
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key];
    }
    return data.updateOne(settings);
  };

  client.createGuild = async guild => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, guild);
    const createGuild = new Guild(merged);
    createGuild
      .save()
      .then(g => console.log(`Nouveau serveur -> ${g.guildName}`));
  };

  client.createUser = async user => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, user);
    const createUser = await new User(merged);
    createUser
      .save()
      .then(g => console.log(`Nouveau membre -> ${g.userName}`));
  };
};