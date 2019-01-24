$( function() {

    //racket to be able to move around
    $( "#racketDraggable" ).draggable({
        containment: "document", //do be draggable only inside window 
        cursor:"crosshair"
    });
    //racket to be able to move around


    //racket div on click to shake and image to highlight
    $( "#racketDraggable" ).on("click", function() {
        $(this).effect("shake");
        $(".racket img").effect("highlight");

        //if racket touch and click mosquito,mosquito explode
        if (collision()) {
            $(".mosquito img").effect("explode");
            setTimeout(function () { 
                alert("booooooooooom\nRest in piecies")
                location.reload(true); }, 1300);
        }

    });
    //racket div on click to shake and image to highlight


    //detect when mosquito div touch racket div
    function collision() {
        let mosqDiv = $(".mosquito img");
        let rackDiv = $(".racket img");
        console.log(mosqDiv)
        
        var x1 = mosqDiv.offset().left;
        var y1 = mosqDiv.offset().top;
        var h1 = mosqDiv.outerHeight(true);
        var w1 = mosqDiv.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = rackDiv.offset().left;
        var y2 = rackDiv.offset().top;
        var h2 = rackDiv.outerHeight(true);
        var w2 = rackDiv.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;
  
        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      //  console.log("touch")
        return true;
      }
    //detect when mosquito div touch racket div

    


  }); //PAGE LOADED
 























