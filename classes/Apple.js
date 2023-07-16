import Game from "../Game.js";
import EntityManager from "../Managers/EntityManager.js";
import components from "../components/components.js";

let instance = null

export default class Apple {
    constructor() {
        if(instance && new Game().lose == false) return instance

        this.apple = new EntityManager().createEntity("apple")

        this.apple.addComponent(new components.Size(10, 10))
        this.apple.addComponent(new components.Position(300, 50))
        this.apple.addComponent(new components.Collision())

        instance = this
    }

    randomPosition() {
        return {
            x: Math.min(Math.max(Math.floor(Math.random() * 750), 0), 750),
            y: Math.min(Math.max(Math.floor(Math.random() * 550), 0), 550)
        }
    }

    reset() {
        const randomPosition = this.randomPosition()

        this.apple.components.position.x = randomPosition.x
        this.apple.components.position.y = randomPosition.y
    }
}