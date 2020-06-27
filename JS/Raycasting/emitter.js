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
        for (let i = -this.fov / 2; i < this.fov / 2; i += 0.8) {
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
            let closest = null;
            let cDist = Infinity;
            let cColorR = 255;
            let cColorG = 255;
            let cColorB = 255;
            let cImg = undefined;
            let cR;
            for (let j = 0; j < walls.length; j++) {
                const p = this.rays[i].collide(walls[j]);
                if (p) {
                    const _dist = euclideanDistance(this.pos.x, this.pos.y, p.x, p.y);
                    if (_dist < cDist) {
                        cDist = _dist;
                        closest = p.get();
                        cColorR = walls[j].r;
                        cColorG = walls[j].g;
                        cColorB = walls[j].b;
                        cImg = walls[j].img;
                        let c1 = mapValue(p.x, walls[j].start.x, walls[j].end.x, 0, 1);
                        let c2 = mapValue(p.y, walls[j].start.y, walls[j].end.y, 0, 1);
                        cR = c1 ? c1 : c2;
                    }
                }
                //c.fillCircle(p.x,p.y,6,"white");
            }
            if (closest) {
                c.line(this.pos.x, this.pos.y, closest.x, closest.y, "white");
                const a = Math.atan2(this.rays[i].dir.y, this.rays[i].dir.x) - Math.atan2(this.dir.y, this.dir.x);
                cDist *= Math.cos(a);
                const color = mapValue(cDist ** 2, 0, 512 ** 2, 1, 0);
                const h = clamp(mapValue(cDist * 2, 512 * 2, 0, 0, 512), 0, 512);
                const w = 512 / this.rays.length;
                if (!cImg)
                    c.fillRect(i * w + 512, 512 / 2 - h / 2, w, h, "rgb(" + color * cColorR + "," + color * cColorG + "," + color * cColorB + ")");
                if (cImg) {
                    const iX = cR * cImg.width;
                    const iY = 0;
                    const iW = cImg.width / this.rays.length;
                    const iH = cImg.height;
                    const _X = i * w + 512;
                    const _Y = 512 / 2 - h / 2;
                    c.drawSprite(cImg, iX, iY, iW, iH, _X, _Y, w, h);
                }
            }
        }
    }

    /**
     * Testet ob das Objekt mit einer Wand kollidiert
     * @return {boolean}
     */
    checkCollision() {
        for (let i = 0; i < walls.length; i++) {
            let d1 = euclideanDistance(this.pos.x, this.pos.y, walls[i].start.x, walls[i].start.y);
            let d2 = euclideanDistance(this.pos.x, this.pos.y, walls[i].end.x, walls[i].end.y);

            if (d1 + d2 >= walls[i].mag - 0.1 && d1 + d2 <= walls[i].mag + 0.1)
                return true;
        }
        return false;
    }
}