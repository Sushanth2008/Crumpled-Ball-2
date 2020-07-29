class Ball{

        constructor(x,y,width,height){
            var op={
                isStatic:false,
                restitution: 0.3,
                friction: 0.5,
                density:1.2
            }
        this.body=Bodies.rectangle(x,y,width,height,op);
        this.width=width;
        this.height=height;
        this.image=loadImage("paper.png")
  
        World.add(world,this.body)
    }
  
    display(){
        var po=this.body.position;
        imageMode(CENTER)
        fill ("white")
        image(this.image,po.x,po.y,this.width,this.height)
        
    }
  
  }
  