const consoleColour = require('gradient-string');
const {checkGuild} = require("./ErrorHandlers/CheckGuild")
const {sleep} = require("./ErrorHandlers/CheckGuild")

async function BanAll(guildId, xeroz) {
    process.title = `${xeroz.user.username} | [5 : BAN ALL]`;
  
    try {
      await checkGuild(guildId, xeroz);
    } catch (error) {
      console.error;
      return;
    }
  
    const guild = xeroz.guilds.cache.get(guildId);
    const members = await guild.members.fetch();
    members.forEach(async (member) => {
      try {
        await member.ban();
        console.log(consoleColour.mind("[Banned] : ") + `${member.user.username}!`);
        await sleep(100);
      } catch (error) {
        console.error(consoleColour.mind("[Error] : ") + `Unable to ban ${member.user.username}: ${error}`);
      }
    });
  }
  

module.exports = {
	Ban: BanAll
	};	