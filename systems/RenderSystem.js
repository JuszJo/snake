import Game from "../Game.js";

export default class RenderSystem {
    constructor() {
        this.gameProps = Game.getProps()
    }

    render(entities) {
        this.gameProps.drawingSurface.clearRect(0, 0, this.gameProps.canvas.width, this.gameProps.canvas.height)
        for(let i = 0; i < entities.length; ++i) {
            const currentEntity = entities[i]

            this.gameProps.drawingSurface.fillRect(
                currentEntity.components.position.x, currentEntity.components.position.y,
                currentEntity.components.size.width, currentEntity.components.size.height
            )
        }
    }
}