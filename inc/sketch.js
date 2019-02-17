"use strict"

let particles;

let windForce;

function setup() {
	windForce = new Vector(random(-0.05, 0.05), random(-0.0001, 0.0001));
	particles = new Set();

	setInterval( createParticle, 10);
	setInterval( () => windForce = new Vector(random(-0.05, 0.05), random(-0.0001, 0.0001)), 2000)
}

function loop() {
	background( new Color(200, 100, 10, 1, ColorType.HSL) );
	
	particles.forEach((particle) => {
		particle.update();
		particle.draw();
		particle.applyForce(windForce);
		
	
		if(particle.lifeSpan <= 0)
			particles.delete(particle);
	});

}

function createParticle() {
	particles.add(new Particle(new Vector(width/2, height)));
}
