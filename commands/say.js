module.exports = (client, message, args) => {
  if (message.deletable) message.delete();
  message.channel.send(args.join(" "));
};