let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let rollButton = document.getElementById("roll")
let rollResults = document.getElementById("result")
let graphRenderVar = document.getElementById("graph")
let counter = 0

function rollDie(){
    return Math.floor(Math.random() * 6)+1
}

function rollDiceResults(result1, result2){
    result1 = rollDie()
    result2 = rollDie()
    return result1 + result2
}



function renderGraph(){
    for (let i = 2; i < results.length; i++){
        let div = document.createElement("div")
        graphRenderVar.append(div)
        div.innerText = `You have rolled a ${i} ${results[i]} times.`
        div.id = i        
    }
    return
}

renderGraph()
 
function rollDice(){
    let rollDiceTotal = rollDiceResults();
    rollResults.innerText= `You rolled a ${rollDiceTotal}!`
    console.log(rollDiceTotal)
    results[rollDiceTotal] +=1
    console.log (results)
    if (rollDiceTotal === 2){
        let two = document.getElementById("2")
        two.innerText = `You have rolled a ${2} \n ${results[2]} times.`
    }
    if (rollDiceTotal === 3){
        let three = document.getElementById("3")
        three.innerText = `You have rolled a ${3} \n ${results[3]} times.`
    }
    if (rollDiceTotal === 4){
        let four = document.getElementById("4")
        four.innerText = `You have rolled a ${4} \n ${results[4]} times.`
    }
    if (rollDiceTotal === 5){
        let five = document.getElementById("5")
        five.innerText = `You have rolled a ${5} \n ${results[5]} times.`
    }
    if (rollDiceTotal === 6){
        let six = document.getElementById("6")
        six.innerText = `You have rolled a ${6} \n ${results[6]} times.`
    }
    if (rollDiceTotal === 7){
        let seven = document.getElementById("7")
        seven.innerText = `You have rolled a ${7} \n ${results[7]} times.`
    }
    if (rollDiceTotal === 8){
        let eight = document.getElementById("8")
        eight.innerText = `You have rolled a ${8} \n ${results[8]} times.`
    }
    if (rollDiceTotal === 9){
        let nine = document.getElementById("9")
        nine.innerText = `You have rolled a ${9} \n ${results[9]} times.`
    }
    if (rollDiceTotal === 10){
        let ten = document.getElementById("10")
        ten.innerText = `You have rolled a ${10} \n ${results[10]} times.`
    }
    if (rollDiceTotal === 11){
        let eleven  = document.getElementById("11")
        eleven.innerText = `You have rolled a ${11} \n ${results[11]} times.`
    }
    if (rollDiceTotal === 12){
        let twelve = document.getElementById("12")
        twelve.innerText = `You have rolled a ${12} \n ${results[12]} times.`
    }
    
}

rollButton.addEventListener("click", function(){
    rollDice()
})

let thousandButton = document.createElement("button")
thousandButton.id = "thousand"
thousandButton.innerText = `Roll 1000 Pairs of Dice`
document.body.prepend(thousandButton)
document.body.prepend(rollButton)

thousandButton.addEventListener("click", function(){
    while (counter < 1000){
        rollDice()
        counter++
    }
    counter = 0
})