'use strict';


//===click events======

let number= Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;


document.querySelector('.check').addEventListener('click',function(){

const guess=Number(document.querySelector('.guess').value);
console.log(guess,typeof guess);
//when no input
if(!guess){

  document.querySelector('.message').textContent='No Number!';

}
else if(guess===number){
  document.querySelector('.message').textContent='Hurray!Correct Number.';

  document.querySelector('.number').textContent=number;

document.querySelector('body').style.backgroundColor='#32a860';

document.querySelector('.number').style.width='20rem';

document.querySelector('.message').style.color='#bf0a0a';

if(score>highscore){
highscore=score;
document.querySelector('.highscore').textContent=highscore;  
}


}

else if(guess>number){
 if(score>1){
  document.querySelector('.message').textContent='Too High.';
score--;
document.querySelector('.score').textContent=score;
 }
else{
  document.querySelector('.message').textContent='Sorry!You lost.';
  document.querySelector('.score').textContent=0;
}

}
else if(guess<number){
  document.querySelector('.message').textContent='Too Low.';
  score--;
  document.querySelector('.score').textContent=score;
  
}


});

document.querySelector('.again').addEventListener('click',function(){

score=20;
number= Math.trunc(Math.random()*20)+1;
document.querySelector('.message').textContent='Start Guessing....';

document.querySelector('.score').textContent=score;
document.querySelector('.number').textContent='?';
document.querySelector('.guess').value='';

document.querySelector('body').style.backgroundColor='#222';

document.querySelector('.number').style.width='15rem';

document.querySelector('.message').style.color='#fffcfc';

})
