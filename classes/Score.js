import Game from "../Game.js"
import EntityManager from "../Managers/EntityManager.js"
import components from "../components/components.js"

let instance = null

export default class Score {
    constructor() {
        if(instance && new Game().lose == false) return instance

        this.score = new EntityManager().createEntity("score")

        this.score.addComponent(new components.Score())

        instance = this
    }

    increaseScore() {
        this.score.components.score.value += 1
    }
}