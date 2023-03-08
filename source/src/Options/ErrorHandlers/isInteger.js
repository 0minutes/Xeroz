const consoleColour = require('gradient-string');
const {sleep} = require("./CheckGuild")

async function isAnInteger(value, xeroz)
{
    if (!Number.isInteger(value))
    {
      process.title = `${xeroz.user.username} | [ERROR]`;
	  console.log(consoleColour.mind("[Error] : ") + `${value} must be an Integer`);
      await sleep(2000);
      throw new Error(consoleColour.mind("[Error] : ") + `${value} must be an Integer`);
    }
}

module.exports = {
    checkInt : isAnInteger
};