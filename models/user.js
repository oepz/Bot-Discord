const mongoose = require("mongoose");
const { USERDEFAULTSETTINGS: defaults } = require("../config");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  GuildID: String,
  userID: String,
  userName: String,
  force: {
    "type": String,
    "default": defaults.force
  },
  defense: {
    "type": String,
    "default": defaults.defense
  },
  vitesse: {
    "type": String,
    "default": defaults.vitesse
  },
  esquive: {
    "type": String,
    "default": defaults.esquive
  },
  maitrise_épée: {
    "type": String,
    "default": defaults.maitrise_épée
  },
  XP: {
    "type": String,
    "default": defaults.XP
  },
  Level: {
    "type": String,
    "default": defaults.Level
  }
});

module.exports = mongoose.model("User", userSchema);
