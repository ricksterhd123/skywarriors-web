let canvas = document.createElement('canvas');
let hidden = false;
canvas.id = "map";
let ctx = canvas.getContext("2d");
let innerWidth = Math.max(window.innerWidth, 600);
let innerHeight = Math.max(window.innerHeight, 600);

if (innerWidth < innerHeight){
    canvas.width = window.innerWidth-100;
    canvas.height = canvas.width;
}else {
    canvas.height = window.innerHeight-100;
    canvas.width = canvas.height
}
document.body.appendChild(canvas);

var rgbToHex = function (rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

function drawPlayer(position, colour){
    ctx.fillStyle = "#FF0000" //rgbToHex(colour[0], colour[1], colour[2])
    ctx.fillRect(position.x-5, position.y-5, 10, 10);
}

let mX = 3000
let mY = 3000
function worldCoordsToCanvas(position){
    let width = canvas.width;
    let height = canvas.height;

    let x = (position[0] / mX) * (width*0.5) + width*0.5
    let y = (position[1] / mY) * (-height*0.5) + height*0.5
    //console.log(`(${x}, ${y})`);
    return {x: x, y: y};
}

function drawPlayers(playerInfo){
    let img = new Image();
    img.src = '/images/gtasa.png';
    img.onload = function (){
        if (hidden) {hideCanvas(false);}

        //ctx.fillRect(0, 0, 500, 500);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        for (let i = 0; i <= playerInfo.length - 1; i++){
            drawPlayer(worldCoordsToCanvas(playerInfo[i].position), playerInfo[i].colour);
        }
    }
}

function hideCanvas(bool){
    let c = document.getElementById('map');
    if (c && bool) {
        document.body.removeChild(c);
        hidden = true;
    } else if (!c && !bool) {
        canvas = document.createElement('canvas');
        canvas.id = "map";
        ctx = canvas.getContext("2d");
        canvas.width = 500;
        canvas.height = 500;
        document.body.appendChild(canvas);
        hidden = false;
    }
}
