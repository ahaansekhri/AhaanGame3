
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hero;
var textState = 0;
var wall1,wall105,wall2,wall205,wall3,wall305,wall4,wall405;
var corridor1,corridor105,corridor2,corridor205,corridor3,corridor305;
var RoomsVisited = [[1,false],[2,false],[3,false],[4,false],[5,false],[6,false],[7,false],[8,false]];
var gameState =0;
var PressedOne = false;
var bugs;
var score = 0;
var xD, yD;


function preload(){
	heroIMG = loadImage("FINALhero.png")
	enemyImage = loadImage("enemy1.png");
	spiderImage = loadImage("spider.png");
	centipedeImage = loadImage("centipede.png")
	timeStart = Date.now();

}

function setup() {
	createCanvas(windowWidth, windowHeight-5);

	backgroundImg = loadImage("caveFloor.jpg");

	engine = Engine.create();
	world = engine.world;

	backgroundimg = createSprite(width/2,height/2,500,500);
	backgroundimg.addImage(backgroundImg);
	backgroundimg.scale = 2.7;

	hero = createSprite(width/2,height/2,20,20);
	hero.addImage(heroIMG);
	hero.scale = 0.175;
	hero.rotation = 130;
	//hero.visible = false;

	camera.x = hero.x;
	camera.y = hero.y;
	camera.zoom = 1.45;// change to 3.14  later

	wall1 = createSprite(width/2-400, height/2-140,5,220);
	wall105= createSprite(width/2-400, height/2+140,5,220);
	wall2 = createSprite(width/2+400, height/2-140,5,220);
	wall205 = createSprite(width/2+400, height/2+140,5,220);
	wall3 = createSprite(width/2-220, height/2+250,360,5);
	wall305 = createSprite(width/2+220, height/2+250,360,5);
	wall4 = createSprite(width/2-220, height/2-250,360,5);
	wall405 = createSprite(width/2+220, height/2-250,360,5);

	corridor1 = createSprite(width/2-40,height/2-477,5,450);
	corridor105 = createSprite(width/2+40,height/2-477,5,450);

	wall5 = createSprite(width/2-400, height/2-1090,5,220);
	wall505= createSprite(width/2-400, height/2-810,5,220);
	wall6 = createSprite(width/2+400, height/2-1090,5,220);
	wall605 = createSprite(width/2+400, height/2-810,5,220);
	wall7 = createSprite(width/2-220, height/2-700,360,5);
	wall705 = createSprite(width/2+220, height/2-700,360,5);
	wall805 = createSprite(width/2, height/2-1200,800,5);

	corridor2 = createSprite(width/2-40,height/2+477,5,450);
	corridor205 = createSprite(width/2+40,height/2+477,5,450);

	wall9 = createSprite(width/2-400, height/2+810,5,220);
	wall905= createSprite(width/2-400, height/2+1090,5,220);
	wall10 = createSprite(width/2+400, height/2+810,5,220);
	wall1005 = createSprite(width/2+400, height/2+1090,5,220);
	wall1105 = createSprite(width/2, height/2+1200,800,5);
	wall12 = createSprite(width/2-220, height/2+700,360,5);
	wall1205 = createSprite(width/2+220, height/2+700,360,5);

	corridor3 = createSprite(width/2-827,height/2+30,850,5);
	corridor305 = createSprite(width/2-827,height/2-30,850,5);

	wall1305= createSprite(width/2-2050, height/2,5,500);
	wall14 = createSprite(width/2-1250, height/2-140,5,220);
	wall1405 = createSprite(width/2-1250, height/2+140,5,220);
	wall15 = createSprite(width/2-1870, height/2+250,360,5);
	wall1505 = createSprite(width/2-1430, height/2+250,360,5);
	wall16 = createSprite(width/2-1870, height/2-250,360,5);
	wall1605 = createSprite(width/2-1430, height/2-250,360,5);

	corridor4 = createSprite(width/2+827,height/2+30,850,5);
	corridor405 = createSprite(width/2+827,height/2-30,850,5);

	wall17 = createSprite(width/2+1250, height/2-140,5,220);
	wall1705= createSprite(width/2+1250, height/2+140,5,220);
	wall1805 = createSprite(width/2+2050, height/2,5,500);
	wall19 = createSprite(width/2+1430, height/2+250,360,5);
	wall1905 = createSprite(width/2+1870, height/2+250,360,5);
	wall20 = createSprite(width/2+1430, height/2-250,360,5);
	wall2005 = createSprite(width/2+1870, height/2-250,360,5);
	
	wall21 = createSprite(width/2+1250, height/2-140,5,220);
	wall2105= createSprite(width/2+1250, height/2+140,5,220);
	wall22 = createSprite(width/2+2050, height/2-140,5,220);
	wall2205 = createSprite(width/2+2050, height/2,5,500);
	wall23 = createSprite(width/2+1430, height/2+250,360,5);
	wall2305 = createSprite(width/2+1870, height/2+250,360,5);
	wall24 = createSprite(width/2+1430, height/2-250,360,5);
	wall2405 = createSprite(width/2+1870, height/2-250,360,5);

	corridor5 = createSprite(width/2-1610,height/2-477,5,450);
	corridor505 = createSprite(width/2-1690,height/2-477,5,450);

	wall25 = createSprite(width/2-2050, height/2-1090,5,220);
	wall2505= createSprite(width/2-1250, height/2-810,5,220);
	wall26 = createSprite(width/2-1250, height/2-1090,5,220);
	wall2605 = createSprite(width/2-2050, height/2-950,5,515);
	wall27 = createSprite(width/2-1430, height/2-700,360,5);
	wall2705 = createSprite(width/2-1870, height/2-700,360,5);
	wall2805 = createSprite(width/2-1650, height/2-1200,800,5);

	corridor6 = createSprite(width/2-827,height/2-920,850,5);
	corridor605 = createSprite(width/2-827,height/2-980,850,5);

	wall29 = createSprite(width/2+2050, height/2-1090,5,220);
	wall2905= createSprite(width/2+1250, height/2-810,5,220);
	wall30 = createSprite(width/2+1250, height/2-1090,5,220);
	wall3005 = createSprite(width/2+2050, height/2-950,5,515);
	wall31 = createSprite(width/2+1430, height/2-700,360,5);
	wall3105 = createSprite(width/2+1870, height/2-700,360,5);
	wall32 = createSprite(width/2+1870, height/2-1200,360,5);
	wall3205 = createSprite(width/2+1650, height/2-1200,800,5);

	corridor7 = createSprite(width/2+827,height/2-920,850,5);
	corridor705 = createSprite(width/2+827,height/2-980,850,5);

	corridor8 = createSprite(width/2+1610,height/2-477,5,450);
	corridor805 = createSprite(width/2+1690,height/2-477,5,450);

	wall33 = createSprite(width/2+2050, height/2+1090,5,220);
	wall3305= createSprite(width/2+1250, height/2+810,5,220);
	wall34 = createSprite(width/2+1250, height/2+1090,5,220);
	wall3405 = createSprite(width/2+2050, height/2+950,5,515);
	wall35 = createSprite(width/2+1430, height/2+700,360,5);
	wall3505 = createSprite(width/2+1870, height/2+700,360,5);
	wall36 = createSprite(width/2+1870, height/2+1200,360,5);
	wall3605 = createSprite(width/2+1650, height/2+1200,800,5);

	corridor9 = createSprite(width/2+1610,height/2+477,5,450);
	corridor905 = createSprite(width/2+1690,height/2+477,5,450);

	wall37 = createSprite(width/2-2050, height/2+1090,5,220);
	wall3705= createSprite(width/2-1250, height/2+810,5,220);
	wall38 = createSprite(width/2-1250, height/2+1090,5,220);
	wall3805 = createSprite(width/2-2050, height/2+950,5,515);
	wall39 = createSprite(width/2-1430, height/2+700,360,5);
	wall3905 = createSprite(width/2-1870, height/2+700,360,5);
	wall40 = createSprite(width/2-1870, height/2+1200,360,5);
	wall4005 = createSprite(width/2-1650, height/2+1200,800,5);

	corridor10 = createSprite(width/2-827,height/2+920,850,5);
	corridor1005 = createSprite(width/2-827,height/2+980,850,5);

	corridor11 = createSprite(width/2+827,height/2+920,850,5);
	corridor1105 = createSprite(width/2+827,height/2+980,850,5);

	corridor12 = createSprite(width/2-1610,height/2+477,5,450);
	corridor1205 = createSprite(width/2-1690,height/2+477,5,450);
	
	bugsGroup = new Group()

	enemy1 = new Enemy(width/2-1650,height/2-200,0,40,5);
	sprite1 = createSprite(enemy1.body.position.x,enemy1.body.position.y,40,40);
	sprite1.addImage(enemyImage);
	sprite1.scale = 0.07;

	enemy2 = new Enemy(width/2-1400,height/2,0,40,5);
	sprite2 = createSprite(enemy2.body.position.x,enemy2.body.position.y,40,40);
	sprite2.addImage(enemyImage);
	sprite2.scale = 0.07;

	enemy3 = new Enemy(width/2-2000,height/2+100,1,40,5);
	sprite3 = createSprite(enemy3.body.position.x,enemy3.body.position.y,40,40);
	sprite3.addImage(enemyImage);
	sprite3.scale = 0.07;

	enemy4 = new Enemy(width/2-1650,height/2-1150,0,40,5);
	sprite4 = createSprite(enemy4.body.position.x,enemy4.body.position.y,40,40);
	sprite4.addImage(enemyImage);
	sprite4.scale = 0.07;

	enemy5 = new Enemy(width/2-1400,height/2-950,0,40,5);
	sprite5 = createSprite(enemy5.body.position.x,enemy5.body.position.y,40,40);
	sprite5.addImage(enemyImage);
	sprite5.scale = 0.07;

	enemy6 = new Enemy(width/2-2000,height/2-850,1,40,5);
	sprite6 = createSprite(enemy6.body.position.x,enemy6.body.position.y,40,40);
	sprite6.addImage(enemyImage);
	sprite6.scale = 0.07;

	enemy7 = new Enemy(width/2-1650,height/2+750,0,40,5);
	sprite7 = createSprite(enemy7.body.position.x,enemy7.body.position.y,40,40);
	sprite7.addImage(enemyImage);
	sprite7.scale = 0.07;

	enemy8 = new Enemy(width/2-1400,height/2+950,0,40,5);
	sprite8 = createSprite(enemy8.body.position.x,enemy8.body.position.y,40,40);
	sprite8.addImage(enemyImage);
	sprite8.scale = 0.07;

	enemy9 = new Enemy(width/2-2000,height/2+1050,1,40,5);
	sprite9 = createSprite(enemy9.body.position.x,enemy9.body.position.y,40,40);
	sprite9.addImage(enemyImage);
	sprite9.scale = 0.07;

	enemy10 = new Spider(width/2,height/2-1050,0,40,5);
	sprite10 = createSprite(enemy10.body.position.x,enemy10.body.position.y,40,40);
	sprite10.addImage(spiderImage);
	sprite10.scale = 0.03;

	enemy11 = new Spider(width/2+150,height/2-1100,1,40,5);
	sprite11 = createSprite(enemy11.body.position.x,enemy11.body.position.y,40,40);
	sprite11.addImage(spiderImage);
	sprite11.scale = 0.03;

	enemy12 = new Spider(width/2-150,height/2-800,1,40,5);
	sprite12 = createSprite(enemy12.body.position.x,enemy12.body.position.y,40,40);
	sprite12.addImage(spiderImage);
	sprite12.scale = 0.03;


	enemy13 = new Spider(width/2,height/2+900,0,40,5);
	sprite13 = createSprite(enemy13.body.position.x,enemy13.body.position.y,40,40);
	sprite13.addImage(spiderImage);
	sprite13.scale = 0.03;

	enemy14 = new Spider(width/2+150,height/2+850,1,40,5);
	sprite14 = createSprite(enemy14.body.position.x,enemy14.body.position.y,40,40);
	sprite14.addImage(spiderImage);
	sprite14.scale = 0.03;

	enemy15 = new Spider(width/2-150,height/2+1150,1,40,5);
	sprite15 = createSprite(enemy15.body.position.x,enemy15.body.position.y,40,40);
	sprite15.addImage(spiderImage);
	sprite15.scale = 0.03;

	enemy16= new Centipede(width/2+2000,height/2-200,0,40,5);
	sprite16 = createSprite(enemy16.body.position.x,enemy16.body.position.y,40,40);
	sprite16.addImage(centipedeImage);
	sprite16.scale = 0.3;
	
	enemy17= new Centipede(width/2+1750,height/2-50,0,40,5);
	sprite17 = createSprite(enemy17.body.position.x,enemy17.body.position.y,40,40);
	sprite17.addImage(centipedeImage);
	sprite17.scale = 0.3;

	enemy18 = new Centipede(width/2+1350,height/2+100,1,40,5);
	sprite18 = createSprite(enemy18.body.position.x,enemy18.body.position.y,40,40);
	sprite18.addImage(centipedeImage);
	sprite18.scale = 0.3;

	enemy19= new Centipede(width/2+2000,height/2-1150,0,40,5);
	sprite19 = createSprite(enemy19.body.position.x,enemy19.body.position.y,40,40);
	sprite19.addImage(centipedeImage);
	sprite19.scale = 0.3;

	enemy20= new Centipede(width/2+1750,height/2-1000,0,40,5);
	sprite20 = createSprite(enemy20.body.position.x,enemy20.body.position.y,40,40);
	sprite20.addImage(centipedeImage);
	sprite20.scale = 0.3;

	enemy21 = new Centipede(width/2+1350,height/2-850,1,40,5);
	sprite21 = createSprite(enemy21.body.position.x,enemy16.body.position.y,40,40);
	sprite21.addImage(centipedeImage);
	sprite21.scale = 0.3;

	enemy22= new Centipede(width/2+2000,height/2+750,0,40,5);
	sprite22 = createSprite(enemy22.body.position.x,enemy22.body.position.y,40,40);
	sprite22.addImage(centipedeImage);
	sprite22.scale = 0.3;

	enemy23= new Centipede(width/2+1750,height/2+900,0,40,5);
	sprite23 = createSprite(enemy23.body.position.x,enemy23.body.position.y,40,40);
	sprite23.addImage(centipedeImage);
	sprite23.scale = 0.3;

	enemy24 = new Centipede(width/2+1350,height/2+1050,1,40,5);
	sprite24 = createSprite(enemy24.body.position.x,enemy24.body.position.y,40,40);
	sprite24.addImage(centipedeImage);
	sprite24.scale = 0.3;

	
	//bugs = [enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9,enemy10,enemy11,enemy12,enemy13,enemy14,enemy15,enemy16,enemy17,enemy18,enemy19,enemy20,enemy21,enemy22,enemy23,enemy24]
	
	
	Engine.run(engine);	
  
}


function draw() {
  rectMode(CENTER);
  background("black");
 
  if(gameState === 1){
	if(keyDown(LEFT_ARROW) && keyIsDown(88) === false){
		hero.x = hero.x-9;//9 later
		hero.rotation = 40;
	}

	 if(keyDown(65)&& keyIsDown(88) === false){
	 	hero.x = hero.x-9;//9 later
	 	hero.rotation = 40;
	 }

	if(keyDown(RIGHT_ARROW)&& keyIsDown(88) === false){
	  hero.x = hero.x+9;//slow later
	  hero.rotation = 220;
  }

  if(keyDown(68)&& keyIsDown(88) === false){
 	hero.x = hero.x+9;//slow later
 	hero.rotation = 220;
 }

  if(keyDown(UP_ARROW)&& keyIsDown(88) === false){
	  hero.y = hero.y-9;//slow later
	  hero.rotation = 130;
  }

  if(keyDown(87)&& keyIsDown(88) === false){
 	hero.y = hero.y-9;//slow later
 	hero.rotation = 130;
  }
  
  if(keyDown(DOWN_ARROW) && keyIsDown(88) === false){
	  hero.y = hero.y+9;//slow later
	  hero.rotation = 310;

  }

   if(keyDown(83)&& keyIsDown(88) === false){
 	hero.y = hero.y+9;//slow later
 	hero.rotation = 130;
 	}
 }



camera.x = hero.x;
camera.y = hero.y;

hero.collide(wall1);
hero.collide(wall105);
hero.collide(wall2);
hero.collide(wall205);
hero.collide(wall3);
hero.collide(wall305);
hero.collide(wall4);
hero.collide(wall405);
hero.collide(corridor1);
hero.collide(corridor105);
hero.collide(corridor2);
hero.collide(corridor205);
hero.collide(corridor3);
hero.collide(corridor305);
hero.collide(corridor4);
hero.collide(corridor405);
hero.collide(corridor5);
hero.collide(corridor505);
hero.collide(corridor6);
hero.collide(corridor605);
hero.collide(corridor7);
hero.collide(corridor705);
hero.collide(corridor8);
hero.collide(corridor805);
hero.collide(corridor9);
hero.collide(corridor905);
hero.collide(corridor10);
hero.collide(corridor1005);
hero.collide(corridor11);
hero.collide(corridor1105);
hero.collide(corridor12);
hero.collide(corridor1205);
hero.collide(wall5);
hero.collide(wall505);
hero.collide(wall6);
hero.collide(wall605);
hero.collide(wall7);
hero.collide(wall705);
hero.collide(wall805);
hero.collide(wall9);
hero.collide(wall905);
hero.collide(wall10);
hero.collide(wall1005);
hero.collide(wall1105);
hero.collide(wall12);
hero.collide(wall1205);
hero.collide(wall1305);
hero.collide(wall14);
hero.collide(wall1405);
hero.collide(wall15);
hero.collide(wall1505);
hero.collide(wall16);
hero.collide(wall1605);
hero.collide(wall17);
hero.collide(wall1705);
hero.collide(wall1805);
hero.collide(wall19);
hero.collide(wall1905);
hero.collide(wall20);
hero.collide(wall2005);
hero.collide(wall21);
hero.collide(wall2105);
hero.collide(wall22);
hero.collide(wall2205);
hero.collide(wall23);
hero.collide(wall2305);
hero.collide(wall24);
hero.collide(wall2405);
hero.collide(wall25);
hero.collide(wall2505);
hero.collide(wall26);
hero.collide(wall2605);
hero.collide(wall27);
hero.collide(wall2705);
hero.collide(wall2805);
hero.collide(wall29);
hero.collide(wall2905);
hero.collide(wall30);
hero.collide(wall3005);
hero.collide(wall31);
hero.collide(wall3105);
hero.collide(wall32);
hero.collide(wall3205);
hero.collide(wall33);
hero.collide(wall3305);
hero.collide(wall34);
hero.collide(wall3405);
hero.collide(wall35);
hero.collide(wall3505);
hero.collide(wall36);
hero.collide(wall3605);
hero.collide(wall37);
hero.collide(wall3705);
hero.collide(wall38);
hero.collide(wall3805);
hero.collide(wall39);
hero.collide(wall3905);
hero.collide(wall40);
hero.collide(wall4005);


sprite1.x = enemy1.body.position.x;
sprite1.y = enemy1.body.position.y;

sprite2.x = enemy2.body.position.x;
sprite2.y = enemy2.body.position.y;

sprite3.x = enemy3.body.position.x;
sprite3.y = enemy3.body.position.y;

sprite4.x = enemy4.body.position.x;
sprite4.y = enemy4.body.position.y;

sprite5.x = enemy5.body.position.x;
sprite5.y = enemy5.body.position.y;

sprite6.x = enemy6.body.position.x;
sprite6.y = enemy6.body.position.y;

sprite7.x = enemy7.body.position.x;
sprite7.y = enemy7.body.position.y;

sprite8.x = enemy8.body.position.x;
sprite8.y = enemy8.body.position.y;

sprite9.x = enemy9.body.position.x;
sprite9.y = enemy9.body.position.y;

sprite10.x = enemy10.body.position.x;
sprite10.y = enemy10.body.position.y;

sprite11.x = enemy11.body.position.x;
sprite11.y = enemy11.body.position.y;

sprite12.x = enemy12.body.position.x;
sprite12.y = enemy12.body.position.y;

sprite13.x = enemy13.body.position.x;
sprite13.y = enemy13.body.position.y;

sprite14.x = enemy14.body.position.x;
sprite14.y = enemy14.body.position.y;

sprite15.x = enemy15.body.position.x;
sprite15.y = enemy15.body.position.y;

sprite16.x = enemy16.body.position.x;
sprite16.y = enemy16.body.position.y;

sprite17.x = enemy17.body.position.x;
sprite17.y = enemy17.body.position.y;

sprite18.x = enemy18.body.position.x;
sprite18.y = enemy18.body.position.y;

sprite19.x = enemy19.body.position.x;
sprite19.y = enemy19.body.position.y;

sprite20.x = enemy20.body.position.x;
sprite20.y = enemy20.body.position.y;

sprite21.x = enemy21.body.position.x;
sprite21.y = enemy21.body.position.y;

sprite22.x = enemy22.body.position.x;
sprite22.y = enemy22.body.position.y;

sprite23.x = enemy23.body.position.x;
sprite23.y = enemy23.body.position.y;

sprite24.x = enemy24.body.position.x;
sprite24.y = enemy24.body.position.y;


if(hero.isTouching(sprite1)&& keyIsDown(88)){
	enemy1.destroy();
	sprite1.destroy();
	score++;
}

if(hero.isTouching(sprite2)&& keyIsDown(88)){
	enemy2.destroy();
	sprite2.destroy();
	score++;
}

if(hero.isTouching(sprite3)&& keyIsDown(88)){
	enemy3.destroy();
	sprite3.destroy();
	score++;
}

if(hero.isTouching(sprite4)&& keyIsDown(88)){
	enemy4.destroy();
	sprite4.destroy();
	score++;
}

if(hero.isTouching(sprite5)&& keyIsDown(88)){
	enemy5.destroy();
	sprite5.destroy();
	score++;
}

if(hero.isTouching(sprite6)&& keyIsDown(88)){
	enemy6.destroy();
	sprite6.destroy();
	score++;
}

if(hero.isTouching(sprite7)&& keyIsDown(88)){
	enemy7.destroy();
	sprite7.destroy();
	score++;
}

if(hero.isTouching(sprite8)&& keyIsDown(88)){
	enemy8.destroy();
	sprite8.destroy();
	score++;
}

if(hero.isTouching(sprite9)&& keyIsDown(88)){
	enemy9.destroy();
	sprite9.destroy();
	score++;
}

if(hero.isTouching(sprite10)&& keyIsDown(88)){
	enemy10.destroy();
	sprite10.destroy();
	score++;
}

if(hero.isTouching(sprite11)&& keyIsDown(88)){
	enemy11.destroy();
	sprite11.destroy();
	score++;
}

if(hero.isTouching(sprite12)&& keyIsDown(88)){
	enemy12.destroy();
	sprite12.destroy();
	score++;
}

if(hero.isTouching(sprite13)&& keyIsDown(88)){
	enemy13.destroy();
	sprite13.destroy();
	score++;
}

if(hero.isTouching(sprite14)&& keyIsDown(88)){
	enemy14.destroy();
	sprite14.destroy();
	score++;
}

if(hero.isTouching(sprite15)&& keyIsDown(88)){
	enemy15.destroy();
	sprite15.destroy();
	score++;
}

if(hero.isTouching(sprite16)&& keyIsDown(88)){
	enemy16.destroy();
	sprite16.destroy();
	score++;
}

if(hero.isTouching(sprite17)&& keyIsDown(88)){
	enemy17.destroy();
	sprite17.destroy();
	score++;
}

if(hero.isTouching(sprite18)&& keyIsDown(88)){
	enemy18.destroy();
	sprite18.destroy();
	score++;
}

if(hero.isTouching(sprite19)&& keyIsDown(88)){
	enemy19.destroy();
	sprite19.destroy();
	score++;
}

if(hero.isTouching(sprite20)&& keyIsDown(88)){
	enemy20.destroy();
	sprite20.destroy();
	score++;
}

if(hero.isTouching(sprite21)&& keyIsDown(88)){
	enemy21.destroy();
	sprite21.destroy();
	score++;
}

if(hero.isTouching(sprite22)&& keyIsDown(88)){
	enemy22.destroy();
	sprite22.destroy();
	score++;
}

if(hero.isTouching(sprite23)&& keyIsDown(88)){
	enemy23.destroy();
	sprite23.destroy();
	score++;
}

if(hero.isTouching(sprite24)&& keyIsDown(88)){
	enemy24.destroy();
	sprite24.destroy();
	score++;
}
  drawSprites();

  
push();
	fill("white")
  if(textState === 0){
	textSize(20)
	text("Hello and welcome to the mythical labrynith!",hero.x-390,hero.y-220);
	text("Why are you here, you may ask, and honestly I dont really know,",hero.x-390,hero.y-190);
	text("But, you know what, I am feeling friendly, therefore today all you must do is kill some bugs!",hero.x-390,hero.y-160);
	text("You can use the arrow keys or your w,a,s,d keys to move. and x to kill bugs!",hero.x-390,hero.y-130);
	text("But remember that you cannot move while pressing x",hero.x-390,hero.y-100);
	text("Well what are you waiting for? Go!",hero.x-390,hero.y-70);

	textSize(15)
	text("press space to continue!",hero.x+10,hero.y-70);
		if(keyWentDown("space")){
			textState = 1;
		}
	}

  if(textState === 1){
	gameState = 1;
  }

  pop();

  if(keyDown(88)){
		for(i in bugs){
			if(hero.isTouching(bugs[i])){
				bugs[i].destory();
				bugs[i] = undefined;

			}
		}
	}

  enemy1.display();
  enemy2.display();
  enemy3.display();
  enemy4.display();
  enemy5.display();
  enemy6.display();
  enemy7.display();
  enemy8.display();
  enemy9.display();
  enemy10.display();
  enemy11.display();
  enemy12.display();
  enemy13.display();
  enemy14.display();
  enemy15.display();
  enemy16.display();
  enemy17.display();
  enemy18.display();
  enemy19.display();
  enemy20.display();
  enemy21.display();
  enemy22.display();
  enemy23.display();
  enemy24.display();

  textSize(15);
  text("Score: "+score,hero.x+300,hero.y-220);

  if(score === 24){
	gameState = 2;
	
  }

  if(gameState === 2){
	score=25;
	timeEnd = Date.now();
	timeTaken = (timeEnd-timeStart)/1000;
	gameState = 3
	alert("you have taken "+timeTaken+" seconds to kill all the bugs!")
  }


}

