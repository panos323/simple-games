function Gun() {
    this.x = width/2;
    this.y = height-80;
    this.xdir = 0;

    this.showGun = function() {
        fill(255);
        rect(this.x, this.y, 25, 60);
    }

    this.setDir = function(dir) {
        this.xdir = dir;
    }

    this.move = function(dir) {
        this.x += this.xdir*12;
    }

  


}//function Gun()