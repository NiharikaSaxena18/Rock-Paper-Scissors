let us=0;
let cs=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let userScore=document.querySelector("#user-score");
let compScore=document.querySelector("#comp-score");

const showWinner=(win,userChoice,compChoice)=>{
    if(win==true)
    {
        us++;
        userScore.innerText=us;
        console.log("You win!");
        msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else
    {
        cs++;
        compScore.innerText=cs;
        console.log("You lose.");
        msg.innerText=`You lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const draw=(userChoice)=>{
    console.log("Game was draw.");
    msg.innerText=`Game was draw. You both chose ${userChoice}`;
    msg.style.backgroundColor="blue";
}

const genCompChoice=()=>{
    const options=["Rock","Paper","Scissors"];
    const random=Math.floor(Math.random()*3);
    return options[random];
}

const playGame=(userChoice)=>{
    console.log("User choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("Computer choice=",compChoice);
    let win=true;
    if(userChoice===compChoice)
    draw(userChoice);
    else
    {
        if(userChoice=="Rock")
        {
            if(compChoice=="Paper") win=false;
        }
        else if(userChoice=="Paper")
        {
            if(compChoice=="Scissors") win=false;
        }
        else if(userChoice=="Scissors")
        {
            if(compChoice=="Rock") win=false;
        }
        showWinner(win,userChoice,compChoice);
    }
};

choices.forEach((ch)=>{
    ch.addEventListener("click",()=>{
        const userChoice=ch.getAttribute("id");
        playGame(userChoice);
    })
})