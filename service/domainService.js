const Domain = require('../database/models/DomainModel');

module.exports.createDomain = async (serviceData) => { 
    try {
    let domain = new Domain({...serviceData})
    return await domain.save();
    } catch (error) {
        console.log("Soemthing wrong: Service : Create Domain ", error);
        throw new Error(error);
    }
}