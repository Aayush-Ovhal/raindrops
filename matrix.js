class Matrix{

    constructor(x,y,width,height){
        var options ={
            'restitution': 1.0
        }

        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        this.y = this.body.y;
        this.x = this.body.x;
       World.add(world,this.body);
    }



    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
             
        if(pos.y > 400){
            console.log(pos.y);
            pos.y = random(-100,10);
            console.log(pos.y)
         }

        rectMode(CENTER);
        fill(random(0,255),random(0,255),random(0,255));
        rect(pos.x,pos.y,this.width,this.height);
  

       

    }


}



