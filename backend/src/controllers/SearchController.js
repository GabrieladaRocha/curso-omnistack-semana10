const Dev = require('../models/dev')
const parseStringAsArray = require('../Utils/parseStringAsArray')

module.exports = {
    async index(request, response){
        
        //busca todos os devs num raio de 10km e filtrar por tech
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs)

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000, //dist em metros
                },
            }
        })
        
        return response.json({ devs })

    }
}

//falta 9 min