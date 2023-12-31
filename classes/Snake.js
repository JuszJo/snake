import EntityManager from "../Managers/EntityManager.js";
import components from "../components/components.js";

class Tail {
    constructor(width, height, head) {
        this.tail = new EntityManager().createEntity("tail")

        this.tail.head = head

        this.tail.addComponent(new components.Size(width, height))
        this.tail.addComponent(new components.Position(this.tail.head.prevPosition.x, this.tail.head.prevPosition.y))
        this.tail.addComponent(new components.Collision())
        this.tail.addComponent(new components.Tail())
    }
}

export default class Snake {
    constructor() {
        this.snake = new EntityManager().createEntity("snake")
        
        this.snake.addComponent(new components.Size(20, 20))
        this.snake.addComponent(new components.Position(380, 500))
        this.snake.addComponent(new components.Color("seagreen"))
        this.snake.addComponent(new components.Movement())
        this.snake.addComponent(new components.Collision())

        this.snakeTail = [this.snake]

        this.snake.instance = this
    }

    increaseSize() {
        this.snakeTail.unshift(
            new Tail(
                this.snakeTail[0].components.size.width, this.snakeTail[0].components.size.height,
                this.snakeTail[0]
            ).tail
        )
    }
}