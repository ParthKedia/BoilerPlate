class Ground {
    constructor() {
        var I = {
            isStatic:true
        }
        this.body = Bodies.rectangle(400,200,50,70,I);
        World.add(myWorld,this.body);
    }
    show(){
        var pos = this.body.position; 
        rect(pos.x, pos.y,800,20);
    }
}