let gameSeq=[];
let userSeq=[];
let btns=['red','yellow','green','pruple'];
let h2=document.querySelector('h2');

let started=false;
let level=0;

document.addEventListener('keypress', function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelup();
    }

});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIndx= Math.floor(Math.random()*3);
    let randColor=btns[randIndx];
    let randBtn=document.querySelector(`.${randColor}`);
   gameSeq.push(randColor);
   console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    
       if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelup,1000);
        }
       }
       else{
             h2.innerHTML=`Game Over! Your score is <b>${level}</b> <br/> Press any key to start!`;    
             document.querySelector('body').style.backgroundColor="red";
             setTimeout(function(){
                document.querySelector('body').style.backgroundColor="white";

             },125);
             reset();   
    }

}

function btnPress(){
    console.log(this);
let btn=this;
btnFlash(btn);

userColor=btn.getAttribute("id");
userSeq.push(userColor);
checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll('.btn');

for(btn of allbtns){
    btn.addEventListener('click', btnPress);
}
function reset(){
    started=false;
    level=0;
    userSeq=[];
    gameSeq=[];
}