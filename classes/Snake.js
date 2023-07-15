import Game from "../Game.js";
import EntityManager from "../Managers/EntityManager.js";
import components from "../components/components.js";

let instance = null

export default class Snake {
    constructor() {
        if(instance && new Game().lose == false) return instance

        this.snake = new EntityManager().createEntity("snake")
        
        this.snake.addComponent(new components.Size(20, 20))
        this.snake.addComponent(new components.Position(300, 500))
        this.snake.addComponent(new components.Movement())
        this.snake.addComponent(new components.Collision())

        instance = this
    }

    increaseSize() {
        this.snake.components.size.width += 20
    }
}