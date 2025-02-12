const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ">";
const client = Discord.UserInformations();

client.on('ready', () => {
    console.log(`[+] Logged in as ${client.user.tag}!`);
    client.user.setStatus("online")
    client.user.setActivity("Dev By Sec | prefix : >", {type: 'STREAMING});
});

client.on("guildMemberAdd", member => {
    console.log("Un nouveau membre est arrivé");
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
                message.reply("Membre non ou mal mentionné.");
            }
            else {
                mention.roles.add("833332173376454656");
                message.reply(mention.displayName + " mute avec succés.");
            }
        }
    else if(message.content.startsWith(prefix + "unmute")) {
        let mention = message.mentions.members.first();

        if(mention == undefined){
            message.reply("Membre non ou mal mentionné.");
        }
        else {
            mention.roles.remove("833332173376454656");
            message.reply(mention.displayName + " unmute avec succés.");
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
            message.channel.send(mention.displayName + " a été ban avec succés.");
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
      .addField('\u200B', `N°1 : Ne Pas Spamer Le Chat = Kick\nN°2 : Ne Pas Faire De Pub Dans Le Chat = Kick , Et Si Continue Ban 1 Heure\nN°3 : Respecter Les Grades Des Autres\nN°4 : Ne Pas Se Venter De Son Grade = Kick \nN°5 : Ne Pas Insulter Les Personnes = Ban 24 Heures Y Compris Discord\n \n**Discord Terms**\n[[Discord Terms]](https://discord.com/terms)`)
      .addField('\u200B', 'Ajoute La Réaction Pour Accéder Au Serveur !!!\n \u200B')
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
    .addField('\u200B', `**[+] >help : Affiche Les Commandes\n[+] >help adm : Affiche Les Commandes Admin\n[+] >clear : Efface 99 Messages\n[+] >terms : Envoie Le Règlement\n[+] >ping.bot : Envoie Le Ping Du Bot\n[+] >kick @user : Kick Un Utilisateur\n[+] >mute @user : Mute Un Utilisateur**`)
    .addField(`\u200B`, `\u200B`)
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

//Log

if(message.member.hasPermission("ADMINISTRATOR")) {
    if(message.content === prefix + 'log') {
        message.channel.bulkDelete(1)
        message.channel.send('Command in development');
    }

}

});

{
const TOKEN = "Your Token"
}

if(message.content === prefix + 'infos') {
      message.channel.bulkDelete(0)
      message.channel.send("Hey, i'm your bot. Nice to meet you. I've been developped by seczity using neovim.")
}
