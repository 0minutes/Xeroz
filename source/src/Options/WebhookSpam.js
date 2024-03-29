const consoleColour = require('gradient-string');
const {ChannelType} = require('discord.js')
const {sleep} = require("./ErrorHandlers/CheckGuild")
const {checkGuild} = require("./ErrorHandlers/CheckGuild")
const {checkInt} = require("./ErrorHandlers/isInteger")

async function WebhookSpam(guildId, Content, amount, xeroz) {
	process.title = `${xeroz.user.username} | [2: WEBHOOK SPAM]`;

	try {
		await checkGuild(guildId, xeroz);
	} catch (error) {
		console.error;
		return;
	}

    try {
		await checkInt(amount, xeroz);
	  } catch (error) {
		console.error;
		return;
	  }
	const guild = await xeroz.guilds.cache.get(guildId);
	const channels = await guild.channels.fetch();
  
	if (!guild) {
	  process.title = `${xeroz.user.username} | [ERROR]`;
	  console.log(consoleColour.mind("[Error] : ") + `Guild with ID ${guildId} does not exist.`);
	  Xeroz();
	} else {
	  channels.each(async (channel) => {
		if (channel.type === ChannelType.GuildText) {
		  for (let i = 0; i < amount; i++) {
			await channel.send(Content);
			console.log(consoleColour.mind(`[${xeroz.user.username} Sent] : `) +`"${Content}" in "${channel.name}"`);
			await sleep(100)
		  }
		}
	  });
	}
  }
  
  module.exports = {
	WebSpam: WebhookSpam
  };
  