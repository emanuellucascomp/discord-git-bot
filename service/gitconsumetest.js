const result = require('./gitconsume')
const user = 'emanuellucascomp'
let message = result.getResponse(user)
message.then(res => {
    console.log(res)
})
