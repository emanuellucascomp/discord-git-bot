const result = require('./gitconsume')
let argv = require('yargs')
            .option('username', {
                alias: 'u',
                describe: 'Example: node gitconsumetest.js -u tavares1'
            })
            .demandOption('username')
            .argv

// Utilizando o argv do node para receber o user do Github via terminal
if (process.argv == undefined || process.argv == "") {
    console.log(" ❌ You need to pass a github user. ❌")
    console.log(" ▶️ Example: node gitconsumetest.js tavares1")
    return 1
}
else {
    const user = argv.username
    let message = result.getResponse(user)
    message.then(res => {
        console.log(res)
    })
}
