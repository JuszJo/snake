import MovementSystem from "../systems/MovementSystem.js"
import RenderSystem from "../systems/renderSystem.js"

export default class SystemManager {
    constructor() {
        this.systems = {
            renderSystem: new RenderSystem(),
            movementSystem: new MovementSystem()
        }
    }
}