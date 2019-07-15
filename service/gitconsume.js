const axios = require('axios')


const baseUrl = 'https://api.github.com/'

function getResponse(user) {
    return axios.get(baseUrl + 'users/' + user + '/events/public')
        .then(response => {
            // Verificar se já faz tanto tempo que a API não retorna mais os eventos.
            if (response.data.length == 0) {
                result = "A tanto tempo que você não faz nada, não consigo trackear"
                return result
            }

            // 
            let currentDate = new Date()
            let lastEventDate = response.data[0].created_at
            let last = new Date(lastEventDate)
            let timestampDiff = currentDate.valueOf() - last.valueOf()
            let timeWithoutDoAnythingInHours = Math.floor(timestampDiff/3600000)
            let timeWithoutDoAnythingInDays = Math.ceil(timeWithoutDoAnythingInHours/24)
            if (timeWithoutDoAnythingInHours >= 24) {
                result = `Já são cerca de ${timeWithoutDoAnythingInHours} horas sem fazer nada no Github...\nOu seja quase ${timeWithoutDoAnythingInDays} dias...\nVamos lá campeão, você consegue! 💪\nWrite code, blow minds! 🤯`
            } else {
                let lastActvity = response.data[0]
                let date = new Date(lastActvity.created_at)
                result =`Sua última atividade no Github foi um ${lastActvity.type}🆕\nNo repositório ${lastActvity.repo.name} 🗂\nDo user fabuloso ${lastActvity.actor.display_login} 🧙‍♂️\nData ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} 📆`
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
