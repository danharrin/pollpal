require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', msg => {
    const arguments = msg.content.toLowerCase().split(' ');

    if (arguments[0] === 'poll:') {
        msg.react('👍');
        msg.react('👎');
        msg.react('🤷');
    } else if (arguments[0] === '2poll:') {
        msg.react('1️⃣');
        msg.react('2️⃣');
        msg.react('🤷');
    } else if (arguments[0] === '3poll:') {
        msg.react('1️⃣');
        msg.react('2️⃣');
        msg.react('3️⃣');
        msg.react('🤷');
    } else if (arguments[0] === '4poll:') {
        msg.react('1️⃣');
        msg.react('2️⃣');
        msg.react('3️⃣');
        msg.react('4️⃣');
        msg.react('🤷');
    } else if (arguments[0] === '5poll:') {
        msg.react('1️⃣');
        msg.react('2️⃣');
        msg.react('3️⃣');
        msg.react('4️⃣');
        msg.react('5️⃣');
        msg.react('🤷');
    } else if (arguments[0] === '6poll:') {
        msg.react('1️⃣');
        msg.react('2️⃣');
        msg.react('3️⃣');
        msg.react('4️⃣');
        msg.react('5️⃣');
        msg.react('6️⃣');
        msg.react('🤷');
    } else if (arguments[0] === '7poll:') {
        msg.react('1️⃣');
        msg.react('2️⃣');
        msg.react('3️⃣');
        msg.react('4️⃣');
        msg.react('5️⃣');
        msg.react('6️⃣');
        msg.react('7️⃣');
        msg.react('🤷');
    } else if (arguments[0] === '8poll:') {
        msg.react('1️⃣');
        msg.react('2️⃣');
        msg.react('3️⃣');
        msg.react('4️⃣');
        msg.react('5️⃣');
        msg.react('6️⃣');
        msg.react('7️⃣');
        msg.react('8️⃣');
        msg.react('🤷');
    } else if (arguments[0] === '9poll:') {
        msg.react('1️⃣');
        msg.react('2️⃣');
        msg.react('3️⃣');
        msg.react('4️⃣');
        msg.react('5️⃣');
        msg.react('6️⃣');
        msg.react('7️⃣');
        msg.react('8️⃣');
        msg.react('9️⃣');
        msg.react('🤷');
    } else if (arguments[0] === 'addreaction:') {
        if (arguments.length < 3) return msg.reply('Please provide the channel ID, message ID, and emoji.');

        let channel = msg.mentions.channels.first() ?? msg.guild.channels.cache.get(arguments[1]);

        if (! channel) return msg.reply('Please provide the channel ID.');

        let message = channel.messages.fetch(arguments[2]);

        if (! message) return msg.reply('Please provide the message ID.');

        if (! arguments[3]) return msg.reply('Please provide the emoji.');

        message.react(arguments[3]);

        msg.reply(`Reacted to the message in ${channel} with ${arguments[3]}.`);
    };
});

client.login(process.env.TOKEN);