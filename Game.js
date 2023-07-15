import EntityManager from "./Managers/EntityManager.js";
import SystemManager from "./Managers/SystemManager.js";
import Snake from "./classes/Snake.js";
import InputSystem from "./systems/InputSystem.js";

export default class Game {
    constructor() {
        this.game = Game.getProps()
        
        this.entityManager = new EntityManager()
        this.systemManager = new SystemManager()
        this.inputSystem = new InputSystem(this.systemManager)

        this.snake = new Snake().snake

        this.listenForKeyEvent()
    }

    listenForKeyEvent() {
        const entities = this.entityManager.getEntitiesWithComponents("position", "size", "movement")

        this.inputSystem.listen(entities)
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

        const collisionEntities = this.entityManager.getEntitiesWithComponents("position", "size", "movement", "collision")

        this.systemManager.systems.collisionSystem.checkWallCollision(collisionEntities)
    }

    start() {
        this.update()

        this.draw()

        requestAnimationFrame(this.start.bind(this))
    }
}