class Ball {
    constructor(x, y,width,height,angle) {
      var options = {
        'density':1.0,
        'friction': 1.0,
        'restitution':0.8
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world,this.body);

      //super(x,y,50,50);
      //this.image=loadImage("sprites/bird.png");

    }
    display(){
      var angle = this.body.angle;
  
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
     imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
      pop();
            
    this.body.position.x=mouseX;
    this.body.position.y=mouseY;

    }
  }

  
    
  
 
