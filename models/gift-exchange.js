const errors = require("../utils/errors")

class GiftExchange{
    static pairs (names){
        if(names.length % 2 != 0){
            throw new errors.BadRequestError()
        }

        let pairings = []
        let namesCopy = [...names]

        while(pairings.length < (names.length / 2)){

            const firstIndex = parseInt(Math.random() * namesCopy.length)
            const firstChoice =   namesCopy.splice(firstIndex, 1)
            const secondIndex = parseInt(Math.random() * namesCopy.length)
            const secondChoice =  namesCopy.splice(secondIndex, 1)
            pairings.push([...firstChoice, ...secondChoice])
            
        }
        
        return pairings
    }

    static traditional(names){
        if(names.length % 2 != 0){
            throw new errors.BadRequestError()
        }
        let pairings = []
        let namesCopyFirst = [...names]
        let namesCopySecond = [...names]

        while(pairings.length < (names.length)){

            const firstIndex = parseInt(Math.random() * namesCopyFirst.length)
            const firstChoice =  namesCopyFirst[firstIndex]
            const secondIndex = parseInt(Math.random() * namesCopySecond.length)
            const secondChoice =  namesCopySecond[secondIndex]

            if(firstChoice != secondChoice){
                if(pairings.length == 0 || 
                    (pairings.length < names.length && secondChoice != pairings[0][0]) || 
                    pairings.length == names.length - 1){
                    namesCopyFirst.splice(firstIndex, 1)
                    namesCopySecond.splice(secondIndex, 1)
                    pairings.push([firstChoice, secondChoice])
                }
            }
        }

        let namesSequence = []
        pairings.forEach((pair) => {
            namesSequence.push(pair[0] + " is giving a gift to " + pair[1])
        })
        
        return namesSequence
    }
}

module.exports = GiftExchange