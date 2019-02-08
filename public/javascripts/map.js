let canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);
console.log(playerInfo);

function drawImage(ctx){
    let img = new Image();
    img.src = '/images/gtasa.png';
    img.onload = function (){ ctx.drawImage(img, 0, 0); }
}

let ctx = canvas.getContext("2d");
drawImage(ctx);
