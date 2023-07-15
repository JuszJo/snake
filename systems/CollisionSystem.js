import Game from "../Game.js";
import Apple from "../classes/Apple.js";
import MovementSystem from "./MovementSystem.js"

export default class CollisionSystem {
    constructor() {

    }

    // checkCollidables() {
    //     this.collidables.splice(0)

    //     for(const id in this.entities) {
    //         const currentEntity = this.entities[id]

    //         if(currentEntity.components.collision) {
    //             this.collidables.push(currentEntity)
    //         }
    //     }
    // }

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

    checkAppleCollision(entities) {
        const currentEntity = entities.slice(0, 1)

        if(this.checkIntersection(currentEntity[0], entities[1])) {
            console.log("eaten apple");
            
            new Apple().reset()
        }   
    }

    checkWallCollision(entities) {
        const gameProps = Game.getProps()

        for(let i = 0; i < entities.length; ++i) {
            const currentEntity = entities[i]

            if(currentEntity.components.position.x < 0) {
                MovementSystem.setPositionX(currentEntity, 0)

                currentEntity.removeComponent("movement")

                if(currentEntity.name == "snake") {
                    const game = new Game()
                    game.end()
                }
            }
            if(currentEntity.components.position.x + currentEntity.components.size.width > gameProps.canvas.width) {
                MovementSystem.setPositionX(currentEntity, gameProps.canvas.width - currentEntity.components.size.width)

                currentEntity.removeComponent("movement")

                if(currentEntity.name == "snake") {
                    const game = new Game()
                    game.end()
                }
            }
            if(currentEntity.components.position.y < 0) {
                MovementSystem.setPositionY(currentEntity, 0)

                currentEntity.removeComponent("movement")

                if(currentEntity.name == "snake") {
                    const game = new Game()
                    game.end()
                }
            }
            if(currentEntity.components.position.y + currentEntity.components.size.height > gameProps.canvas.height) {
                MovementSystem.setPositionY(currentEntity, gameProps.canvas.height - currentEntity.components.size.height)

                currentEntity.removeComponent("movement")

                if(currentEntity.name == "snake") {
                    const game = new Game()
                    game.end()
                }
            }
        }
    }

    // checkCollision() {
    //     this.checkCollidables()

    //     const length = this.collidables.length

    //     for(let i = 0; i < length - 1; ++i) {
    //         this.currentCollidable = this.collidables.splice(0, 1)[0]

    //         const currentCollidableObject = {
    //             x: this.currentCollidable.components.position.x,
    //             y: this.currentCollidable.components.position.y,
    //             width: this.currentCollidable.components.dimension.width,
    //             height: this.currentCollidable.components.dimension.height,
    //             name: this.currentCollidable.name,
    //         }

    //         this.collidables.forEach(collidable => {
    //             const collidableObject = {
    //                 x: collidable.components.position.x,
    //                 y: collidable.components.position.y,
    //                 width: collidable.components.dimension.width,
    //                 height: collidable.components.dimension.height,
    //                 name: collidable.name
    //             }

    //             if(this.checkIntersection(currentCollidableObject, collidableObject)) {
    //                 const game = new GameSystem()

    //                 delete game.entities[this.currentCollidable.id]
    //                 delete game.entities[collidable.id]
    //             }
    //         })

    //     }
    // }

    // checkWallCollision() {
    //     const game = GameWorld.getProps()

    //     for(const id in this.entities) {
    //         const currentEntity = this.entities[id]

    //         if(currentEntity.components.collision) {
    //             if((currentEntity.components.render.type == "quad" || currentEntity.components.render.type == "camera") && currentEntity.name != "bullet") {
    //                 const entity = {
    //                     x: currentEntity.components.position.x,
    //                     y: currentEntity.components.position.y,
    //                     width: currentEntity.components.dimension.width,
    //                     height: currentEntity.components.dimension.height,
    //                 }

    //                 if(entity.x < 0) {
    //                     MovementSystem.setPositionX(currentEntity, 0)
    //                 }
    //                 if(entity.x + entity.width > game.canvasWidth) {
    //                     MovementSystem.setPositionX(currentEntity, game.canvasWidth - entity.width)
    //                 }
    //                 if(entity.y < 0) {
    //                     MovementSystem.setPositionY(currentEntity, 0)

    //                     VelocitySystem.setVelocityY(currentEntity, 0)
    //                 }
    //                 if(entity.y + entity.height > game.canvasHeight) {
    //                     MovementSystem.setPositionY(currentEntity, game.canvasHeight - entity.height)

    //                     MovementSystem.changeState(currentEntity, "ground")
                        
    //                     if(!currentEntity.components.bounce) {
    //                         VelocitySystem.setVelocityY(currentEntity, 0)
    //                     }                        
    //                 }
    //             }

    //             if(currentEntity.components.collision && currentEntity.name == "bullet") {
    //                 const entity = {
    //                     x: currentEntity.components.position.x,
    //                     y: currentEntity.components.position.y,
    //                     width: currentEntity.components.dimension.width,
    //                     height: currentEntity.components.dimension.height,
    //                 }

    //                 if(entity.y < 0) {
    //                     currentEntity.removeComponent("collision")
    //                 }
    //             }
    //         }
    //     }
    // }
}