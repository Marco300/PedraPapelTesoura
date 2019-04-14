let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const result_user = document.querySelector(".resultUser > img")
const result_comp = document.querySelector(".resultComp > img")

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];    
}

function convertToWord(letter){
        
    if(letter === "r") return "Pedra"; else
    if(letter === "p") return "Papel"; else
    return "Tesoura";
} 

function win(userChoice, computerChoice){
    userScore++; 
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    const smallUserWord = "user".fontsize(3).sub().fontcolor('red');
    const smallCompWord = "comp".fontsize(3).sub().fontcolor('red');
   //result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}   vence   ${convertToWord(computerChoice)}${smallCompWord}. vc Ganhou!!!`;
    
}
function lose(userChoice, computerChoice){
    computerScore++; 
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    //result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} perde para ${convertToWord(computerChoice)}${smallCompWord}. vc Perdeu!!!`;   
    
}
function draw(userChoice, computerChoice){
    
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    //result_p.innerHTML = "EMPATE !!!!"
}

function setUserImg(user){
    if(user === "r") result_user.src = 'images/rock.png';else
    if(user === "p") result_user.src = 'images/paper.png'; else
    result_user.src = 'images/scissors.png'; 
}

function setCompImg(comp){
    if(comp === "r") result_comp.src = 'images/rock.png';else
    if(comp === "p") result_comp.src = 'images/paper.png'; else
    result_user.src = 'images/scissors.png'; 
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            setUserImg(userChoice);
            setCompImg(computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            setUserImg(userChoice);
            setCompImg(computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            setUserImg(userChoice);
            setCompImg(computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function(){
        game("r");

    })

    paper_div.addEventListener('click', function(){
        game("p");
    })

    scissors_div.addEventListener('click', function(){
        game("s");
    })
}
main();