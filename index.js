const Discord = require('discord.js')
const client = new Discord.Client()

require('dotenv').config()

//const token = 'NTkzNTM2NTM1NzQ4NjczNTM5.XRPXJA.nXFMbUvQbPgM547nQXGIsU2AJv0'

client.on('ready', () => {
    console.log('Bot is online')
})

client.on('message', msg => {
    if(msg.content === 'Hello'){
        msg.reply('Hello friend')
    }
})

client.login(process.env.TOKEN)

