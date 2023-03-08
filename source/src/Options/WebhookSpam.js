const consoleColour = require('gradient-string');
const {ChannelType} = require('discord.js')
const {sleep} = require("./CheckGuild")
const {checkGuild} = require("./CheckGuild")

async function WebhookSpam(guildId, Content, Amount, xeroz) {
	process.title = `${xeroz.user.username} | [2: WEBHOOK SPAM]`;

	try {
		await checkGuild(guildId, xeroz);
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
		  for (let i = 0; i < Amount; i++) {
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
  