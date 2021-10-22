class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options ={ 
        'restitution':0.3,
        'friction':6,
        'density':1.0,
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		this.image = loadImage("rubberwh.png");
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);

			
			
			
			
			//draw the ellipse here to display the rubber ball
			imageMode(CENTER)
           image(this.image,80,-40,300, 150);
			pop()
	}

}