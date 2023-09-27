let canvas;
let ctx;
canvas = document.createElement("canvas");

ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 700;
document.body.appendChild(canvas);

let backgroundImage, carImage, car2Image, gameoverImage;
let gameover = false;
let score=0;
let carX=(canvas.width-48)/2;
let carY=canvas.height-60;

function generateRandomValue(min, max) {
    let randomNum = Math.floor(Math.random()*(max-min+1))+min;
    return randomNum;
}

let car2List=[];
let car2speed=1; // 내려오는 속도
function car2() {
    this.x =0;
    this.y =0;
    this.init= function() {
        this.y=0;
        this.x=generateRandomValue(120, 430);
        car2List.push(this);
    }
    this.update=function() {
        this.y +=car2speed;
    }
    this.checkHit=function() {
        if (this.y+44>=carY&&this.y-44<=carY&&this.x>=carX-28&&this.x<=carX+28) {
            gameover=true;
        }
    }

    this.destroy=function() {
        if(this.y>680){
            car2List.shift(this);
            score++;
        }
    }
}

let car2generate=250; // 생성되는 속도
function createCar2() {
    const interval = setInterval(function() {
        let c = new car2();
        c.init();
    },car2generate);
}

function loadImage() {
    backgroundImage = new Image();
    backgroundImage.src="images/road.png"

    carImage = new Image();
    carImage.src="images/car.png"

    car2Image = new Image();
    car2Image.src="images/car2.png"

    gameoverImage = new Image();
    gameoverImage.src="images/gameover.png"
}

let keysDown={};
function setupKeyboardListener() {
    document.addEventListener("keydown", function(Event) {
        keysDown[event.key] = true;
        console.log(keysDown);
    });
    document.addEventListener("keyup", function() {
        delete keysDown[event.key];
        console.log("삭제");
    });
}

let speed = 3;
function move() {
    if ("ArrowLeft" in keysDown) {
        carX -= speed;
    }
    if ("ArrowRight" in keysDown) {
        carX += speed;
    }
    if ("ArrowUp" in keysDown) {
        car2speed=car2speed+0.1;
    }
    if(carX<=120) {
        carX=120;
    }
    if(carX>=430) {
       carX=430;
    }

    for(let i=0; i<car2List.length;i++) {
        car2List[i].update();
        car2List[i].checkHit();
    }

    for(let i=0; i<car2List.length;i++) {
        car2List[i].destroy();
    }
}

function render() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(carImage, carX, carY);
    ctx.fillText(`SCORE:${score}               SPEED:${Math.ceil(car2speed*10)}km`,140,30)
    ctx.font="20px sans-serif";
    ctx.fillStyle="red";

    for ( let i=0; i<car2List.length; i++) {
        ctx.drawImage(car2Image, car2List[i].x,car2List[i].y);
    }
}

function main() {
    if (!gameover) {
        move();
        render();
        requestAnimationFrame(main);
    }
    else {
        ctx.drawImage(gameoverImage, 200, 150, 200, 200);
    }
}

loadImage();
setupKeyboardListener();
createCar2();
main();
