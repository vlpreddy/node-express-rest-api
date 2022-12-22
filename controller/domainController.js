const domainService = require('../service/domainService');

module.exports.createDomain = async (req,res) =>{

let response ={}

if(req.body == ''){
    response.status = 400;
    response.message="Please send proper request with full json body";
    response.body = {};
} else {
        try {
        const responseFromService = await domainService.createDomain(req.body);
        response.status = 201;
        response.message="Domain Added Succesfully";
        response.body = responseFromService;
    } catch (error) {
        console.log("Something went wrong : Create Domain", error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }  
} 

return res.status(response.status).send(response);

}