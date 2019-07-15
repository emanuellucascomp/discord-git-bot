const axios = require('axios')


const baseUrl = 'https://api.github.com/'

function getResponse(user) {
    return axios.get(baseUrl + 'users/' + user + '/events/public')
        .then(response => {
            let events = response.data
            let validEvents = events.filter(filterValidEvents)
            let currentDate = new Date()
            let lastEventDate = validEvents[0].created_at
            let last = new Date(lastEventDate)
            if (currentDate.getDate() != last.getDate()) {
                let timestampDiff = currentDate.valueOf() - last.valueOf()
                let timeWithoutDoAnythingInHours = Math.floor(timestampDiff/3600000)
                let timeWithoutDoAnythingInDays = Math.floor(timeWithoutDoAnythingInHours/24)
                result = `Já são cerca de ${timeWithoutDoAnythingInHours} horas sem fazer nada no Github...\nOu seja quase ${timeWithoutDoAnythingInDays} dias...\nVamos lá campeão, você consegue! 💪\nWrite code, blow minds! 🤯`
            } else {
                let lastActvity = response.data[0]
                let date = new Date(lastActvity.created_at)
                result =`Sua última atividade no Github foi um ${lastActvity.type}🆕\nNo repositório ${lastActvity.repo.name} 🗂\nDo user fabuloso ${lastActvity.actor.display_login} 🧙‍♂️\nData ${date.getDay()}/${date.getMonth() - 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}📆`
            }
            //let keys = Object.keys(data).map((key) => [key, data[key]])
            return result
        }).catch(err => {
            console.log(err)
        })
}

function filterValidEvents(event){
    return event.type == "PushEvent"
}


module.exports = {
    getResponse: getResponse
}
