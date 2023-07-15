export default class MovementSystem {
    constructor() {
        
    }

    handleKeyDownEvent(key, entities) {
        for(let i = 0; i < entities.length; ++i) {
            const currentEntity = entities[i]

            if(key == "w" && !(currentEntity.components.movement.currentDirection == "down")) {
                currentEntity.components.movement.currentDirection = "up"
                // currentEntity.components.movement.invalidDirection = "down"
            }
            if(key == "s" && !(currentEntity.components.movement.currentDirection == "up")) {
                currentEntity.components.movement.currentDirection = "down"
                // currentEntity.components.movement.invalidDirection = "up"
            }
            if(key == "a" && !(currentEntity.components.movement.currentDirection == "right")) {
                currentEntity.components.movement.currentDirection = "left"
                // currentEntity.components.movement.invalidDirection = "right"
            }
            if(key == "d" && !(currentEntity.components.movement.currentDirection == "left")) {
                currentEntity.components.movement.currentDirection = "right"
                // currentEntity.components.movement.invalidDirection = "left"
            }
        }
    }

    // handleKeyUpEvent(key, entities) {
    //     for(let i = 0; i < entities.length; ++i) {
    //         const currentEntity = entities[i]

    //         if(key == "w") {
    //             currentEntity.components.movement.controls.up = false
    //         }
    //         if(key == "s") {
    //             currentEntity.components.movement.controls.down = false
    //         }
    //         if(key == "a") {
    //             currentEntity.components.movement.controls.left = false
    //         }
    //         if(key == "d") {
    //             currentEntity.components.movement.controls.right = false
    //         }
    //     }
    // }

    move(entities) {
        for(let i = 0; i < entities.length; ++i) {
            const currentEntity = entities[i]

            if(currentEntity.components.movement.currentDirection == "up") {
                MovementSystem.subPositionY(currentEntity, 5)
            }
            if(currentEntity.components.movement.currentDirection == "down") {
                MovementSystem.addPositionY(currentEntity, 5)
            }
            if(currentEntity.components.movement.currentDirection == "left") {
                MovementSystem.subPositionX(currentEntity, 5)
            }
            if(currentEntity.components.movement.currentDirection == "right") {
                MovementSystem.addPositionX(currentEntity, 5)
            }
        }
    }

    // handleKeydownEvent(key) {
    //     for(const id in this.entities) {
    //         const currentEntity = this.entities[id]

    //         if(currentEntity.components.movement) {
    //             if(key == "w") {
    //                 currentEntity.components.movement.controls.up = false
    //             }
    //             if(key == "s") {
    //                 currentEntity.components.movement.controls.down = true
    //             }
    //             if(key == "a") {
    //                 currentEntity.components.movement.controls.left = true
    //             }
    //             if(key == "d") {
    //                 currentEntity.components.movement.controls.right = true
    //             }
    //             if(key == " ") {
    //                 currentEntity.components.movement.controls.space = true
    //             }
    //             if(key == "ArrowUp") {
    //                 currentEntity.components.movement.controls.up = true
    //             }
    //             if(key == "ArrowDown") {
    //                 currentEntity.components.movement.controls.down = true
    //             }
    //             if(key == "ArrowLeft") {
    //                 currentEntity.components.movement.controls.left = true
    //             }
    //             if(key == "ArrowRight") {
    //                 currentEntity.components.movement.controls.right = true
    //             }
    //         }
    //     }        
    // }
    
    // handleKeyupEvent(key) {
    //     for(const id in this.entities) {
    //         const currentEntity = this.entities[id]

    //         if(currentEntity.components.movement) {
    //             if(key == "w") {
    //                 currentEntity.components.movement.controls.up = false
    //             }
    //             if(key == "s") {
    //                 currentEntity.components.movement.controls.down = false
    //             }
    //             if(key == "a") {
    //                 currentEntity.components.movement.controls.left = false
    //             }
    //             if(key == "d") {
    //                 currentEntity.components.movement.controls.right = false
    //             }
    //             if(key == " ") {
    //                 currentEntity.components.movement.controls.space = false
    //             }
    //             if(key == "ArrowUp") {
    //                 currentEntity.components.movement.controls.up = false
    //             }
    //             if(key == "ArrowDown") {
    //                 currentEntity.components.movement.controls.down = false
    //             }
    //             if(key == "ArrowLeft") {
    //                 currentEntity.components.movement.controls.left = false
    //             }
    //             if(key == "ArrowRight") {
    //                 currentEntity.components.movement.controls.right = false
    //             }
    //         }
    //     }        
    // }

    // movePlayer() {
    //     for(const id in this.entities) {
    //         const currentEntity = this.entities[id]

    //         if(currentEntity.components.movement) {
    //             if(currentEntity.components.movement.controls.up) {
    //                 currentEntity.components.position.y -= 5

    //                 // currentEntity.components.position.state = "air"
    //             }
    //             if(currentEntity.components.movement.controls.down) {
    //                 currentEntity.components.position.y += 5
    //             }
    //             if(currentEntity.components.movement.controls.left) {
    //                 currentEntity.components.position.x -= 5
    //             }
    //             if(currentEntity.components.movement.controls.right) {
    //                 currentEntity.components.position.x += 5
    //             }
    //             // if(currentEntity.components.movement.controls.space) {
    //                 // ShootSystem.shoot()
    //                 // shoot
    //                 // Spaceship.shoot(currentEntity)
    //             // }
    //         }
    //     }
    // }

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