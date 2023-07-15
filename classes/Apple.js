import EntityManager from "../Managers/EntityManager.js";
import components from "../components/components.js";

export default class Apple {
    constructor() {
        this.apple = new EntityManager().createEntity("apple")
        
        this.apple.addComponent(new components.Size(10, 10))
        this.apple.addComponent(new components.Position(300, 50))
        this.apple.addComponent(new components.Collision())
    }
}