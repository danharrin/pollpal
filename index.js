require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', msg => {
    if (msg.content.startsWith('poll:')) {
        msg.react('👍');
        msg.react('👎');
        msg.react('🤷');
    } else if (msg.content.startsWith('2poll:')) {
        msg.react('1️⃣');
        msg.react('2️⃣');
        msg.react('🤷');
    } else if (msg.content.startsWith('3poll:')) {
        msg.react('1️⃣');
        msg.react('2️⃣');
        msg.react('3️⃣');
        msg.react('🤷');
    } else if (msg.content.startsWith('4poll:')) {
        msg.react('1️⃣');
        msg.react('2️⃣');
        msg.react('3️⃣');
        msg.react('4️⃣');
        msg.react('🤷');
    } else if (msg.content.startsWith('5poll:')) {
        msg.react('1️⃣');
        msg.react('2️⃣');
        msg.react('3️⃣');
        msg.react('4️⃣');
        msg.react('5️⃣');
        msg.react('🤷');
    } else if (msg.content.startsWith('6poll:')) {
        msg.react('1️⃣');
        msg.react('2️⃣');
        msg.react('3️⃣');
        msg.react('4️⃣');
        msg.react('5️⃣');
        msg.react('6️⃣');
        msg.react('🤷');
    } else if (msg.content.startsWith('7poll:')) {
        msg.react('1️⃣');
        msg.react('2️⃣');
        msg.react('3️⃣');
        msg.react('4️⃣');
        msg.react('5️⃣');
        msg.react('6️⃣');
        msg.react('7️⃣');
        msg.react('🤷');
    } else if (msg.content.startsWith('8poll:')) {
        msg.react('1️⃣');
        msg.react('2️⃣');
        msg.react('3️⃣');
        msg.react('4️⃣');
        msg.react('5️⃣');
        msg.react('6️⃣');
        msg.react('7️⃣');
        msg.react('8️⃣');
        msg.react('🤷');
    } else if (msg.content.startsWith('9poll:')) {
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
    };
});

client.login(process.env.TOKEN);