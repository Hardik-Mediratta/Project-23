var helicopter,helicopterImage;
var package,packageImage;
var ground;
var bar1,bar2,bar3;

function preload(){

	helicopterImage = loadImage("helicopter.png");
	packageImage = loadImage("package.png");
	
}

function setup(){
createCanvas(800,650)
	helicopter = createSprite(400,150,10,10);
	helicopter.addImage(helicopterImage);
	helicopter.scale = 0.7;
	
	var b_option
	{
		isStatic : true
	}
		
	ground = createSprite(400,600,900,15);
	ground.shapeColor = "white"

	
	bar1 = createSprite(400,580,200,20,b_option);
	bar1.shapeColor = "red"

	bar2 = createSprite(300,540,20,100,b_option);
	bar2.shapeColor = "red"

	bar1 = createSprite(500,540,20,100,b_option);
	bar1.shapeColor = "red"

}

function draw(){
background(0);

if (keyDown(DOWN_ARROW)){
packages();
}

	drawSprites();
}
function packages(){

	var options 
	{
		restitution:0.8
	}

package = createSprite(400,205,10,10,options);
package.addImage(packageImage);
package.scale = 0.2;
package.velocityY = 3;

}
