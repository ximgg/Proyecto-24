class Stone{
	constructor(x,y)
	{
	
	var options ={ 
        'restitution':0.7,
        'friction':0.9,
        'density':15,
	}
		this.x=x;
		this.y=y;
		
		this.body= Bodies.rectangle(this.x, this.y,40,40, options)
		this.image = loadImage("roca.png");
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);

			
			
			
			
			imageMode(CENTER)
           image(this.image,80,-20,300, 150);
			pop()
	}

}