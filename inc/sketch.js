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

	canvas.addEventListener("click", clickListener);
}

function loop() {
	background( new Color(200, 100, 10, 1, ColorType.HSL) );
	
	block.draw();

	particles.forEach((particle) => {
		if(block.collide(particle)) 
			particle.lifeSpan = 0;	

		if(particle.lifeSpan <= 0)
			particles.delete(particle);

		particle.update();
		particle.draw();
		particle.applyForce(new Vector(0, -0.1/particle.radius))
		particle.applyForce(windForce);
	

	});
}

function createParticle() {
	particles.add(new Particle(new Vector(width/2, height)));
}

function clickListener(evt) {
	let rect = evt.target.getBoundingClientRect();
	let pos = new Vector(evt.clientX - rect.left, evt.clientY - rect.top);
	
	console.log(Vector.substract( pos, new Vector(block.position.x + block.side/2, block.position.y + block.side/2)).getAngle())
}
