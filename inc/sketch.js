"use strict"

let particles;
let block;

let windForce;

function setup() {
	windForce = new Vector(random(-0.05, 0.05), random(-0.0001, 0.0001));
	particles = new Set();
	block = new Block(new Vector(width/2 - 50, height/2 - 50), 100);

	setInterval( createParticle, 10);
	setInterval( () => windForce = new Vector(random(-0.05, 0.05), random(-0.0001, 0.0001)), 2000)
}

function loop() {
	background( new Color(200, 100, 10, 1, ColorType.HSL) );
	
	block.draw();

	particles.forEach((particle) => {
		particle.update();
		particle.draw();
		particle.applyForce(new Vector(0, -0.1/particle.radius))
		particle.applyForce(windForce);
		
	
		if(particle.lifeSpan <= 0)
			particles.delete(particle);

		if(block.collide(particle)) {
			let angle = Vector.substract( particle.position, new Vector(block.position.x + block.side/2, block.position.y + block.side/2)).getAngle();
			let force;

			if(angle < Math.PI/4 || angle > -Math.PI/4) {
				force = new Vector(-particle.velocity.x, 0);
				particle.position.x = ( block.position.x + block.side ) + particle.radius;
			
			} else if(angle > 3*Math.PI/4 || angle < -3*Math.PI/4) {
				force = new Vector(-particle.velocity.x, 0);
				particle.position.x = block.position.x - particle.radius;
			} else if(angle > Math.PI/4 && angle < 3*Math.PI/4) {
				force = new Vector(0, -particle.velocity.y);
				particle.position.y = block.position.y - particle.radius;
			} else {
				force = new Vector(0, -particle.velocity.y);
				particle.position.y = ( block.position.y + block.side ) + particle.radius;
			}

			particle.applyForce(force);
		}
	});
}

function createParticle() {
	particles.add(new Particle(new Vector(width/2, height)));
}
