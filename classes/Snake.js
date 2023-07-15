import EntityManager from "../Managers/EntityManager.js";
import components from "../components/components.js";

export default class Snake {
    constructor() {
        this.snake = new EntityManager().createEntity("snake")
        
        this.snake.addComponent(new components.Size(20, 20))
        this.snake.addComponent(new components.Position(300, 300))
        this.snake.addComponent(new components.Movement())
        this.snake.addComponent(new components.Collision())
    }
}