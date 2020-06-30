/**
 * @file stellt eine Emitterklasse / Spielerklasse zur verfügung
 * @example
 * const player = new emitter(100,100,45);
 */
class emitter {
    /**
     * Erzeugt ein Objekt der Klasse emitter an den gegebenen Koordinaten mit einem Sichtfeld des gegebenen Winkels
     * @param {number} x Die x-Startposition
     * @param {number} y Die y-Startposition
     * @param {number} fov Das Sichtfeld in Grad
     */
    constructor(x, y, fov) {
        this.pos = new vector2D(x, y);
        this.fov = fov;
        this.rays = [];
        this.o = 0;
        this.dir = vector2D.fromAngle(this.o);
        this.v = 5;
    }

    /**
     * Erzeugt / Aktualisiert die Sichtrays
     */
    setRays() {
        this.rays = [];
        for (let i = -this.fov / 2; i < this.fov / 2; i += 0.5) {
            this.rays.push(new ray(this.pos.x, this.pos.y, i + this.o));
        }
    }

    /**
     * Erzeugt einen neuen {@link vector2D|Richtungsvektor} mit der gegebenen Steigung
     * @param {number} a Der Winkel in Grad
     */
    setDir(a) {
        this.dir = vector2D.fromAngle(a);
    }

    /**
     * Zeichnet alles
     */
    draw() {
        this.setRays();
        c.fillCircle(this.pos.x, this.pos.y, 1, "white");
        for (let i = 0; i < this.rays.length; i++) {
            this.rays[i].draw();

        }
    }

    checkCollision() {
        const x = Math.floor(this.pos.x/sizeTX);
        const y = Math.floor(this.pos.y/sizeTY);
        console.log(y*sizeX+x);
        return map[y*sizeX+x] == 1 ? true : false;
    }
}