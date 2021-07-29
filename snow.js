class Snow{
    constructor(x,y,r) {
        var options={
            restitution:0.4
        }
        this.r=r
        this.image=loadImage("snow5.webp")
        this.body=Bodies.circle(x,y,this.r,options)
        World.add(world,this.body)
    }
display(){
    var p=this.body.position; //name spacing
    var angle= this.body.angle
    push()
    translate(p.x,p.y)
    rotate(angle)
    imageMode(center)
    image(this.image,0,0,this.r,this.r)
    pop()
}
}