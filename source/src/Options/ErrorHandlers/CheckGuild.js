const consoleColour = require('gradient-string');

function sleep(ms) 
{

    return new Promise(resolve => setTimeout(resolve, ms));

}

async function checkGuildId(guildId, xeroz)
{

	const guild = xeroz.guilds.cache.get(guildId);
	if (!guild) 
	{
	  process.title = `${xeroz.user.username} | [ERROR]`;
	  console.log(consoleColour.mind("[Error] : ") + `Guild with ID ${guildId} does not exist.`);
      await sleep(2000);
      throw new Error(consoleColour.mind("[Error] : ") + `Guild with ID ${guildId} does not exist.`);
	}
}

module.exports = {
    checkGuild : checkGuildId,
    sleep : sleep
};