const result = require('./gitconsume')
let argv = require('yargs')
    .option('username', {
        alias: 'u',
        describe: 'Example: node gitconsumetest.js -u tavares1'
    })
    .demandOption('username')
    .argv

const user = argv.username
let message = result.getResponse(user)
message.then(res => {
    console.log(res)
})

