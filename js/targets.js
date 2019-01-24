function Targets(x,y) {
    this.x = x;
    this.y = y;
    this.r = 20;

    this.targetsShow = function() {
        fill(255,0,0);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    this.targetsMove = function() {
        this.x = this.x + (Math.random()*9);
    }
  
  

}//function Drops()