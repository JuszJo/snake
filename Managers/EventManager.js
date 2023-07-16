import Game from "../Game.js";
import Apple from "../classes/Apple.js";
import Score from "../classes/Score.js";
import Snake from "../classes/Snake.js";

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

                new Score().increaseScore()
                new Snake().increaseSize()
                new Apple().reset()

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