const Discord = require ('discord.js')
const bot = new Discord.Client()
const fs = require('fs')

let prefix = '$'

bot.login(process.env.TOKEN)
    console.log( "ça marche !")
bot.on('ready', function (){
    bot.user.setActivity('Hypology 53 - Rise of Botology').catch(console.error)
})
bot.on('message', message => {
    if(message.channel.type === "dm") return
    if (message.content.includes("$userinfo @everyone")) return
    let sender = message.author
    let msg = message.content.toUpperCase()
   
    if (message.content === prefix + "aide"){
        var help = new Discord.RichEmbed()
        .setTitle("$aide")
        .addField("Commandes","$choose\n" + "$roll\n" + "$lesquen\n" + "$purge\n" + "$userinfo\n" + "$serverinfo\n" , true)
        .setColor(0x200ef5)
        message.channel.send(help);
       } 
    
       
   
    
})
