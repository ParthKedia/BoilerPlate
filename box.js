class Box{
    constructor(x,y,width,height){
        var B = {
            isStatic:false,
            restitution:1
        }
        this.body = Bodies.rectangle(x,y,width,height,B);
        World.add(myWorld,this.body);
        this.width = width;
        this.height = height;
    }
    display(){
        rectMode(CENTER); 
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
        
}