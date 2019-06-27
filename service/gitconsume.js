const axios = require('axios')

const baseUrl = 'https://api.github.com/'

function getResponse(user) {
    return axios.get(baseUrl + 'users/' + user + '/events/public')
        .then(response => {
            let currentDate = new Date()
            let lastEventDate = response.data[0].created_at
            let last = new Date(lastEventDate)
            if (currentDate.getDate() != last.getDate()) {
                result = ':('
            } else {
                let lastActvity = response.data[0]
                let date = new Date(lastActvity.created_at)
                result =
                `
                Sua última atividade no Github foi um ${lastActvity.type}
                no repositório ${lastActvity.repo.name} 
                do fabuloso ${lastActvity.actor.display_login}
                na data ${date.getDay()}/${date.getMonth() - 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}
                `
            }
            //let keys = Object.keys(data).map((key) => [key, data[key]])
            return result
        }).catch(err => {
            console.log(err)
        })
}


module.exports = {
    getResponse: getResponse
}
