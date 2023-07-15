class Size {
    constructor(width, height) {
        this.name = "size"
        this.width = width
        this.height = height
    }
}

class Position {
    constructor(x, y) {
        this.name = "position"
        this.x = x
        this.y = y
    }
}

class Collision {
    constructor() {
        this.name = "collision"
    }
}

class Movement {
    constructor() {
        this.name = "movement"
        this.currentDirection = "up"
        // this.invalidDirection = "down"
        // this.controls = {
        //     up: true,
        //     down: false,
        //     left: false,
        //     right: false,
        // }
    }
}

export default {
    Size,
    Position,
    Collision,
    Movement
}