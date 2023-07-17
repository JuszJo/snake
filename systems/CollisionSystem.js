import Game from "../Game.js";
import MovementSystem from "./MovementSystem.js"

export default class CollisionSystem {
    constructor(eventManager) {
        this.eventManager = eventManager
    }

    checkIntersection(object1, object2) {
        if(
            object1.components.position.x + object1.components.size.width > object2.components.position.x &&
            object1.components.position.x < object2.components.position.x + object2.components.size.width &&
            object1.components.position.y + object1.components.size.height > object2.components.position.y &&
            object1.components.position.y < object2.components.position.y + object2.components.size.height &&
            object1.name != object2.name
        )
        {
            return true;
        }
    }

    checkSelfCollision(entities) {
        let snake = null
        let apple = null
        const collidablesSnake = []
        const collidablesApple = []

        for(let i = 0; i < entities.length; ++i) {
            const currentEntity = entities[i]

            if(currentEntity.name == "snake") {
                snake = currentEntity
            }
            else {
                collidablesSnake.push(currentEntity)

                if(currentEntity.name == "apple") {
                    apple = currentEntity
                }
                else {
                    collidablesApple.push(currentEntity)
                }
            }
        }
        
        for(let i = 0; i < collidablesSnake.length; ++i) {
            const currentEntity = collidablesSnake[i]

            if(this.checkIntersection(snake, currentEntity)) {
                switch (currentEntity.name) {
                    case "apple":
                        this.eventManager.dispatchEvent("snake ate apple")
                        break;

                    case "tail":
                        this.eventManager.dispatchEvent("player lost")
                        break;

                    default:
                        break;
                }
            }
        }
        for(let i = 0; i < collidablesApple.length; ++i) {
            const currentEntityForApple = collidablesApple[i]
            if(this.checkIntersection(apple, currentEntityForApple)) {
                switch (currentEntityForApple.name) {
                    case "tail":
                        this.eventManager.dispatchEvent("wrong apple position")
                        break;

                    default:
                        break;
                }
            }
        }
    }

    checkWallCollision(entities) {
        const gameProps = Game.getProps()

        for(let i = 0; i < entities.length; ++i) {
            const currentEntity = entities[i]

            if(currentEntity.components.position.x < 0) {
                MovementSystem.setPositionX(currentEntity, 0)

                if(currentEntity.name == "snake") {
                    this.eventManager.dispatchEvent("player lost")
                }
            }
            if(currentEntity.components.position.x + currentEntity.components.size.width > gameProps.canvas.width) {
                MovementSystem.setPositionX(currentEntity, gameProps.canvas.width - currentEntity.components.size.width)

                if(currentEntity.name == "snake") {
                    this.eventManager.dispatchEvent("player lost")
                }
            }
            if(currentEntity.components.position.y < 0) {
                MovementSystem.setPositionY(currentEntity, 0)

                if(currentEntity.name == "snake") {
                    this.eventManager.dispatchEvent("player lost")
                }
            }
            if(currentEntity.components.position.y + currentEntity.components.size.height > gameProps.canvas.height) {
                MovementSystem.setPositionY(currentEntity, gameProps.canvas.height - currentEntity.components.size.height)

                if(currentEntity.name == "snake") {
                    this.eventManager.dispatchEvent("player lost")
                }
            }
        }
    }
}