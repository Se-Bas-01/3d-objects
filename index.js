const BACKGROUND = "#101010";
const FOREGROUND = "#55ff55";

console.log(game);
game.width = 800;
game.height = 800;
const ctx = game.getContext("2d");
console.log(ctx);

function clear() {
    ctx.fillStyle = BACKGROUND;
    ctx.fillRect(0, 0, game.width, game.height);
};

function point({x, y}) {
    const s = 20;
    ctx.fillStyle = FOREGROUND;
    ctx.fillRect(x - s/2, y - s/2, s, s);
};

function screen(p) {
    return {
        x: (p.x + 1)/2*game.width,
        y: (1 - (p.x + 1))/2*game.height,
    }
}

function project({x, y, z}) {
  return {
    x: x/z,
    y: y/z,
  }  
}

clear();
point(screen(project({x: 0, y: 0, z: 0})));