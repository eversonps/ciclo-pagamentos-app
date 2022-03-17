const jwt = require("jsonwebtoken")
const _= require("lodash")
const env = require("../.env")

module.exports = (req, res, next) => {
    if(req.method == "OPTIONS"){
        next()
    }else{
        const token = req.body.token ||req.body.token || req.header["authorization"]

        if(!token){
            return res.status(403).send({Errors: ["No token provided."]})
        }

        jwt.verify(token, env.authSecret, function(err, decoded) {
            if(err) {
                return res.status(403).send({
                errors: ['Failed to authenticate token.']
                })
            } else {
                req.decoded = decoded
                next()
            }
        })
    }
}