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
    }
}

class Tail {
    constructor(prevTail) {
        this.name = "tail"
        this.prevTail = prevTail
    }
}

class Score {
    constructor() {
        this.name = "score"
        this.value = 0
    }
}

class Color {
    constructor(value) {
        this.name = "color"
        this.value = value
    }
}

export default {
    Size,
    Position,
    Collision,
    Movement,
    Tail,
    Score,
    Color
}