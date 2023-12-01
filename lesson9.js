const prompt = require("prompt-sync")()

const num = parseInt(prompt("Введіть число "))
console.log("sec, min")
const time = prompt("Оберіть вибір часу ")

switch(time){
    case "sec": 
        setTimeout(() => {
            console.log("Повідомлення вивелось за", num + time)
        }, num*1000)
        break
    case "min": 
        setTimeout(() => {
            console.log("Повідомлення вивелось за", num + time)
        }, num*60000)
        break
}
