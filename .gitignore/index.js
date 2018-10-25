const Discord = require ('Discord.js')
const bot = new Discord.Client()
const fs = require('fs')
const moment = require('moment')
const YTDL = require("ytdl-core")
let prefix = '$'
let cooldown = new Set()

let avert = JSON.parse(fs.readFileSync('avert.json', 'utf8'))
bot.login(process.env.TOKEN)
    console.log( "ça marche !")
