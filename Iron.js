class Iron{
	constructor(x,y)
	{
	
	var options ={ 
        'restitution':0.9,
        'friction':5,
        'density':70,
	}
		this.x=x;
		this.y=y;
		
		this.body= Bodies.rectangle(this.x, this.y,40,40, options)
		this.image = loadImage("hierro.png");
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			
			imageMode(CENTER)
           image(this.image,80,0,300, 150);
			pop()
	}

}