"use strict";

class Vector {
	constructor(x=0, y=0) {
		this.x = x;
		this.y = y;
	}

	add(v) {
		this.x += v.x;
		this.y += v.y;
	}

	substract(v) {
		this.x -= w.x;
		this.y -= w.y;
	}

	multiply(value) {
		this.x *= value;
		this.y *= value;
	}

	divide(value) {
		this.x /= value;
		this.y /= value;
	}

	setMagnitude(magnitude) {
		let angle = this.getAngle();

		this.x = magnitude*Math.cos(angle);
		this.y = magnitude*Math.sin(angle);
	}

	getAngle() {
		let magnitude = Math.sqrt( this.x**2 + this.y**2 );
		let angle = Math.acos( this.x/magnitude );			

		if(this.y < 0)
			angle *= -1;
		
		return angle;
	}

	static distance(v, w) {
		return Math.sqrt( Vector.squareDistance(v, w) );
	}

	static squareDistance(v, w) {
		return (v.x - w.x)**2 + (v.y - w.y)**2;
	}

	static add(v, w) {
		return new Vector(v.x + w.x, v.y + v.y);
	}

	static substract(v, w) {
		return new Vector(v.x - w.x, v.y - w.y);
	}

	static multiply(v, value) {
		return new Vector(v.x*value, v.y*value);
	}
	
	static divide(v, value) {
		return new Vector(v.x/value, v.y/value);
	}
}
