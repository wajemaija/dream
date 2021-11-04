/**
 * Game Rules:
 * The game has 2 players, playing in rounds
 * In each turn, a player rolls a dice as many time as he wishes.Each result get added to his round score
 * But, if the player rolls a 1, all his round score gets lost.After that, it's the next player's turn
 * the play can choose to 'Hold', which mean that his round score gets added to his GLABL score.After that, it's the next player's turn
 * The first player to reach 100 points on GLOBAL score wins the game
 */
/*let scores,roundScore,activePlayer;

 scores = [0,0];
 roundScore = 0;
 activePlayer = 0;


let dice = Math.floor(Math.random()*6)+1;
console.log(dice);*/

//let score,roundScore,activePlayer;

//score = [0,0];
//roundScore = 0;
//activePlayer = 0;


//document.getElementById('score--0').textContent="0";
//document.getElementById('score--1').textContent="0";

//document.querySelector('#current--0').textContent="0";
//document.querySelector('#current--1').textContent="0";
//document.querySelector('.dice').style.display = "none";

init();

document.querySelector('.btn--roll').addEventListener('click',function(){
    if(gameplaying){
    //random number generating
    let dice = Math.floor(Math.random()*6)+1;
    //sumla ni hpe random hkrat shangun

    //displey the result
    //sumla random ni gaw dice name kaw shang na
    const dowDice = document.querySelector('.dice');
    dowDice.src = 'dice-'+dice+".png";
    document.querySelector('.dice').style.display = "block"; 

    //add rouondScore
    //mi na score kaw pawng na 
    if(dice !== 1){
        roundScore = roundScore + dice;
        document.querySelector(`#current--${activePlayer}`).textContent=roundScore;
    }else{
        switchPlayer();

    }
    }
});

document.querySelector('.btn--hold').addEventListener('click',function(){
    //score[activePlayer]=roundScore;
    if(gameplaying){
    score[activePlayer]=score[activePlayer]+roundScore;

    document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];
    if(score[activePlayer] >=20){
        document.getElementById(`name--${activePlayer}`).textContent = "Winner";
       
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        gameplaying =false;
    }else{
    switchPlayer();
    }
}

    });


document.querySelector('.btn--new').addEventListener('click',function(){
    init();
   
    });
function switchPlayer(){
    activePlayer === 0 ? activePlayer = 1: activePlayer=0;
    roundScore = 0;
    document.querySelector('#current--0').textContent="0";
    document.querySelector('#current--1').textContent="0";


    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    document.querySelector('.dice').style.display = "none";
}

function init(){
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gameplaying = true;  


    document.getElementById('score--0').textContent="0";
    document.getElementById('score--1').textContent="0";

    document.querySelector('#current--0').textContent="0";
    document.querySelector('#current--1').textContent="0";
    
    document.querySelector('.dice').style.display = "none";
    


    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');


    document.getElementById(`name--0`).textContent = "Player 1";
    document.getElementById(`name--1`).textContent = "Player 2";

    
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');

}











