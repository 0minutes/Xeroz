const consoleColour = require('gradient-string');

async function WebhookSpam(guildId, Content, Amount, xeroz)
	{
		  process.title = `${xeroz.user.username} | [2: WEBHOOK SPAM]`;
		  const guild = xeroz.guilds.cache.get(guildId);
		  const channels = guild.channels.cache;
		
		  if (!guild) 
		  {
			process.title = `${xeroz.user.username} | [ERROR]`;
			console.log(consoleColour.mind("[Error] : ") + `Guild with ID ${guildId} does not exist.`);
			Xeroz();
		  } else 
		  {
			channels.forEach(async channel => 
			  {
				let i = 0;
				while (i < Amount)
				{
				channel.send(Content);
				console.log(consoleColour.mind(`[${xeroz.user.username} Sent] : `) + `"${Content}" in "${channel.name}"`);
				i++;
				}
			});
		  }
	}

module.exports = {
    WebSpam: WebhookSpam
    };