class launcher{
	constructor(body,body1)
	{
		
		var options={ bodyA:body,			 
			pointB:body1, 
			stiffness:0.001, 
			 length:10
			
		}
		
		this.bodyA=body
		this.pointB=body1
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}

	display()
	{
		if(this.launcher.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			//stroke(240,240,240);
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
	fly()
	{
		//World.remove(world,this.rope)
		this.launcher.bodyA=null;
	}

}