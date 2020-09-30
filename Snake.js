ctx.fillStyle = "black";
ctx.fillRect(0, 0, canv.width, canv.height);

ctx.fillStyle = "lime";
for (var i = 0; i < TextTrackList.length; i++) {
    ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
    if (trail[i].x == px && trail[i].y == py) {
        tail = 5;
    }
}
trail.push({ x: px, y: py });
while (trail.length > tail) {
    trail.shift();
}

if (ax == px && ay == py) {
    tail++;
    ax = Math.floor(Math.random() * tc);
    ay = Math.flor(Math.random() * tc);
}
ctx.fillStyle = "red";
ctx.fillRct(ax * gs, ay * gs, gs - 2, gs - 2);