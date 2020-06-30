/**
 * @file Stellt Funktionen zum erstellen von und interagieren mit dem Raycaster
 * @module RaycastFunctions.js
 */

/**
 * Die Funktion, die die Tasteneingaben verarbeitet
 */
function buttons() {
    const v = _emitter.v;
    const vT = 5;
    const dir = vector2D.mul(_emitter.dir, v);
    switch (key) {
        case "up":
            _emitter.pos.x += dir.x;
            if (_emitter.checkCollision())
                _emitter.pos.x -= dir.x;
            _emitter.pos.y += dir.y;
            if (_emitter.checkCollision())
                _emitter.pos.y -= dir.y;
            break;
        case "down":
            _emitter.pos.x -= dir.x;
            if (_emitter.checkCollision())
                _emitter.pos.x += dir.x;
            _emitter.pos.y -= dir.y;
            if (_emitter.checkCollision())
                _emitter.pos.y += dir.y;
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
}

function drawMap() {
    c.fillRect(WIDTH / 2, HEIGHT / 2, WIDTH / 2, HEIGHT / 2, "grey");
    c.fillArray1D(map, sizeX, ["black", "white"], (c.width / 2) / sizeX, c.height / sizeY);
}