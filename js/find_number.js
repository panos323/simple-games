window.addEventListener("load",createDivs);


let score = 0;
let repeatClicks = 0;
let found = 0;
let numberArray = [0,1,2,3,4,5,5,6,7,8,9,10,5,5,5];

function WinGame() {
        alert("Congratulations!\nYou won the game\nYou can play again");
        location.reload();
}

function lostGame() {
    alert("You lost the game\nYou can try again");
    location.reload();
}


function createDivs() {
  
    for (let x = 0; x < 20; x++) {
        let board = document.createElement("div");
        board.className = "boardDivs";
        board.innerHTML = "??";
        document.getElementById("memoryBoard").appendChild(board);
        board.addEventListener("click", function() {
            board.innerHTML = numberArray[Math.floor(Math.random() * numberArray.length)];

        if ( (board.innerHTML.indexOf("5")) > -1  ) {
             this.style.background = "green";
             this.style.color = "white";
             this.style.opacity =1;
             this.style.pointerEvents = "none";

             score+= 20;
             found+=1;
             document.querySelector(".NumFive").innerHTML = "You found " + found ;
             if (score == 60) {
                WinGame();
            }

        } else {
            this.style.pointerEvents = "none";
            repeatClicks+=1;
            document.querySelector(".NumTrys").innerHTML = 5-repeatClicks + " times to try";
            if (repeatClicks >= 5) {
                lostGame();
            }
        }


        })//on click
    }//for loop
}//function createDivs()


































