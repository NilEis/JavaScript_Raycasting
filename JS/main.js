/**
 * @file Beispiel für die Nutzung der "Engine".
 * @module Beispiel
 */

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
//console.clear();

/**
 * @var {number} tickIntervall Die Variabel in der der Intervall gespeichert wird
 */
var tickIntervall;

/**
 * @var {emitter} _emitter Wird als Emitter/ Spieler in {@link init} initialisiert
 */
var _emitter;

/**
 * Setzt alles in den Startzustand
 */
function init() {
    c.cls();
    _emitter = new emitter(300, 300, 60);
    tickIntervall = setInterval(tick, 1000 / FPS);
}


/**
 * Aktualisiert und zeichnet alles
 */
function tick() {
    c.cls();
    drawMap();
    buttons();
    _emitter.draw();
}


init();