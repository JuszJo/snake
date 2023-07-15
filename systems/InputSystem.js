export default class InputSystem {
    constructor(systemManager) {
        this.systemManager = systemManager
    }

    listen(entities) {
        addEventListener('keydown', e => {
            const key = e.key

            this.systemManager.systems.movementSystem.handleKeyDownEvent(key, entities)
        })
        
        addEventListener('keyup', e => {
            const key = e.key
            
            // this.systemManager.systems.movementSystem.handleKeyUpEvent(key, entities)
        })
    }
}