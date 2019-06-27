const result = require('./gitconsume')
// Utilizando o argv do node para receber o user do Github via terminal
if (process.argv == undefined || process.argv == "") {
    console.log(" ❌ You need to pass a github user. ❌")
    console.log(" ▶️ Example: node gitconsumetest.js tavares1")
    return 1
}
else {
    const user = process.argv[2]
    let message = result.getResponse(user)
    message.then(res => {
        console.log(res)
    })
}
