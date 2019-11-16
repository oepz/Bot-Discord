const mongoose = require("mongoose");
const { DBCONNECTION } = require("../config");

module.exports = {
  init: () => {
    const mongOptions = {
      useNewUrlParser: true,
      useFindAndModify: false,
      autoIndex: false,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 500,
      poolSize: 10,
      bufferMaxEntries: 0,
      connectTimeoutMS: 10000,
      family: 4,
      useUnifiedTopology: true
    };

    mongoose.connect(DBCONNECTION, mongOptions);
    mongoose.Promise = global.Promise;

    mongoose.connection.on("connected", () =>
      console.log("Mongoose est connecté !")
    );
    mongoose.connection.on("disconnected", () =>
      console.log("Mongoose est déconnecté !")
    );
  }
};
