const consoleColour = require('gradient-string');
const {sleep} = require("./ErrorHandlers/CheckGuild")
const {checkGuild} = require("./ErrorHandlers/CheckGuild")

async function RoleDel(guildId, xeroz) {
	process.title = `${xeroz.user.username} | [6: ROLE DEL]`;

	try {
		await checkGuild(guildId, xeroz);
	  } catch (error) {
		console.error;
		return;
	  }

	const guild = xeroz.guilds.cache.get(guildId);
	const roles = guild.roles.cache;
  
	if (!guild) {
	  process.title = `${xeroz.user.username} | [ERROR]`;
	  console.log(consoleColour.mind("[Error] : ") + `Guild with ID ${guildId} does not exist.`);
	  Xeroz();
	} else {
	  roles.forEach(async role => {
		try {
		  console.log(consoleColour.mind("[Deleted] : ") + "Role " + role.name);
		  await role.delete();
		  await sleep(100)
		} catch (error) {
		  console.error(consoleColour.mind(`[Error] : `) + `Unable to delete ${role.name}:`, error.message);
		}
	  })
	};
  }
  

module.exports = {
	RoleDelete: RoleDel
};	