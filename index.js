require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', async (msg) => {
    try {
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
            if (arguments.length < 3) return msg.reply('please provide the channel ID, message ID, and emoji.');

            let channel = msg.mentions.channels.first() || msg.guild.channels.cache.get(arguments[1]);

            if (! channel) return msg.reply('please provide the channel ID.');

            let message = await channel.messages.fetch(arguments[2]);

            if (! message) return msg.reply('please provide the message ID.');

            if (! arguments[3]) return msg.reply('please provide the emoji.');

            message.react(arguments[3]);

            msg.reply(`I reacted to the message in ${channel} with ${arguments[3]}.`);
        } else if (arguments[0] === 'removereaction:') {
            if (arguments.length < 3) return msg.reply('please provide the channel ID, message ID, and emoji.');

            let channel = msg.mentions.channels.first() || msg.guild.channels.cache.get(arguments[1]);

            if (! channel) return msg.reply('please provide the channel ID.');

            let message = await channel.messages.fetch(arguments[2]);

            if (! message) return msg.reply('please provide the message ID.');

            if (! arguments[3]) return msg.reply('please provide the emoji.');

            let reaction = message.reactions.resolve(arguments[3]);

            if (! reaction || ! reaction.me) return msg.reply('please provide an emoji I reacted with.');

            reaction.users.remove(client.user.id);

            msg.reply(`I removed my ${arguments[3]} reaction from the message in ${channel}.`);
        } else if (arguments[0] === 'removeallreactions:') {
            if (arguments.length < 3) return msg.reply('please provide the channel ID, and message ID.');

            let channel = msg.mentions.channels.first() || msg.guild.channels.cache.get(arguments[1]);

            if (! channel) return msg.reply('please provide the channel ID.');

            let message = await channel.messages.fetch(arguments[2]);

            if (! message) return msg.reply('please provide the message ID.');

            if (! arguments[3]) {
                message.reactions.removeAll();

                return msg.reply(`I removed all reactions from the message in ${channel}.`);
            };

            let reaction = message.reactions.resolve(arguments[3]);

            if (! reaction) return msg.reply('please provide an emoji that was reacted with.');

            reaction.remove();

            msg.reply(`I removed all ${arguments[3]} reactions from the message in ${channel}.`);
        };
    } catch (err) {};
});

client.login(process.env.TOKEN);