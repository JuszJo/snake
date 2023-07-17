import EntityManager from "./Managers/EntityManager.js";
import EventManager from "./Managers/EventManager.js";
import SystemManager from "./Managers/SystemManager.js";
import Apple from "./classes/Apple.js";
import Score from "./classes/Score.js";
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

        this.score = new Score()
        this.snake = new Snake()
        this.apple = new Apple()

        this.lose = false

        this.lastime = null

        this.buffer = 10
        this.framesPassed = 0

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

        const scoreEntities = this.entityManager.getEntitiesWithComponents("score")
        
        this.systemManager.systems.renderSystem.render(entities)

        this.systemManager.systems.renderSystem.renderScore(scoreEntities)
    }

    update() {
        const movementEntities = this.entityManager.getEntitiesWithComponents("position", "size", "movement")

        const tailEntities = this.entityManager.getEntitiesWithComponents("position", "size", "tail")

        this.systemManager.systems.movementSystem.move(movementEntities)

        this.systemManager.systems.movementSystem.moveTail(tailEntities)

        const collisionEntities = this.entityManager.getEntitiesWithComponents("position", "size", "collision")

        this.systemManager.systems.collisionSystem.checkAppleCollision(collisionEntities)

        this.systemManager.systems.collisionSystem.checkSelfCollision(collisionEntities)

        this.systemManager.systems.collisionSystem.checkWallCollision(collisionEntities)

        this.eventManager.listen()
    }

    startLoop() {
        requestAnimationFrame(this.start.bind(this))
    }

    start(delta) {
        if(!this.lastime) this.lastime = delta
        
        const fps = delta - this.lastime

        this.lastime = delta

        // console.log(1 / fps * 1000);
        if(this.framesPassed % this.buffer == 0) {
            if(!this.lose) {
                this.update()
            }
    
            this.draw()

            this.framesPassed = 0
        }

        this.framesPassed++

        requestAnimationFrame(this.start.bind(this))
    }

    restart() {
        this.entityManager.entities = {}

        new Score()
        new Snake()
        new Apple()

        this.lose = false
    }

    end() {
        this.lose = true

        setTimeout(() => {
            this.restart()
        }, 2000)
    }
}