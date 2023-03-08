const consoleColour = require('gradient-string');
const {checkGuild} = require("./CheckGuild")


async function AdminAll(guildId, xeroz) 
	{
		process.title = `${xeroz.user.username} | [3: ADMINALL]`;

		try {
			await checkGuild(guildId, xeroz);
		  } catch (error) {
			console.error;
			return;
		  }

		const guild = xeroz.guilds.cache.get(guildId);
		// const role = guild.roles.cache.find(r => r.name === "@everyone");

		guild.roles.everyone.setPermissions('Administrator')
		.then(() =>console.log(consoleColour.mind(`[Admin] : `)+ `Role "@everyone" has been given Administrator permissions`))
		.catch(error => {
		console.error(error);
		console.log(consoleColour.mind("[Error] : ") +'An error occurred while setting role permissions');
	    });
}

module.exports = {
    Admin: AdminAll
    };