var gun;
var targets = [];
var drops = [];

setTimeout(function(){
    window.location.reload(1);
 }, 10000);

function setup() {
    createCanvas(windowWidth, windowHeight-120);
    gun = new Gun();

    for (var i = 0; i < 5; i++) {
        targets[i] = new Targets(random(width/2),30);
    }


}//function setup()


function draw() {
  background(0,0,0);
  gun.showGun();
  gun.move();

    for (var j = 0; j < targets.length; j++) {
        targets[j].targetsShow();
        targets[j].targetsMove();
    }//for loop

    for (var k = 0; k < drops.length; k++) {
        drops[k].dropShow();
        drops[k].dropFire();

        for (var l = 0; l < targets.length; l++) {
            if (drops[k].hitTarget(targets[l])) {   
              //  console.log("Booooooooom");
                targets.splice(l,1);

                if (targets.length <=0) {
                    alert("You made it!!");
                    setTimeout(function(){
                        window.location.reload(1);
                     }, 500);
                }
            }
        }//nested for loop
    }//for loop

}//function draw()


function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        gun.setDir(1);
    } else if (keyCode === LEFT_ARROW) {
        gun.setDir(-1);
    }

    if (key === " ") {
            var drop = new Drops(gun.x+10,gun.y);
            drops.push(drop);
    }//if
}//function keyPressed()


function keyReleased() {
    if (key !== " ") {
        gun.setDir(0);
    }
}















