const consoleColour = require('gradient-string');
const {checkGuild} = require("./CheckGuild")
const {sleep} = require("./CheckGuild")


async function deleteC(guildId, xeroz) {

	process.title = `${xeroz.user.username} | [1 : DEL CHANNELS]`;

	try {
		await checkGuild(guildId, xeroz);
	  } catch (error) {
		console.error;
		return;
	  }

	const guild = xeroz.guilds.cache.get(guildId);
	const channels = await guild.channels.fetch();

	  channels.forEach(async channel => {
		try {
		  console.log(consoleColour.mind("[Deleted] : ") + "Channel " + channel.name);
		  await channel.delete();
		  await sleep(100)
		} catch (error) {
		  console.error(consoleColour.mind(`[Error] : `) + `Unable to delete ${channel.name}:`, error.message);
	}
  })
}
  

module.exports = {
	DelChannels: deleteC
};	