/*              VARIAVEIS                                */

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
let result_message = document.getElementById("result-message")



/*              ESCOLHA DO COMPUTADOR                                */

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];    
}

/* C   ONVERTE A LETRA DA ESCOLHA PARA O NOME DO MOVIMENTO          */
function convertToWord(letter){
        
    if(letter === "r") return "Pedra"; else
    if(letter === "p") return "Papel"; else
    return "Tesoura";
} 

/*              GANHAR / PERDER / EMPATAR                  */

function win(userChoice, computerChoice){
    userScore++; 
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    setUserImg(userChoice);
    setCompImg(computerChoice); 
    result_message.innerHTML = `${convertToWord(userChoice)}   vence   ${convertToWord(computerChoice)}. vc Ganhou!!!`;
}


function lose(userChoice, computerChoice){
    computerScore++; 
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    setUserImg(userChoice);               
    setCompImg(computerChoice);   
    result_message.innerHTML = `${convertToWord(userChoice)} perde para ${convertToWord(computerChoice)}. vc Perdeu!!!`;   
}

function draw(userChoice, computerChoice){    
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    setUserImg(userChoice);                
    setCompImg(computerChoice);   
    result_message.innerHTML = "EMPATE !!!!"
}

/* SETA AS IMAGENS DE A CORDO COM A ESCOLHA DO USER OU DO CPOMPUTER */

function setUserImg(user){
    if(user === "r") result_user.src = 'images/rock.png';else
    if(user === "p") result_user.src = 'images/paper.png'; else
    if(user === "s") result_user.src = 'images/scissors.png';  
}

function setCompImg(comp){
    if(comp === "r") result_comp.src = 'images/rock.png';else
    if(comp === "p") result_comp.src = 'images/paper.png'; else
    if(comp === "s") result_comp.src = 'images/scissors.png'; 
}

/*                    REGRAS DO JOGO                              */
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            
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