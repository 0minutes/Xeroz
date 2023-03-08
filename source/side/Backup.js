console.clear();
// IMPORTS
require("dotenv").config();
const { ChannelType, Client, GatewayIntentBits, DiscordjsError, disableValidators, PermissionsBitField  } = require('discord.js');
const consoleColour = require('gradient-string');
const q = require('readline-sync');
const Token = q.question((consoleColour.mind) ("What's your Bot Token? ")); console.clear();


// CREATING THE CLIENT
const xeroz = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildWebhooks,
	],
});

// OPTIONS  (1 - 4)

const { DelChannels } = require('./Options/DelChannels'); //NUKER
const { Admin } = require('./Options/AdminAll'); //ADMINALL
const { WebSpam } = require('./Options/WebhookSpam'); // CHANNEL SPAM
const { MassChannel } = require('./Options/MassChannel'); // CHANNEL CREATE SPAM
const { Ban } = require('./Options/BanAll'); // CHANNEL CREATE SPAM

function OptionsUI(){

	const logo = [(consoleColour.mind)`
					db    db d88888b d8888b.  .d88b.  d88888D 
					'8b  d8' 88'     88  '8D .8P  Y8. YP  d8' 
					 '8bd8'  88ooooo 88oobY' 88    88    d8'  
					 .dPYb.  88~~~~~ 88'8b   88    88   d8'   
					.8P  Y8. 88.     88 '88. '8b  d8'  d8' db 
					YP    YP Y88888P 88   YD  'Y88P'  d88888P                                     
	`];

	let line1 = (consoleColour.mind)`\n\t\t\t\t[1] Del Channels\t\t[3] Admin All`
	let line2 = (consoleColour.mind)`\n\t\t\t\t[2] Webhook Spam\t\t[4] Mass Channel`
	let line3 = (consoleColour.mind)`\n\t\t\t\t[5] Ban All     \t\t[6] Role Delete`
	console.log(`${logo} ${line1} ${line2} ${line3}`)
}

// console.log((consoleColour.mind)(logo),(consoleColour.mind)`\n\t\t\t\t[1] Nuke\t\t\t[3] Admin All\n\t\t\t\t[2] Webhook Spam\t\t[4] Channel Spam\n`);

function MainScreen(){
	console.clear();
	process.title = ` ${xeroz.user.username} | Num Of Guilds: ${xeroz.guilds.cache.size}`;
	OptionsUI();
}

function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}
//DelChannels
async function Xeroz(){
console.clear();
	MainScreen();
	let option = q.question((consoleColour.mind) ("[Option] : "));
	//OPTION 1

	if (option == "1") 
	{
        let guildId = q.question(consoleColour.mind("[Guild ID] : "));
        DelChannels(guildId, xeroz);
        await sleep(1500);
        Xeroz();
	}
	//OPTION 2
	if (option == "2") 
	{
        let GuildID = q.question(consoleColour.mind("[Guild ID] : "));
        let Content = q.question(consoleColour.mind("[Message Content] : "));
        let Amount = q.question(consoleColour.mind("[Amount of messages] (Bot can get rate limited if too many messages need to be send!): "));
    
        WebSpam(GuildID, Content, Amount, xeroz);
        await sleep(1500);
        Xeroz();
	}
	//OPTION 3
	if (option == "3") 
	{
		let GuildID = q.question(consoleColour.mind("[Guild ID] : "));
		
        Admin(GuildID, xeroz)
        await sleep(1500);
        Xeroz();
	}
	//OPTION 4
	if (option == "4")
	{

		let GuildID = q.question(consoleColour.mind("[Guild ID] : "));
		let name = q.question(consoleColour.mind("[Channel Name] : "));
		let amount = q.question(consoleColour.mind("[Amount of channels] : "));
		
		MassChannel(GuildID, name, amount, xeroz);
		await sleep(1500);
		Xeroz();

	}

	if (option == "5")
	{

		let GuildID = q.question(consoleColour.mind("[Guild ID] : "));
		
		Ban(GuildID, xeroz);
		await sleep(1500);
		Xeroz();

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

/*
 ooooooo  ooooo
  `8888    d8'
    Y888..8P     .ooooo.  oooo d8b  .ooooo.    oooooooo
     `8888'     d88' `88b `888""8P d88' `88b  d'""7d8P
    .8PY888.    888ooo888  888     888   888    .d8P'
   d8'  `888b   888    .o  888     888   888  .d8P'  .P
 o888o  o88888o `Y8bod8P' d888b    `Y8bod8P' d8888888P
*/