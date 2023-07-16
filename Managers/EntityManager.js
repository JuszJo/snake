import Entity from "../Entity.js";

let instance = null

export default class EntityManager {
    constructor() {
        if(instance) return instance

        this.entities = {}

        instance = this
    }
    
    createEntity(name) {
        const entity = new Entity(name)

        this.entities[entity.id] = entity

        return entity
    }

    getEntitiesWithComponents(...components) {
        const arrayOfEntities = []

        for(const id in this.entities) {
            const currentEntity = this.entities[id]

            const keys = Object.keys(currentEntity.components)

            if(components.every(component => keys.includes(component))) arrayOfEntities.push(currentEntity)
        }

        return arrayOfEntities
    }
}