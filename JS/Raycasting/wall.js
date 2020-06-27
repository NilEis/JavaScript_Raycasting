/**
 * @file stellt eine Wandklasse zur verfügung
 * @example
 * var w = new wall(10,15,20,30,255,255,255);
 */
class wall {
    /**
     * Erzeugt eine Wand der gegebenen Maße mit der gegebenen Farbe
     * @param {number} x1 Die x-Startposition
     * @param {number} y1 Die y-Startposition
     * @param {number} x2 Die x-Endposition
     * @param {number} y2 Die y-Endposition
     * @param {number} [r=255] Der rote Farbanteil
     * @param {number} [g=255] Der grüne Farbanteil
     * @param {number} [b=255] Der blaue Farbanteil
     * @param {string|boolean} [img=false] Die Textur
     */
    constructor(x1, y1, x2, y2, r = 255, g = 255, b = 255, img = false) {
        this.start = new vector2D(x1, y1);
        this.end = new vector2D(x2, y2);
        this.r = r;
        this.g = g;
        this.b = b;
        if (img) {
            this.img = new Image();
            this.img.src = img;
        }
        this.mag = euclideanDistance(x1,y1,x2,y2);
    }

    /**
     * Die Methode zeichnet die Wand
     */
    draw() {
        c.line(this.start.x, this.start.y, this.end.x, this.end.y, "rgb(" + this.r + "," + this.g + "," + this.b + ")");
    }
}