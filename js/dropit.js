document.addEventListener("DOMContentLoaded", function() {
    
   var dropTarget = document.querySelector("body");
   var draggableImgs = document.querySelectorAll(".Drag_images");
 
   var myXPosition = "";
   var myYPosition = "";
   var myMovingElement = "";



   for (let i = 0; i < draggableImgs.length; i++) {
        draggableImgs[i].addEventListener("dragstart", function(e) {
        e.dataTransfer.setData("imgId",e.target.id);
        //console.log(draggableImgs[i]);
        draggableImgs[i].style.opacity = 1;

        myXPosition = e.offsetX;
        myYPosition = e.offsetY;
        myMovingElement = e.target;
       });//on dragstart
   }//for loop
  
   dropTarget.addEventListener("dragover", function(e) {
       e.preventDefault();
   });

   dropTarget.addEventListener("drop", function(e) {
    e.preventDefault();
    myMovingElement.style.left =( e.pageX - myXPosition) + "px";
    myMovingElement.style.top =( e.pageY - myYPosition) + "px";

    let data = e.dataTransfer.getData("imgId");
    dropTarget.appendChild(document.getElementById(data));
    //console.log(data)
   });


   window.addEventListener('resize', function(event){
        if (window.innerWidth <= 500) {
            alert("You need to use bigger screen\nto be able to use drag and drop")        
            console.log("less")
        }
  });


  }); //PAGE LOADED