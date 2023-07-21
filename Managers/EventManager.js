import Game from "../Game.js";

export default class EventManager {
    constructor(entityManager) {
        this.events = []
        this.entities = []
        this.entityManager = entityManager
    }

    addEntities(...entities) {
        entities.forEach(entity => this.entities.push(entity))
    }

    listen() {
        this.events.forEach((event, index) => {
            if(event == "snake ate apple") {
                console.log(event);

                const score = this.entityManager.getEntitiesWithComponents("score")

                score[0].instance.increaseScore()

                const entities = this.entityManager.getEntitiesWithComponents("size", "position", "collision")

                for(const id in entities) {
                    const currentEntity = entities[id]

                    if(currentEntity.name == "score") {
                        currentEntity.instance.increaseScore()
                    }
                    if(currentEntity.name == "snake") {
                        currentEntity.instance.increaseSize()
                    }
                    if(currentEntity.name == "apple") {
                        currentEntity.instance.resetTillSpaceFound(entities)
                    }
                }

                this.events.splice(index, 1)
            }
            if(event == "player lost") {
                console.log(event)

                new Game().end()
                
                this.events.splice(index, 1)
            }
        })
    }

    dispatchEvent(event) {
        this.events.push(event)
    }
}