"use strict"

let particles;

let windForce;

function setup() {
	windForce = new Vector(random(-0.05, 0.05), random(-0.0001, 0.0001));
	particles = new Set();

	setInterval( createParticle, 10);
	setInterval( () => windForce = new Vector(random(-0.05, 0.05), random(-0.0001, 0.0001)), 2000)

	canvas.addEventListener("click", clickListener);
}

function loop() {
	background( new Color(200, 100, 10, 1, ColorType.HSL) );
	
	particles.forEach((particle) => {
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
}
