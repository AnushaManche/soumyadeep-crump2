class Paper{


constructor(x,y,r){
   
var options={

isStatic:false,
restitution:0.6,
friction:0,
density:1.1
    
}
this.x=x
this.y=y
this.r=r                    
this.image=loadImage("paper.png")

this.body=Bodies.circle(this.x,this.y,this.r/2,options)
World.add(world,this.body)

}



display(){
var paperpos= this.body.position
push()
translate(paperpos.x,paperpos.y)
rectMode(CENTER)
imageMode(CENTER)
image(this.image,0,0,this.r,this.r)


//stroke(10)
fill("white")

//ellipse(0,0,this.r,this.r)
pop()
}
}