function Room(x, y, walls){
    this.x = x;
    this.y = y;
    this.visited = false;
}

function Corridor(x, y, type, visited){
    this.x = x;
    this.y = y;
    this.type = type; //"horizontal", "vertical", "corner"
    this.visited = false;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var map = [[], []];

function generatePath(){
    console.log("--------------- GEN: GENERATING PATH... ---------------");
    for(var i = 0; i < 3; i++){
        var x = randomInt(0, 4);
        var y = randomInt(0, 4);
        var room = new Room(x, y, false);
        map[0].push(room);
    }

    var corridors = findPathBetweenRooms(map[0][0], map[0][1]).concat(findPathBetweenRooms(map[0][1], map[0][2]).concat(findPathBetweenRooms(map[0][2], map[0][0])));
    map[1] = corridors;
    console.log(map);
    deleteOverlappingAreas();

    return map;
}

function findPathBetweenRooms(a, b){
    var travelX = b.x - a.x;
    var travelY = b.y - a.y;
    var path = [];
    console.log("travelX: " + travelX);
    console.log("travelY: " + travelY);

    for(var i = 0; i < Math.abs(travelX); i++){
        if(travelX > 0){
            var corridor = new Corridor(a.x + i, a.y, "horizontal", false);
            path.push(corridor);
        } else {
            var corridor = new Corridor(a.x - i, a.y, "horizontal", false);
            path.push(corridor);
        }
    }

    for(var i = 0; i < Math.abs(travelY); i++){
        if(travelY > 0){
            var corridor = new Corridor(b.x, a.y + i, "vertical", false);
            path.push(corridor);
        } else {
            var corridor = new Corridor(b.x, a.y - i, "vertical", false);
            path.push(corridor);
        }
    }

    return path;
}

function deleteOverlappingAreas(){
    console.log("--------------- GEN: CHECKING FOR OVERLAP... ---------------");
    for(var i = 0; i < map[0].length; i++){
        for(var j = 0; j < map[1].length; j++){
            if(map[0][i].x == map[1][j].x && map[0][i].y == map[1][j].y){
                map[1].splice(j, 1);
                console.log("spliced corridor");
            }
        }
    }
}