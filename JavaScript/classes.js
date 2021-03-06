class Materializer {
    target;
    activated;

    constructor(target) {
        this.target = target;
        this.activated = false;
    }

    activate() {
        this.activated = true;
    }

    materialize() {
        return this.activated ? this.target : undefined;
    }
}