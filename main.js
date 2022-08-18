img = "";
noseX = 0;
noseY = 0;
MarioX = 325;
MarioY = 325;

function preload() {
	gameover = loadSound("gameover.wav");
	jump = loadSound("jump.wav");
	kick = loadSound("kick.wav");
	coin = loadSound("coin.wav");
	mario_die = loadSound("mariodie.wav");
	world_start = loadSound("world_start.wav");
	img = loadImage("mario05.png");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent("canvas");

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("game_console")

	posenet = ml5.poseNet(video, model);
	posenet.on('pose', gotPosses);
}

function model() {
	console.log("Model is loaded");
}

function gotPosses(results) {
	if (results.length > 0) {
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("noseX = " + noseX, "noseY = " + noseY);
	}

}

function draw() {
	game();
	
	if (noseX < 300) {
		MarioX = MarioX - 1;
	}

	if (noseX > 300) {
		MarioX = MarioX + 1;
	}

	if (noseY < 150) {
		MarioY = MarioY - 1;
	}

	image(img, MarioX, MarioY, 40, 70);
}






