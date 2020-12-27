class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX, y:this.offsetY},
            length:300
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var pos1 = this.rope.bodyA.position;
        var pos2 = this.rope.bodyB.position;
        stroke("white")
        line(pos1.x, pos1.y, pos2.x+this.offsetX, pos2.y);
        }
}