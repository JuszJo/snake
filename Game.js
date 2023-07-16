import EntityManager from "./Managers/EntityManager.js";
import EventManager from "./Managers/EventManager.js";
import SystemManager from "./Managers/SystemManager.js";
import Apple from "./classes/Apple.js";
import Snake from "./classes/Snake.js";
import InputSystem from "./systems/InputSystem.js";

let instance = null

export default class Game {
    constructor() {
        if(instance) return instance

        this.game = Game.getProps()

        this.eventManager = new EventManager()
        this.entityManager = new EntityManager()
        this.systemManager = new SystemManager(this.eventManager)

        this.inputSystem = new InputSystem(this.systemManager, this.entityManager)
        
        this.inputSystem.listen()

        this.snake = new Snake(),
        this.apple = new Apple()

        this.lose = false

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

        this.eventManager.listen()
    }

    start() {
        this.update()

        this.draw()

        requestAnimationFrame(this.start.bind(this))
    }

    restart() {
        new Snake()

        this.lose = false
    }

    end() {
        this.lose = true

        setTimeout(() => {
            this.restart()
        }, 2000)
    }
}