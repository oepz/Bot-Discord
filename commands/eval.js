exports.run = async (client, message, args) => {
  function clean(text) {
    if (typeof text === "string")
      return text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    return text;
  }

  if (message.author.id !== "496044799024168997") return undefined;
  const code = args.join(" ");
  const evaled = await eval(code);
  const cleanCode = await clean(evaled);
  message.channel.send(cleanCode, { code: "js" });
};

exports.help = {
  name: "eval"
};