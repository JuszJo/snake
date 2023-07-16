import Game from "../Game.js";
import EntityManager from "../Managers/EntityManager.js";
import components from "../components/components.js";

let instance = null

export default class Apple {
    constructor() {
        if(instance && new Game().lose == false) return instance

        this.apple = new EntityManager().createEntity("apple")

        this.apple.addComponent(new components.Size(20, 20))
        this.apple.addComponent(new components.Position(300, 40))
        this.apple.addComponent(new components.Collision())

        instance = this
    }

    randomPosition() {
        return {
            x: Math.min(Math.max(Math.floor(Math.random() * 781), 0), 780),
            y: Math.min(Math.max(Math.floor(Math.random() * 581), 0), 580)
        }
    }

    alignToGrid(randomPosition) {
        if(randomPosition.x % 20 != 0) {
            randomPosition.x = randomPosition.x - (randomPosition.x % 20)
        }

        if(randomPosition.y % 20 != 0) {
            randomPosition.y = randomPosition.y - (randomPosition.y % 20)
        }
    }

    reset() {
        const randomPosition = this.randomPosition()

        this.alignToGrid(randomPosition)

        this.apple.components.position.x = randomPosition.x
        this.apple.components.position.y = randomPosition.y
    }
}