class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }

//displaying the speed
  display(){
    console.log(this.body.speed);
    //if speed is greater than 3 the pig should dissapear
    if(this.body.speed<3){
      super.display();
    }
    else{
      //remove pig
    World.remove(world,this.body);
    //pushing
    push();
    //tint colour make it transparent
    this.Visiblity = this.Visiblity-5;
    tint(255,this.Visiblity);
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    //popping
    pop();
    }
    
  }

};