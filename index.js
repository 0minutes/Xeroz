console.clear();
// IMPORTS
require("dotenv").config();
const { ChannelType, Client, GatewayIntentBits, DiscordjsError, disableValidators, PermissionsBitField  } = require('discord.js');
const consoleColour = require('gradient-string');
const q = require('readline-sync');


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
const { RoleDelete } = require(`./Options/RoleDel`)
const { sleep } = require("./Options/CheckGuild")

//FUNCTIONS 

async function Login() {
    let validToken = false;
    while (!validToken) {
        const Token = q.question((consoleColour.mind)("[Token] > "));
        console.clear();
        try {
            await xeroz.login(Token);
            validToken = true;
        } catch (error) {
            console.error((consoleColour.mind)(`[Error] : `) + "Invalid Token:", error.message);
        }
    }
}


function OptionsUI()
{

	const logo = [(consoleColour.mind)`
					db    db d88888b d8888b.  .d88b.  d88888D 
					'8b  d8' 88'     88  '8D .8P  Y8. YP  d8' 
					 '8bd8'  88ooooo 88oobY' 88    88    d8'  
					 .dPYb.  88~~~~~ 88'8b   88    88   d8'   
					.8P  Y8. 88.     88 '88. '8b  d8'  d8' db 
					YP    YP Y88888P 88   YD  'Y88P'  d88888P                                     
	`];

	let line1 = (consoleColour.mind)`\n\t\t\t\t[1] Del Channels\t\t[4] Mass Channel`
	let line2 = (consoleColour.mind)`\n\t\t\t\t[2] Webhook Spam\t\t[5] Ban All`
	let line3 = (consoleColour.mind)`\n\t\t\t\t[3] Admin All   \t\t[6] Role Delete`
	console.log(`${logo} ${line1} ${line2} ${line3}`)

}

function MainScreen()
{
	console.clear();
	process.title = ` ${xeroz.user.username} | Currently in: ${xeroz.guilds.cache.size} Guild(s)`;
 
}

async function Xeroz()

{

	console.clear();
	MainScreen();
	OptionsUI();
	let option = q.question((consoleColour.mind) ("[Option] > "));

	switch(option)
{
	//OPTION 1
	case "1":
	{

        let guildId = q.question(consoleColour.mind("[Guild ID] : "));

        DelChannels(guildId, xeroz);
        await sleep(2500);
        Xeroz();
		break;

	}
	//OPTION 2
	case "2":
	{

        let GuildID = q.question(consoleColour.mind("[Guild ID] : "));
        let Content = q.question(consoleColour.mind("[Message Content] : "));
        let Amount = q.question(consoleColour.mind("[Amount of messages] (Bot can get rate limited if too many messages need to be send!): "));
    
        WebSpam(GuildID, Content, Amount, xeroz);
        await sleep(2500);
        Xeroz();
		break;

	}
	//OPTION 3
	case "3": 
	{

		let guildID = q.question(consoleColour.mind("[Guild ID] : "));

        Admin(guildID, xeroz)
        await sleep(2500);
        Xeroz();
		break;

	}
	//OPTION 4
	case "4": 
	{

		let guildId = q.question(consoleColour.mind("[Guild ID] : "));
		let name = q.question(consoleColour.mind("[Channel Name] : "));
		let amount = q.question(consoleColour.mind("[Amount of channels] : "));

		MassChannel(guildId, name, amount, xeroz);
		await sleep(2500);
		Xeroz();
		break;

	}
    //OPTION 5
	case "5": 
	{

		let guildId = q.question(consoleColour.mind("[Guild ID] : "));

		Ban(guildId, xeroz);
		await sleep(2500);
		Xeroz();
		break;

	}
    //OPTION 6
	case "6":
	{

		let guildId = q.question(consoleColour.mind("[Guild ID] : "));

		RoleDelete(guildId, xeroz);
		await sleep(2500);
		Xeroz();
		break;

	}

	default:
	{

		console.log((consoleColour.mind)("[Error] : ") + `Option ${option} is Invalid!`);
		await sleep(2000)
		Xeroz();
		break;

	}
}

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