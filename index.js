// code your solution here
function saturdayFun(activity = "roller-skate") {
    const innerFunction = function() {
        return `This Saturday, I want to ${activity}!`
    }
    return innerFunction()
}
console.log(saturdayFun("ball"))




function mondayWork(activity = "go to the office") {
    const innerFunction = function() {
        return `This Monday, I will ${activity}.`
    }
    return innerFunction()    
}
console.log(mondayWork("watch a game"))




function wrapAdjective(string = "*") {
    return function(adjective = "special") {
        return `You are ${string}${adjective}${string}!`
    }
}
const encouragingPromptFunction = wrapAdjective("||")
console.log(encouragingPromptFunction())
