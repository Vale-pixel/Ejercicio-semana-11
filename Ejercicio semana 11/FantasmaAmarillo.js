class FantasmaAmarillo extends Fantasma{
    constructor(x, y, dir, r, g,b){
       super(x,y,dir,r,g,b);
        // 0 es hacia arriba 1 es hacia abajo
    }

    especial(){
        this.saltar();
    }

    saltar(){
        if(this.y>400){
            this.y = 0; 
        }
    }
    mover(){
        if(this.dir === 1){            
            this.y++;
        }
    }
}
