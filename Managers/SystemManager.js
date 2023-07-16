import CollisionSystem from "../systems/CollisionSystem.js"
import MovementSystem from "../systems/MovementSystem.js"
import RenderSystem from "../systems/renderSystem.js"
import EventManager from "./EventManager.js"

export default class SystemManager {
    constructor(eventManager) {
        this.eventManager = eventManager

        this.systems = {
            renderSystem: new RenderSystem(this.eventManager),
            movementSystem: new MovementSystem(this.eventManager),
            collisionSystem: new CollisionSystem(this.eventManager)
        }
    }
}