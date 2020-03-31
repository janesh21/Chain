class Chain {
    constructor (bodyA, bodyB) {
    var constrainedoptions = {
        bodyA: bodyA,
        bodyB: bodyB,
        length: 5,
        stiffness : 0.2
    }
    this.chain=Constraint.create (constrainedoptions);
    World.add(world,this.chain);
    }
    display () {
      var pointA = this.chain.bodyA.position;
      var pointB = this.chain.bodyB.position;
      strokeWeight (5);
      line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
}