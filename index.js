const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
    //Sets your bot status
    client.user.setActivity("My Code", { type: "WATCHING"})
});

client.on('message', function(message) {
    if(message.content.startsWith == "prefix!test") {
        message.channel.send('test');
    }
});

client.login('<your token here>');
