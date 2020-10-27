class Box{
    constructor(x, y, width, height) {
        var options = {
            
            restitution:1.2,
            friction:0.001,
            density:0.01
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        if(this.body.speed < 4){
        push();
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
        }
        else{
         World.remove(world, this.body);
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         }   
         pop();
      }
}
