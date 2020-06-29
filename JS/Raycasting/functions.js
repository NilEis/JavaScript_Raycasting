/**
 * @file Stellt Funktionen zum erstellen von und interagieren mit dem Raycaster
 * @module RaycastFunctions.js
 */
/**
 * Zeichnet alle Wände
 */
function drawWalls() {
    for (let i = 0; i < walls.length; i++)
        walls[i].draw();
}

/**
 * Erstellt die äußeren Wände
 */
function setBounds() {
    walls.push(new wall(0, 0, 0, 512, 255, 0, 0));
    walls.push(new wall(0, 0, 512, 0));
    walls.push(new wall(512, 512, 0, 512));
    walls.push(new wall(512, 512, 512, 0));
}

/**
 * Erzeugt ein Rechteck aus Wänden mit den gegebenen Maßen und in der gegebenen Farbe
 * @param {number} x Die x-Startposition
 * @param {number} y Die y-Startposition
 * @param {number} w Die Breite
 * @param {number} h Die Höhe
 * @param {number} r Der Anteil an roter Farbe (0-255)
 * @param {number} g Der Anteil an grüner Farbe (0-255)
 * @param {number} b Der Anteil an blauer Farbe
 */
function addRect(x, y, w, h, r, g, b) {
    walls.push(new wall(x, y, x + w, y, r, g, b));
    walls.push(new wall(x, y, x, y + h, r, g, b));
    walls.push(new wall(x, y + h, x + w, y + h, r, g, b));
    walls.push(new wall(x + w, y + h, x + w, y, r, g, b));
}

/**
 * Erzeugt ein Rechteck aus Wänden mit den gegebenen Maßen und in der gegebenen Farbe, die allerding durch die gegebene Textur ünerzeichnet wird
 * @param {number} x Die x-Startposition
 * @param {number} y Die y-Startposition
 * @param {number} w Die Breite
 * @param {number} h Die Höhe
 * @param {number} r Der Anteil an roter Farbe (0-255)
 * @param {number} g Der Anteil an grüner Farbe (0-255)
 * @param {number} b Der Anteil an blauer Farbe
 * @param {string} imgSrc Der Pfad zur Textur
 */
function addTextRect(x, y, w, h, r, g, b, imgSrc) {
    walls.push(new wall(x, y, x + w, y, r, g, b, imgSrc));
    walls.push(new wall(x, y, x, y + h, r, g, b, imgSrc));
    walls.push(new wall(x, y + h, x + w, y + h, r, g, b, imgSrc));
    walls.push(new wall(x + w, y + h, x + w, y, r, g, b, imgSrc));
}

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