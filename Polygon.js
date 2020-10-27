class Polygon{
    constructor(x, y,r) {
   
        this.body = Bodies.circle(x, y,r);
        this.width = width;
        this.height = height;
        this.r=r;
        this.image=loadImage("hexa.jpg")
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        imageMode(CENTER);
        fill("white");
        image(this.image,pos.x,pos.y,40,40);
       // ellipse(this.body,0,0,this.r,this.r);
        pop();
        }
    }
