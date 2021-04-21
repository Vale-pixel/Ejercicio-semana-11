class FantasmaVerde extends Fantasma{
    constructor(x, y,dir,r,g,b){
        super(x,y,dir,r,g,b);
        // 0 es hacia arriba 1 es hacia abajo
    }

    especial(){
        this.rebotar();
    }

    rebotar(){
        if(this.y>400){
            this.dir = 0;
        }else if(this.y<0){
            this.dir = 1;
        }
    }
    mover(){
        if(this.dir === 0){
            this.y--;
        }else{
            this.y++;
        }
    }
}
