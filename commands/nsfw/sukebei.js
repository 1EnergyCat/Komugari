const { Command } = require('../../commando');
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const errors = require('../../assets/json/errors');


module.exports = class SukebeiCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'sukebei',
            group: 'nsfw',
            memberName: 'sukebei',
            guildOnly: true,
            description: 'Anime girls who\'ve lost their clothing..?',
            details: 'This command can only be used in NSFW channels!',
            examples: ['~sukebei'],
            throttling: {
                usages: 1,
                duration: 3
            }
        });
    }

    run (message) {
        var errMessage = errors[Math.round(Math.random() * (errors.length - 1))];
        if(!message.channel.nsfw) {
            message.react('💢');
            return message.channel.send(errMessage);
        }
        
        try {
            randomPuppy('Sukebei')
                .then(url => {
                    const embed = new Discord.MessageEmbed()
                        .setFooter(`sukebei`)
                        .setImage(url)
                        .setColor('#A187E0');
                    return message.channel.send({embed});
                })
    
            } catch(err) {
                return message.channel.send('<:NOTLIKETHIIIIIIIIIIIIIIIIIIIIIIS:371071292146843658> Something went wrong while executing that function!');
        }
    }
}