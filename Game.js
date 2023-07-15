import EntityManager from "./Managers/EntityManager.js";
import SystemManager from "./Managers/SystemManager.js";
import Apple from "./classes/Apple.js";
import Snake from "./classes/Snake.js";
import InputSystem from "./systems/InputSystem.js";

let instance = null

export default class Game {
    constructor() {
        if(instance) return this

        this.game = Game.getProps()
        
        this.entityManager = new EntityManager()
        this.systemManager = new SystemManager()
        this.inputSystem = new InputSystem(this.systemManager, this.entityManager)

        this.inputSystem.listen()

        this.snake = new Snake().snake
        this.apple = new Apple().apple

        instance = this
    }

    static getProps() {
        const canvas = document.querySelector('canvas')

        const canvasWidth = 800
        const canvasHeight = 600

        canvas.width = canvasWidth
        canvas.height = canvasHeight

        const drawingSurface = canvas.getContext('2d')

        return {
            canvas,
            drawingSurface
        }
    }

    draw() {
        const entities = this.entityManager.getEntitiesWithComponents("position", "size")

        this.systemManager.systems.renderSystem.render(entities)
    }

    update() {
        const movementEntities = this.entityManager.getEntitiesWithComponents("position", "size", "movement")

        this.systemManager.systems.movementSystem.move(movementEntities)

        const collisionEntities = this.entityManager.getEntitiesWithComponents("position", "size", "collision")

        this.systemManager.systems.collisionSystem.checkAppleCollision(collisionEntities)

        this.systemManager.systems.collisionSystem.checkWallCollision(collisionEntities)
    }

    start() {
        this.update()

        this.draw()

        requestAnimationFrame(this.start.bind(this))
    }

    restart() {
        this.snake = new Snake().snake
    }

    end() {
        console.log("lose");

        setTimeout(() => {
            this.restart()
        }, 3000)
    }
}