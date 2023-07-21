import EntityManager from "../Managers/EntityManager.js";
import components from "../components/components.js";

export default class Apple {
    constructor() {
        this.apple = new EntityManager().createEntity("apple")

        this.apple.addComponent(new components.Size(20, 20))
        this.apple.addComponent(new components.Position(380, 40))
        this.apple.addComponent(new components.Color("red"))
        this.apple.addComponent(new components.Collision())

        this.apple.instance = this
    }

    randomPosition() {
        return {
            x: Math.min(Math.max(Math.floor(Math.random() * 781), 0), 800),
            y: Math.min(Math.max(Math.floor(Math.random() * 581), 0), 600)
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

    checkFreePosition(randomPosition, tails) {
        return tails.every(tail => !(tail.components.position.x == randomPosition.x && tail.components.position.y == randomPosition.y));
    }

    resetTillSpaceFound(tails) {
        let randomPosition = this.randomPosition()

        this.alignToGrid(randomPosition)

        let freePosition = false

        while(!freePosition) {
            freePosition = this.checkFreePosition(randomPosition, tails)
            
            if(freePosition == false) {
                randomPosition = this.randomPosition()

                this.alignToGrid(randomPosition)
            }
            else {
                this.apple.components.position.x = randomPosition.x
                this.apple.components.position.y = randomPosition.y
            }
        }
    }
}