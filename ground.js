class Ground{

    constructor(x,y,width,height){
        var op={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,op);
        this.width=width;
        this.height=height;
  
        World.add(world,this.body)
    }
  
    display(){
        var po=this.body.position;
        rectMode(CENTER)
        fill ("brown");
        rect(po.x,po.y,this.width,this.height)
        
        
    }
  
  }