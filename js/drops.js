function Drops(x,y) {
    this.x = x;
    this.y = y;
    this.r = 10;

    this.dropShow = function() {
        fill(0,0,255);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    this.dropFire = function() {
        this.y = this.y-10;
    }
  
    this.hitTarget = function(target) {
        var distance = dist(this.x,this.y,target.x,target.y);

        if (distance < this.r + target.r) {
            return true;
        } else {
            return false;
        }
    }

}//function Drops()