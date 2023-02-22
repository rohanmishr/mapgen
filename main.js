const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var path = generatePath();

//draw rooms
for(var i = 0; i<path[0].length; i++){
    ctx.fillStyle = "blue";
    ctx.fillRect(path[0][i].x * 100, path[0][i].y * 100, 100, 100);
}

//draw corridors
for(var i = 0; i<path[1].length; i++){
    ctx.fillStyle = "red";
    if(path[1][i].type == "horizontal"){
        ctx.fillRect(path[1][i].x * 100, path[1][i].y * 100 + 25, 100, 50);
    } else if(path[1][i].type == "vertical"){
        ctx.fillRect(path[1][i].x * 100 + 25, path[1][i].y * 100, 50, 100);
    } else if(path[1][i].type == "corner"){
        ctx.fillRect(path[1][i].x * 100 + 25, path[1][i].y * 100 + 25, 50, 50);
    }
}