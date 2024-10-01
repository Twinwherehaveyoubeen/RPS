let playerscore = 0
let computerscore = 0 
let tie = 0

function random(){
    const chooses = [ "Rock" , "Paper", "Scissors"]
    const random = Math.floor(Math.random() * 3)
    return chooses[random]
}
function RPS(PC){
    const computerchoice = random()
    let result 
     if ( PC === computerchoice ){
            result = "Tie score"
            tie++
     }else if (
        (PC === 'Rock' && computerchoice ==='Scissors')||
        (PC ==='Scissors' && computerchoice === 'Paper')||
        (PC ==='Paper' && computerchoice === 'Scissors')
     ){
        result = "Players Point"
        playerscore++
     } 
     else{
            result = "Computers Point"
            computerscore++
     }
     Gainpoints()
}

function Gainpoints(){
    document.getElementById('PR').textContent = "Player's Score" + playerscore
    document.getElementById('CPR').textContent = "Computer's Score" + computerscore
    document.getElementById('Tie').textContent = "Tie score" + tie
}