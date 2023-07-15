export default class InputSystem {
    constructor(systemManager, entityManager) {
        this.systemManager = systemManager
        this.entityManager = entityManager
    }

    listen() {
        addEventListener('keydown', e => {
            const key = e.key

            const entities = this.entityManager.getEntitiesWithComponents("position", "size", "movement")

            this.systemManager.systems.movementSystem.handleKeyDownEvent(key, entities)
        })
        
        addEventListener('keyup', e => {
            const key = e.key
            
            // this.systemManager.systems.movementSystem.handleKeyUpEvent(key, entities)
        })
    }
}