import Game from "../Game.js";
import EntityManager from "../Managers/EntityManager.js";
import components from "../components/components.js";

let instance = null

class Tail {
    constructor(width, height, x, y, prevTail) {
        this.tail = new EntityManager().createEntity("tail")

        this.tail.addComponent(new components.Size(width, height))
        this.tail.addComponent(new components.Position(x, y))        
        this.tail.addComponent(new components.Tail(prevTail))
    }
}

export default class Snake {
    constructor() {
        if(instance && new Game().lose == false) return instance

        this.snake = new EntityManager().createEntity("snake")
        
        this.snake.addComponent(new components.Size(20, 20))
        this.snake.addComponent(new components.Position(300, 500))
        this.snake.addComponent(new components.Movement())
        this.snake.addComponent(new components.Collision())

        this.snakeTail = [this.snake]

        instance = this
    }

    increaseSize() {
        if(this.snake.components.movement.currentDirection == "up") {
            // this.tail = new Tail(
            //     this.snakeTail[0].components.size.width, this.snakeTail[0].components.size.height,
            //     this.snakeTail[0].components.position.x, (this.snakeTail[0].components.position.y + this.snakeTail[0].components.size.height),
            //     this.snakeTail[0]
            // )

            // this.snakeTail.unshift(this.tail)
            // this.tail = new Tail(
            //     this.snakeTail.components.size.width, this.snakeTail.components.size.height,
            //     this.snakeTail.components.position.x, (this.snakeTail.components.position.y + this.snakeTail.components.size.height),
            //     this.snakeTail
            // )

            // this.head = this.tail
        }
        if(this.snake.components.movement.currentDirection == "down") {

        }
        if(this.snake.components.movement.currentDirection == "left") {

        }
        if(this.snake.components.movement.currentDirection == "right") {

        }
        // this.snake.components.size.width += 20
    }
}