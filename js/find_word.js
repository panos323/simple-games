let wordsArray = ["uncopyrightable ","meaning","programming","football","people","winebibber","gradient","colourful","beer","wine","basketball","travel","electronics","radiometeorograph","location","transportation","javascript","monopoly","robbery","meteorologist","forecast","religion","politician","hobby","musician","medicine","singer","amazing","enigma","machine","equality","freedom","santorini","beach","forest","presentation","airplane","sensitivity","questions","answers","quality","quantitative","silence","general"];


//take random word
let itemOfwordsArray = wordsArray[Math.floor(Math.random()*wordsArray.length)];

  //on button click refresh url to give me a new random word
  document.getElementById("button").addEventListener("click", function() {
    location.reload();
  });


    //for loop to create random letters from a random word from wordsArray
    for (let i = itemOfwordsArray.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [itemOfwordsArray[i], itemOfwordsArray[j]] = [itemOfwordsArray[j], itemOfwordsArray[i]]; 

        const element = itemOfwordsArray[i];
        let inputs = document.createElement("input");
        inputs.className = "allInputs";
        let newContent =  document.createTextNode(element);
        inputs.appendChild(newContent);
        document.getElementById("myDiv").appendChild(inputs);
        inputs.value = element;
        inputs.disabled = true;
    }//for loop

    //for loop to put in input the right order of word
    for (let i = 0; i < itemOfwordsArray.length; i++) {
        const elem = itemOfwordsArray[i];
        let inputsAns = document.createElement("input");
        inputsAns.className = "AnswerInputs";
         let newContentAnsw =  document.createTextNode(elem);
         inputsAns.appendChild(newContentAnsw);
        document.getElementById("myAnswer").appendChild(inputsAns);
            //On change if right word then green otherwise red
            inputsAns.addEventListener("change", function() {
                    if (inputsAns.value == elem) {
                    inputsAns.style.color = "green";
                    } else {
                        inputsAns.style.color = "red";
                    }

            })// on change

    }//for loop


 























