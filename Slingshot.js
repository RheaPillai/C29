class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.image1=loadImage("sprites/sling1.png")
        this.image2=loadImage("sprites/sling2.png")
        this.image3=loadImage("sprites/sling3.png")
    }     

    fly(){
        this.sling.bodyA = null;
    }

    display(){
         image(this.image1,190,70,38,150)
         image(this.image2,170,56,33,98)

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("#301608")
            line(pointA.x-10, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+10, pointA.y, pointB.x+20, pointB.y);
            image(this.image3,pointA.x-20,pointA.y-10,12,32)
        }
    }
    
}