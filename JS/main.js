/**
 * @file Beispiel für die Nutzung der "Engine".
 * @module Beispiel
 */
/**
 * @constant {number} WIDTH Die Anzahl aller Spalten
 */
const WIDTH = 1024;
/**
 * @constant {number} HEIGHT Die Anzahl aller Zeilen
 */
const HEIGHT = 512;
/**
 * @constant {number} TILESIZE Die Breite und Höhe jeder Zelle
 */
const TILESIZE = 1;
/**
 * @constant {number} FPS Die Anzahl der aktualisierungen pro Sekunde
 */
const FPS = 60;
/**
 * @constant {canvasClass} c Die canvasClass
 */
const c = new canvasClass("canvasID", "canvas", WIDTH * TILESIZE, HEIGHT * TILESIZE, "black");

detectSwipe("canvas", (el, direction) => {
    if (direction == "down" || direction == "up")
        key = direction == "down" ? "up" : "down";
    else
        key = direction;
});

//Leere die Konsole um einen besseren Überblick in dieser zu bekommen
console.clear();

var tickIntervall;

var _emitter;
var walls = [];

const mapX = 8;

const mapY = 8;

const mapS = 64;

const rand = 25;

const map = [
    1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1
];

/**
 * Setzt alles in den Startzustand
 */
function init() {
    c.cls();
    walls = [];
    setBounds();
    clearInterval(tickIntervall);
    addRect(rand, rand, WIDTH / 2 - 2 * rand, HEIGHT - 2 * rand, 25, 160, 50);
    /*for (let i = 0; i < 5; i++) {
        const x = random.getRandomInt(0, 512);
        const y = random.getRandomInt(0, 512);
        const w = random.getRandomInt(0, 512);
        const h = random.getRandomInt(0, 512);
        walls.push(new wall(x, y, w, h));
    }*/
    addRect(100, 100, 100, 100, 156, 321, 35);
    addRect(350, 300, 100, 150, 12, 15, 200);
    //walls.push(new wall(300, 200, 200, 200));
    //walls.push(new wall(30, 15, 300, 100));
    //walls.push(new wall(350, 15, 25, 400));
    //walls.push(new wall(500, 150, 400, 10));
    _emitter = new emitter(300, 300, 60);
    tickIntervall = setInterval(tick, 1000 / FPS);
}


/**
 * Aktualisiert und zeichnet alles
 */
function tick() {
    c.cls();
    c.fillRect(WIDTH / 2, HEIGHT / 2, WIDTH / 2, HEIGHT / 2, "grey");
    buttons();
    _emitter.draw();
    drawWalls();
}


init();