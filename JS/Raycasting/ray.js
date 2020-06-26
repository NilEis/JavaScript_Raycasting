class ray {
    constructor(x, y, a, color = "white") {
        this.pos = new vector2D(x, y);
        this.dir = vector2D.fromAngle(a);
        this.color = color;
        this.dir.normalize();
    }
    draw() {
        this.dir.normalize();
        const LENGTH = 10;
        c.line(this.pos.x, this.pos.y, this.pos.x + this.dir.x * LENGTH, this.pos.y + this.dir.y * LENGTH, this.color);
    }

    lookAt(x, y) {
        this.dir.x = x - this.pos.x;
        this.dir.y = y - this.pos.y;
        this.dir.normalize();
    }

    collide(pWall) {
        //Wand Koordinaten
        const x1 = pWall.start.x;
        const y1 = pWall.start.y;
        const x2 = pWall.end.x;
        const y2 = pWall.end.y;
        //Ray Koordinaten
        this.dir.mul(10000);
        const x3 = this.pos.x;
        const y3 = this.pos.y;
        const x4 = this.pos.x + this.dir.x;
        const y4 = this.pos.y + this.dir.y;

        const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

        if (den == 0)
            return false;

        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;

        const u = -(((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den);

        if (t > 0 && t < 1 && u > 0) {
            const px = x1 + t * (x2 - x1);
            const py = y1 + t * (y2 - y1);
            return new vector2D(px, py);
        } else
            return false;
    }
}