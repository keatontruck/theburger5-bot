console.log("index.js has been executed");

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("bot has logged into the account");
});

client.on("b!burgee", (message) => {
  if (message.author.bot) return;
  burger //bot commands here
});

client.login("ODAzODU5Nzg1Njk0NTc2NjYx.YBD6ww.Hi1ICOGMjcVpWrNVFQSiX0n91fM");
