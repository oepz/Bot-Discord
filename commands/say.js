exports.run = (client, message, args) => {
  if (message.deletable) message.delete();
  message.channel.send(args.join(" "));
};

exports.help = {
  name: "say"
};