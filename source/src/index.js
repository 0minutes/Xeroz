console.clear();
require("dotenv").config();
const { Client, GatewayIntentBits, DiscordjsError, disableValidators } = require('discord.js');
const consoleColour = require('gradient-string');
const q = require('readline-sync');
const { exec } = require('child_process');

const Token = q.question((consoleColour.mind) ("What's your Bot Token? "));
console.clear();
const logo = [`
					 db    db d88888b d8888b.  .d88b.  d88888D 
					  8b  d8' 88'     88  8D .8P  Y8. YP  d8' 
					   8bd8'  88ooooo 88oobY' 88    88    d8'  
					  .dPYb.  88~~~~~ 888b   88    88   d8'   
					 .8P  Y8. 88.     88 88. 8b  d8'  d8' db 
					 YP    YP Y88888P 88   YD  Y88P'  d88888P 
`];

function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}
try
{
const xeroz = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

xeroz.on("ready", (xeroz) => {
	process.title = ` ${xeroz.user.username} | Num Of Guilds: ${xeroz.guilds.cache.size}`;
	console.log((consoleColour.mind)(logo),(consoleColour.mind)`\n\t\t\t\t\t\t\t[1] Nuke\n\t\t\t\t\t\t\t[2] BanAll\n`);
	let option = q.question((consoleColour.mind) ("[Option] : "));
	//OPTION 1

	if (option == "1")
	{

	process.title = ` ${xeroz.user.username} | [1: NUKING]`;
	let GuildID = q.question((consoleColour.mind) ("[Guild ID] : "));
	const guild = xeroz.guilds.cache.get(GuildID);
		// If guild not found
		if (!guild){
		process.title = ` ${xeroz.user.username} | [ERROR]`;
    	console.log((consoleColour.mind)(`[Error] : Guild with ID ${guildId} does not exist.`));
		sleep(2500)
		process.exit()
    	} 
		else {
		process.title = ` ${xeroz.user.username} | [NUKING]`;
		console.log((consoleColour.mind)(`[Error] : `) + `${guild.name}; Command in development`);
		}
	}
})
	xeroz.login(Token);
} catch (error) {
	console.error((consoleColour.mind)(`[Error] : `) + "Invalid Token: ", error.message);
	if (error.message === DiscordjsError(ErrorCodes.TokenInvalid)) {
		console.log("Please check your bot token and try again.");
		exec(`C:\\Users\\pavlo\\Downloads\\ESSENTIALS\\javascript\\DiscordJS\\start.bat`);
	  }
	exec(`C:\\Users\\pavlo\\Downloads\\ESSENTIALS\\javascript\\DiscordJS\\start.bat`);
}