console.log(game);
game.width = 800;
game.height = 800;
const ctx = game.getContext("2d");
console.log(ctx);
ctx.fillStyle = "#101010";
ctx.fillRect(0, 0, game.width, game.height);
ctx.fillStyle = "#55ff55";
ctx.fillRect(0, 0, 100, 100);