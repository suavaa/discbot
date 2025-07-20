const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ">";
const client = Discord.UserInformations();

client.on('ready', () => {
    console.log(`[+] Logged in as ${client.user.tag}!`);
    client.user.setStatus("online")
    client.user.setActivity("prefix : >", {type: 'STREAMING});
});

client.on("guildMemberAdd", member => {
    console.log("A new member joined the server!");
    member.roles.add("833132032334495744").then(mbr => {
            console.log("Role given to" + mbr.displayName);
    }).catch(() => {
        console.log("For some reasons, the role couldn't be given to the user...");
    });
}    

if(message.member.hasPermission("ADMINISTRATOR")){
      if(message.content.startsWith(prefix + "kick")) {
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Member bad or no selected.");
            }
            else {
                if(mention.kickable){
                    mention.kick();
                    message.channel.bulkDelete(1)
                    message.channel.send(mention.displayName + " got kicked succefuly");
                }
                else {
                    message.reply("Can't kick this member");
                }
            }
        }
        else if(message.content.startsWith(prefix + "mute")) {
            let mention = message.mentions.members.first();
            
            if(mention == undefined){
                message.reply("Member Either Badly Mentionned Or Not Mentionned");
            }
            else {
                mention.roles.add("833332173376454656");
                message.reply(mention.displayName + "Has been mute with success.");
            }
        }
    else if(message.content.startsWith(prefix + "unmute")) {
        let mention = message.mentions.members.first();

        if(mention == undefined){
            message.reply("Member Either Badly Mentionned Or Not Mentionned");
        }
        else {
            mention.roles.remove("833332173376454656");
            message.reply(mention.displayName + "Has been unmuted with success.");
        }
    }
}
else if(message.content.startsWith(prefix + "ban")) {
    let mention = message.mentions.members.first();

    if(mention == undefined){
        message.reply("Membre non ou mal mentionné.");
    }
    else {
        if(mention.bannable){
            mention.ban();
            message.channel.send(mention.displayName + " Has been banned with success.");
        }
        else {
            message.reply("Impossible de ban ce membre.");
        }
    }
};


    if(message.author.bot) return;
    if (message.content === prefix + "terms") {
        message.channel.bulkDelete(1)
        const Rembed = new Discord.MessageEmbed()
      .setColor('RED')
      .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true}))
      .setTitle("Règlement")
      .setURL('https://discord.com/terms')
      .setThumbnail('https://cdn.discordapp.com/attachments/809872785820221470/811676323986669568/sdzterms.jpg')
      .addField('\u200B', `Put Your Own Rules there.`)
      .addField('\u200B', 'React to this message to get access to this server\n \u200B')
      //.setImage('https://cdn.discordapp.com/attachments/809872785820221470/810257161950330880/battlenet.png')
      .setTimestamp()
      .setFooter('Date')
      message.channel.send(Rembed)
      console.log('[+] Terms Sended');
      }
//Clear Command
if (message.member.hasPermission("ADMINISTRATOR"))
if (message.content === prefix + 'clear') {
    message.channel.bulkDelete(99)
//  message.channel.send("[+] Messages supprimés avec succés !")
    console.log('[+] Messages Succefuly Deleted')
    }
//Help

//Help Admin
if(message.member.hasPermission("ADMINISTRATOR")) {
if(message.content === prefix + 'help adm') {
    message.channel.bulkDelete(1)
    const HelpEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true}))        
    .setTitle(`\u200B`)
    .setThumbnail('https://cdn.discordapp.com/attachments/809872785820221470/811676323986669568/sdz.jpg')        
.addField('\u200B', `**[+] >help : Displays All Commands
[+] >help adm : Displays Admin Commands
[+] >clear : Deletes 99 Messages
[+] >terms : Sends the Rules
[+] >ping.bot : Sends the Bot's Ping
[+] >kick @user : Kicks a User
[+] >mute @user : Mutes a User**`)    .addField(`\u200B`, `\u200B`)
    .setTimestamp()
    .setFooter('Date')
    message.channel.send(HelpEmbed)
    console.log('[+] Admin Help Sended');
    }
}
//Ping Bot
if(message.member.hasPermission("ADMINISTRATOR")) {
if (message.content === prefix + 'ping.bot') {
    message.channel.bulkDelete(1)
    const pingbot = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle("\u200B")
    .setThumbnail('https://cdn.discordapp.com/attachments/809872785820221470/810248469905276968/w.png')
    .addField(`** ${client.ws.ping} ms**`, `\u200B`)
    //.setImage('https://cdn.discordapp.com/attachments/809872785820221470/810257161950330880/battlenet.png')
    .setTimestamp()
    .setFooter('Date')
    message.channel.send(pingbot);
    }
}

});

{
const TOKEN = "Your Token"
}

if(message.content === prefix + 'infos') {
      message.channel.bulkDelete(0)
      message.channel.send("Write there anything.")
}
