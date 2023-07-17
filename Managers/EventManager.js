import Game from "../Game.js";
import Apple from "../classes/Apple.js";
import Score from "../classes/Score.js";
import Snake from "../classes/Snake.js";
import EntityManager from "./EntityManager.js";

export default class EventManager {
    constructor() {
        this.events = []
        this.entities = []
    }

    addEntities(...entities) {
        entities.forEach(entity => this.entities.push(entity))
    }

    listen() {
        this.events.forEach((event, index) => {
            if(event == "snake ate apple") {
                console.log(event);

                const entities = new EntityManager().getEntitiesWithComponents("size", "position", "collision")

                new Score().increaseScore()
                new Snake().increaseSize()
                new Apple().resetTillSpaceFound(entities)


                this.events.splice(index, 1)
            }
            if(event == "wrong apple position") {
                console.log(event)

                const entities = new EntityManager().getEntitiesWithComponents("size", "position", "collision")

                new Apple().resetTillSpaceFound(entities)

                this.entities.splice(0)
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