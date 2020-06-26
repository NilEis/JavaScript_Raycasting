class emitter {
    constructor(x, y, fov) {
        this.pos = new vector2D(x, y);
        this.fov = fov;
        this.rays = [];
        this.o = 0;
        this.dir = vector2D.fromAngle(this.o);
    }

    setRays() {
        this.rays = [];
        for (let i = -this.fov / 2; i < this.fov / 2; i += 1) {
            this.rays.push(new ray(this.pos.x, this.pos.y, i + this.o));
        }
    }

    setDir(a) {
        this.dir = vector2D.fromAngle(a);
    }

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
                const h = clamp(mapValue(cDist * 2, 512 * 2, 0, 0, 512),0,512);
                const w = 512 / this.rays.length;
                if (!cImg)
                    c.fillRect(i * w + 512, 512 / 2 - h / 2, w, h, "rgb(" + color * cColorR + "," + color * cColorG + "," + color * cColorB + ")");
                if (cImg) {
                    const iX = Math.round(cR * cImg.width);
                    const iY = Math.round(0);
                    const iW = Math.round(cImg.width / this.rays.length);
                    const iH = Math.round(cImg.height);
                    const _X = Math.round(i * w + 512);
                    const _Y = Math.round(512 / 2 - h / 2);
                    c.drawSprite(cImg, iX, iY, iW, iH, _X, _Y, w, h);
                }
            }
        }
    }
}