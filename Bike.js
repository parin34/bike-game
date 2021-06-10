class Bikes {
    constructor(x,y){
        var options = {
            isStatic : true
        }

        //this.image = 
        this.image= loadImage("images/bike1.png");
       // this.image = loadImage("images/bike2.png");
        
        
        
        
        this.bike = Bodies.circle(x,y,10,options);
        this.radius = 30;
       
        World.add(world, this.bike)
        
    }

    display(){
        var pos = this.bike.position;
        push ()
        translate(pos.x,pos.y)
        imageMode(RADIUS);
        image(this.image,0,0,250,250)
        pop ()
    }
}