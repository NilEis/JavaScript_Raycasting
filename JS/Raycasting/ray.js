/**
 * @file Stellt die Rayklasse zur verfügung
 * @example
 * var ray_ = new ray(10,25,30);
 */
class ray {
    /**
     * 
     * @param {number} x Die x-Startposition
     * @param {number} y Die y-Startposition
     * @param {number} a Der Steigungswinkel in Grad
     * @param {string} [color="white"] Die Farbe des Rays
     */
    constructor(x, y, a, color = "white") {
        this.pos = new vector2D(x, y);
        this.dir = vector2D.fromAngle(a);
        this.color = color;
        this.dir.normalize();
    }

    /**
     * Zeichnet den Ray
     */
    draw() {
        this.dir.normalize();
        const LENGTH = 10;
        c.line(this.pos.x, this.pos.y, this.pos.x + this.dir.x * LENGTH, this.pos.y + this.dir.y * LENGTH, this.color);
    }

    /**
     * Ändert die Richtung des Rays so, dass dieser auf die gegebenen Koordinaten zeigt
     * @param {number} x Die x-Zielposition
     * @param {number} y Die y-Zielposition
     */
    lookAt(x, y) {
        this.dir.x = x - this.pos.x;
        this.dir.y = y - this.pos.y;
        this.dir.normalize();
    }
}