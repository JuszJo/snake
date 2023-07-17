import Game from "../Game.js";

export default class RenderSystem {
    constructor() {
        this.gameProps = Game.getProps()
    }

    render(entities) {
        this.gameProps.drawingSurface.clearRect(0, 0, this.gameProps.canvas.width, this.gameProps.canvas.height)
        for(let i = 0; i < entities.length; ++i) {
            const currentEntity = entities[i]

            this.gameProps.drawingSurface.fillStyle = currentEntity.components.color ? currentEntity.components.color.value : "black"

            this.gameProps.drawingSurface.fillRect(
                currentEntity.components.position.x, currentEntity.components.position.y,
                currentEntity.components.size.width, currentEntity.components.size.height
            )

        }
    }
    
    renderScore(entities) {
        const score = entities[0].components.score.value

        this.gameProps.drawingSurface.font = "20px Arial";
        this.gameProps.drawingSurface.textBaseline = "top";
        this.gameProps.drawingSurface.fillText(score, 0, 0);
    }
}