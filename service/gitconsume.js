const axios = require('axios')

const baseUrl = 'https://api.github.com/'

function getResponse(user){
    axios.get(baseUrl + 'users/' + user + '/events/public')
        .then(response => {
            let currentDate = new Date()
            let lastEventDate = response.data[0].created_at
            let last = new Date(lastEventDate)
            if(currentDate.getDate() != last.getDate()){
                result = ':('
            } else {
                result = 'Nice work!'
            }
            console.log(result)
            //let keys = Object.keys(data).map((key) => [key, data[key]])
            return result
        }).catch(err => {
            console.log(err)
        })
}

module.exports = {
    getResponse: getResponse
}
