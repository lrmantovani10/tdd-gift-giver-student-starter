const express = require("express")
const router = express.Router()
const {BadRequestError} = require("../utils/errors")

const GiftExchange = require("../models/gift-exchange")
const gift = new GiftExchange()

router.post("/pairs", (request, response, next) => {
    try{
        if(!request.body || !request.body.names) 
            next(new BadRequestError())

        else{
            response.status(200).send(GiftExchange.pairs(request.body.names))
        }
    }
    catch(err){
        next(err)
    }
})
router.post("/traditional", (request, response, next) => {
    try{
        if(!request.body || !request.body.names) 
            next(new BadRequestError())
        else{
            response.status(200).send(GiftExchange.traditional(request.body.names))
        }
    }
    catch(err){
        next(err)
    }
})

module.exports = router
