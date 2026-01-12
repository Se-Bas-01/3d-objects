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
}

function point(x, y) {
    ctx.fillStyle = FOREGROUND;
    ctx.fillRect(0, 0, 100, 100);
}