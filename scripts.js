function draw_circle(ctx, radius, symbol) {
    var width_middle = window.innerWidth / 2;
    var height_middle = window.innerHeight / 2;
    for (var i = 0; i < 100; i++) {
        var angle = Math.random() * Math.PI * 2;
        x = Math.sin(angle) * radius + width_middle;
        y = Math.cos(angle) * radius + height_middle;
        ctx.fillStyle = "#00F";
        ctx.font = "12pt Georgia";
        ctx.fillText(symbol, x, y)
        ctx.save();
    }
}

function draw() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    draw_circle(ctx, 100, '-');
    draw_circle(ctx, 200, '*');
    draw_circle(ctx, 400, '#');
}

function init() {
    setInterval(draw, 60);
}
init();
