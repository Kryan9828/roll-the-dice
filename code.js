let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


// Your Code Here!

let rollButton = document.getElementById("roll")
let rollResults = document.getElementById("result")
let graphRenderVar = document.getElementById("graph")

function rollDie(){
    return Math.floor(Math.random() * 6)+1
}

function rollDiceResults(result1, result2){
    result1 = rollDie()
    result2 = rollDie()
    return result1 + result2
}

// function renderGraph(){
//     for (let i = 0; i < results.length; i++){
//                 let div = document.createElement("div")
//                 graphRenderVar.append(div)
//                 div.innerText = `You have rolled a ${results[rollDiceTotal]} ${results[i]} times.`
//                 div.id = results[i]
//                 console.log (div.innerText)
//     }
// }



rollButton.addEventListener("click", function(){
    let rollDiceTotal = rollDiceResults();
    rollResults.innerText= `You rolled a ${rollDiceTotal}!`
    console.log(rollDiceTotal)
    results[rollDiceTotal] +=1
    console.log (results)
    function renderGraph(){
        for (let i = 2; i < results.length; i++){
                    let div = document.createElement("div")
                    graphRenderVar.append(div)
                    div.innerText = `You have rolled a ${i} ${results[i]} times.`
                    div.id = "graph-results"+ i
                    console.log (div.innerText)
        }
    }
    renderGraph()
})

// rollButton.addEventListener("click", renderGraph)
