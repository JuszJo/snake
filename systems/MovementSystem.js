export default class MovementSystem {
    constructor() {
        
    }

    handleKeyDownEvent(key, entities) {
        for(let i = 0; i < entities.length; ++i) {
            const currentEntity = entities[i]

            if(key == "w" && !(currentEntity.components.movement.currentDirection == "down")) {
                currentEntity.components.movement.currentDirection = "up"
            }
            if(key == "s" && !(currentEntity.components.movement.currentDirection == "up")) {
                currentEntity.components.movement.currentDirection = "down"
            }
            if(key == "a" && !(currentEntity.components.movement.currentDirection == "right")) {
                currentEntity.components.movement.currentDirection = "left"
            }
            if(key == "d" && !(currentEntity.components.movement.currentDirection == "left")) {
                currentEntity.components.movement.currentDirection = "right"
            }
        }
    }

    move(entities) {
        for(let i = 0; i < entities.length; ++i) {
            const currentEntity = entities[i]

            currentEntity.prevPosition = {
                x: currentEntity.components.position.x,
                y: currentEntity.components.position.y
            }

            if(currentEntity.components.movement.currentDirection == "up") {
                MovementSystem.subPositionY(currentEntity, 20)
            }
            if(currentEntity.components.movement.currentDirection == "down") {
                MovementSystem.addPositionY(currentEntity, 20)
            }
            if(currentEntity.components.movement.currentDirection == "left") {
                MovementSystem.subPositionX(currentEntity, 20)
            }
            if(currentEntity.components.movement.currentDirection == "right") {
                MovementSystem.addPositionX(currentEntity, 20)
            }
        }
    }

    moveTail(entities) {
        for(let i = 0; i < entities.length; ++i) {
            const currentEntity = entities[i]

            currentEntity.prevPosition = {
                x: currentEntity.components.position.x,
                y: currentEntity.components.position.y,
            }

            currentEntity.components.position.x = currentEntity.head.prevPosition.x
            currentEntity.components.position.y = currentEntity.head.prevPosition.y
        }
    }

    static setPositionX(currentEntity, newPosition) {
        currentEntity.components.position.x = newPosition
    }

    static setPositionY(currentEntity, newPosition) {
        currentEntity.components.position.y = newPosition
    }

    static subPositionX(currentEntity, amount) {
        currentEntity.components.position.x -= amount
    }
    
    static subPositionY(currentEntity, amount) {
        currentEntity.components.position.y -= amount
    }

    static addPositionX(currentEntity, amount) {
        currentEntity.components.position.x += amount
    }
    
    static addPositionY(currentEntity, amount) {
        currentEntity.components.position.y += amount
    }

    static changeState(currentEntity, state) {
        currentEntity.components.position.state = state
    }
}