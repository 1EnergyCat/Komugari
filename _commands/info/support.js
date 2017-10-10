exports.run = async (client, message, Discord, args) => {
    const notifyChannel = '198399488614727680'
    var channel = client.channels.get(notifyChannel)
    let supportMessage = message.content.split(/\s+/g).slice(1).join(" ");
    if(!supportMessage) return message.channel.send(`Please add an issue to your message.`).then(m => m.delete(5000));


    try {
        const embed = new Discord.MessageEmbed()
            .setAuthor(`${message.member.user.tag}`, message.member.user.displayAvatarURL)
    	    .setColor('48886D')
            .setTimestamp()
            .setFooter(`Channel ID: ${message.channel.id}`)
 	        .addField(message.guild.name + ', ' + message.channel.name, supportMessage)
        channel.send({embed})

        await message.react("🇸").catch(console.error);
        await message.react("🇪").catch(console.error);
        await message.react("🇳").catch(console.error);
        return await message.react("🇹").catch(console.error);

    } catch(err) {
        message.channel.send("There was an issue sending your support message, please try again at a later time.")
    }
}