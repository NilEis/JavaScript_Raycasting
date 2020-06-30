/**
 * @file Stellt Konstanten für das Spiel zur verfügung
 * @module constants
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
 * @constant {number[]} map Das Spielfeld
 */
const map = [
    1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 2, 0, 0, 0, 1,
    1, 0, 0, 0, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1
];


const textureTable = [
    new Image()
];
textureTable[0].src = "Textures/uvCheck.jpg";

const blockTable = [{
        id: 0,
        color: [0, 0, 0],
        texture: null
    },
    {
        id: 1,
        color: [255, 255, 255],
        texture: null
    },
    {
        id: 2,
        color: [255, 0, 0],
        texture: textureTable[0]
    }
];
/**
 * @constant {number} sizeX Die Breite einer Reihe
 */
const sizeX = 9;
/**
 * @constant {number} sizeY Die Höhe einer Spalte
 */
const sizeY = 9;
/**
 * @constant {number} sizeM Die Gesamtgröße des Feldes
 */
const sizeM = sizeX * sizeY;
/**
 * @constant {number} sizeTX Die Breite einer Zelle
 */
const sizeTX = Math.round((WIDTH / 2) / sizeX);
/**
 * @constant {number} sizeTY Die Höhe einer Zelle
 */
const sizeTY = Math.round(HEIGHT / sizeY);