class TargetingSolution {
    constructor(config) {
        this.x = String(config.x);
        this.y = String(config.y);
        this.z = String(config.z);
    }

    target() {
        return "(" + this.x + ", " + this.y + ", " + this.z + ")";
    }
}