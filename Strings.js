class Strings{
    constructor(body1,body2){
        var options={
            bodyA:body1,
            bodyB:body2,
            length:10,
            stiffness:0.04
        }

        this.strings=Constrained.create(options);
        World.add(world,this.strings);
    }
    display(){
         var pointA=this.strings.bodyA.position;
         var pointB=this.strings.bodyB.position;
         line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}