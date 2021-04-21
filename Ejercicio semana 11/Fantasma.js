class Fantasma{
    constructor(x, y, dir, r, g, b){
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.r= r;
        this.g = g;
        this.b = b;
    }
    
    mostrar(){
        fill(this.r, this.g, this.b);
        rectMode(CENTER);
        rect(this.x, this.y, 50, 50);
        rectMode(CORNER); 
        this.especial();       
    }
}

