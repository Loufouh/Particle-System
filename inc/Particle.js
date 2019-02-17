"use strict";

class Particle {
	constructor(position) {
		this.position = position;
		this.velocity = new Vector(random(-0.5, 0.5), 0);
		this.acceleration = new Vector();

		this.radius = random(1, 5);

		this.totalLifeSpan = randomInt(10, 500);
		this.lifeSpan = this.totalLifeSpan;
	}

	update() {
		this.position.add(this.velocity);
		this.velocity.add(this.acceleration);
		this.acceleration.multiply(0);

		this.lifeSpan--;
	}

	draw() {
		fill(new Color(255, 200, 110, this.lifeSpan/this.totalLifeSpan));
		circle(this.position.x, this.position.y, this.radius);
	}

	applyForce(force) {
		this.acceleration.add(force);
	}
}

