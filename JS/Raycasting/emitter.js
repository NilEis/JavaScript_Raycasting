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
        for (let i = -this.fov / 2; i < this.fov / 2; i += 1) {
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
            const rayPos = this.rays[i].dir.get();
            const pPos = this.pos.get();
            let x = Math.floor(this.pos.x / sizeTX);
            let y = Math.floor(this.pos.y / sizeTY);
            let tmp = pPos.get();
            for (let j = 1; map[y * sizeX + x] == 0; j++) {
                tmp.add(rayPos);
                x = Math.floor(tmp.x / sizeTX);
                y = Math.floor(tmp.y / sizeTY);
            }
            const an = Math.atan2(this.rays[i].dir.y, this.rays[i].dir.x) - Math.atan2(this.dir.y, this.dir.x);
            const h = euclideanDistance(this.pos.x, this.pos.y, tmp.x, tmp.y) * Math.cos(an);
            const cW = (c.width / 2) / this.rays.length;
            const cH = mapValue(h, 0, Math.sqrt(2 * (512 ** 2)), 512, 0);
            c.fillRect((c.width / 2) + i * cW, c.height / 2 - cH / 2, cW, cH, "white");
            c.line(this.pos.x, this.pos.y, tmp.x, tmp.y, "red");
        }
    }

    checkCollision() {
        const x = Math.floor(this.pos.x / sizeTX);
        const y = Math.floor(this.pos.y / sizeTY);
        return map[y * sizeX + x] == 1 ? true : false;
    }
}