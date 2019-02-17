"use strict";

let canvas;
let width, height;

window.onload = function () {
	canvas = document.querySelector("canvas");
	setTargetContext(canvas.getContext("2d"));
	
	width = canvas.width;
	height = canvas.height;
	
	start();
}

