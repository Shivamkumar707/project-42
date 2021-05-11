class Drop {
  constructor(x,y){
      this.x = x;
      this.y = y;
      this.r = 5;
      var options = {
          restitution : 0.1,
          friction : 0.001
      }
      this.rain = Bodies.circle(x,y,5,options);
      World.add(world,this.rain);
      console.log(this.r);

  }

  update(){
    if(this.rain.position.y > height){
      Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
    }
  }

  display(){

    fill("skyBlue");
    ellipseMode(RADIUS);
    ellipse(this.rain.position.x,this.rain.position.y,this.r,this.r);
  }
}