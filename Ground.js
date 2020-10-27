class Ground
 {
    constructor(x,y,width,height) 
    {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display()
    {
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(3);
      fill(250,0,200);
      rect(pos.x, pos.y, 400, 20);
      
    }
  }