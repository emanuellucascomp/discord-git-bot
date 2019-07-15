const Discord = require('discord.js')
const client = new Discord.Client()
const result = require('./service/gitconsume')
const PREFIX = '!'
require('dotenv').config()


client.on('ready', () => {
    console.log('Bot is online')
})

client.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(' ')

    switch(args[0]){
        case 'ping':
            message.channel.send('pong!')
            break
        case 'help':
            message.channel.send('Take some coffee...')
            break
        case 'info':
            if(!args[1]){
                message.channel.send('Bot usage: !info gitusername')
            } else {
                result.getResponse(args[1]).then(res => {
                    message.channel.send(res)
                })
            }
        break            
    } 
})

client.login(process.env.TOKEN)

