"use strict";

class Block {
	constructor(position, side) {
		this.position = position;
		this.side = side;
	}	

	draw() {
		fill(new Color(52, 52, 255));	
		rect(this.position.x, this.position.y, this.side, this.side);
	}	

	collide(particle) {
		if(( particle.position.x + particle.radius ) > this.position.x && ( particle.position.x - particle.radius ) < ( this.position.x + this.side ) &&
		   ( particle.position.y + particle.radius ) > this.position.y && ( particle.position.y - particle.radius )  < ( this.position.y + this.side ) )
			return true;
		return false;
		
	}

	get center() {
		return new Vector(this.position.x + this.side/2, this.position.y + this.side/2);
	}
}
