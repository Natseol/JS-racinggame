let canvas;
let ctx;
canvas = document.createElement("canvas");

ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 700;
document.body.appendChild(canvas);

let backgroundImage, carImage, car2Image, gameoverImage;
let gameover = false;
let carX=(canvas.width-48)/2;
let carY=canvas.height-60;

function generateRandomValue(min, max) {
    let randomNum = Math.floor(Math.random()*(max-min+1))+min;
    return randomNum;
}

let car2List=[];
let car2speed=3; // 내려오는 속도
function car2() {
    this.x =0;
    this.y =0;
    this.init= function() {
        this.y=0;
        this.x=generateRandomValue(120, 452);
        car2List.push(this);
    }
    this.update=function() {
        this.y +=car2speed;
    }
    this.checkHit=function() {
        if (this.y>=carY&&this.x>=carX+4&&this.x<=carX+40) {
            gameover=true;
        }
    }

    this.destroy=function() {
        if(this.y>700){
            // car2List.pop(this);
        }
    }

}

let car2generate=300; // 생성되는 속도
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

let speed = 2;
function move() {
    if ("ArrowLeft" in keysDown) {
        carX -= speed;
    }
    if ("ArrowRight" in keysDown) {
        carX += speed;
    }
    if(carX<=0) {
        carX=0;
    }
    if(carX>=canvas.width-48) {
       carX=canvas.width-48;
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
