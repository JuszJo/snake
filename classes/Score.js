import EntityManager from "../Managers/EntityManager.js"
import components from "../components/components.js"

export default class Score {
    constructor() {
        this.score = new EntityManager().createEntity("score")

        this.score.addComponent(new components.Score())

        this.score.instance = this
    }

    increaseScore() {
        this.score.components.score.value += 1
    }
}