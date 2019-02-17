"use strict";

let controllingLoopTimeout;

function start() {
	setup();
	startLooping();
}

function controllingLoop() {
	let deltaTime = 0;
	let startTime;
	let endTime;
	
	startTime = new Date();
	
	loop();

	endTime = new Date();
	deltaTime = endTime - startTime;
	numberOfFrames++;

	controllingLoopTimeout = setTimeout(controllingLoop, 1000/wantedFPS - deltaTime/1000);
}

function startLooping() {
	clearTimeout(controllingLoopTimeout);
	controllingLoop();
}

function stopLooping() {
	clearTimeout(controllingLoopTimeout);
}
