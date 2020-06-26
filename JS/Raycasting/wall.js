class wall {
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
    }

    draw() {
        c.line(this.start.x, this.start.y, this.end.x, this.end.y, "rgb(" + this.r + "," + this.g + "," + this.b + ")");
    }
}