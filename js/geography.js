var states = document.querySelectorAll(".hint");
var links = document.querySelectorAll("a");
var findBtn = document.getElementById("findAgain");
var ourStates = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
var counter = 0;
var paraResult = document.getElementById("findAgain");





//color of each state
states.forEach(function(element) {
    element.style.fill="#43A9AC";
});
//color of each state



//on click dont let link open window  
links.forEach(function(element) {
    element.addEventListener("click", function(e) {
        e.preventDefault();
    })
})
//on click dont let link open window  


//give random states from array and display them on click inside paragraph
function randomState() {
    if (counter < ourStates.length-1) {
        counter++;
    } else {
        counter = 0;
    }
    document.querySelector("#resultState").innerHTML = "Can you find..." + "<span style='color:red;'>" + ourStates[counter] + "</span>" + "??";
}//function
//give random states from array and display them on click inside paragraph



//on button click bring randomState function and then check if clicked state title is the same as array random given element.If its same at end of link appending the name of array element to change url
paraResult.addEventListener("click", function() {
    randomState();
    document.getElementById("goodAnswer").innerHTML ="";
    states.forEach(function(element) {
        element.addEventListener("click", function() {
            if (element.getAttribute("title") == ourStates[counter]) { 
                element.style.fill="#193059";
              
                document.getElementById("goodAnswer").innerHTML = "Well done!! You can learn more about: " + "<a target='_blank' href='https://en.wikipedia.org/wiki/" +  ourStates[counter] +"'>" + ourStates[counter] +  "</a>";
            }//if
        })//on click
    })//forEach
        
})//on click
//on button click bring randomState function and then check if clicked state title is the same as array random given element.If its same at end of link appending the name of array element to change url



