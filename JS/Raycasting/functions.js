function drawWalls() {
    for (let i = 0; i < walls.length; i++)
        walls[i].draw();
}

function setBounds() {
    walls.push(new wall(0, 0, 0, 512, 255, 0, 0));
    walls.push(new wall(0, 0, 512, 0));
    walls.push(new wall(512, 512, 0, 512));
    walls.push(new wall(512, 512, 512, 0));
}

function addRect(x, y, w, h, r, g, b) {
    walls.push(new wall(x, y, x + w, y, r, g, b));
    walls.push(new wall(x, y, x, y + h, r, g, b));
    walls.push(new wall(x, y + h, x + w, y + h, r, g, b));
    walls.push(new wall(x + w, y + h, x + w, y, r, g, b));
}

function addTextRect(x, y, w, h, r, g, b, imgSrc) {
    walls.push(new wall(x, y, x + w, y, r, g, b, imgSrc));
    walls.push(new wall(x, y, x, y + h, r, g, b, imgSrc));
    walls.push(new wall(x, y + h, x + w, y + h, r, g, b, imgSrc));
    walls.push(new wall(x + w, y + h, x + w, y, r, g, b, imgSrc));
}

function buttons() {
    const v = 5;
    const vT = 5;
    switch (key) {
        case "up":
            _emitter.pos.add(vector2D.mul(_emitter.dir, v));
            break;
        case "down":
            _emitter.pos.sub(vector2D.mul(_emitter.dir, v));
            break;
        case "left":
            _emitter.o -= vT;
            _emitter.setRays();
            _emitter.setDir(_emitter.o);
            break;
        case "right":
            _emitter.o += vT;
            _emitter.setRays();
            _emitter.setDir(_emitter.o);
            break;
    }
    key = "";
}