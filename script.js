function generateRandomNumber (num) {
    //Gets random Number from 0 - 1
    return Math.floor(Math.random() * num)
}

const collectiveWisdom = {
    godInfo: ['Isis', 'Horus', 'Bastet', 'Ra', 'Set'],
    fortuneOutput: ['Set has torn out your eyes', 'Isis knows your secret name', 'Ra has taken pitty on you'],
    advice: ['Hide in the papyrus', 'Fight back with magic', 'make a mummy']
}
//Store the 'wisdom in an array
let personalWisdom = []

//Iterate over the object
for(let prop in collectiveWisdom) {
    let opinionIdx = generateRandomNumber(collectiveWisdom[prop].length)
    //use the object's properties to customize the message being added
    switch(prop) {
        case 'godInfo':
            personalWisdom.push('The god affecting you right now is "${collectiveWisdom[prop][optionIdx]}".')
            break
        case 'fortuneOutput':
            personalWisdom.push('Your current situation is: "${collectiveWisdom[prop][optionIdx]}".')
            break
        case 'advice':
            personalWisdom.push('You should: "{collectiveWidsom[prop][optionIdx]}".')
            break
        default:
            personalWisdom.push('There is not enough info.')
    }
}

function formatWisdom(wisdom) {
    const formatted = personalWisdom.join('/n')
    console.log(formatted)
}
formatWisdom(personalWisdom);