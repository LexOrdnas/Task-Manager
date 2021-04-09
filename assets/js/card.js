class Card {
    constructor(idSection,name,description){
        this._idSection   = idSection;
        this._id        = 0;
        this._name      = name;
        this._description = description
    }

    set id(id){
        this._id = id
    }

    get id(){
        return this._id 
    }

    set idSection(idSection){
        this._idSection = idSection
    }

    get idSection(){
        return this._idSection 
    }

    set name(name){
        this._name = name
    }

    get name(){
        return this._name 
    }

    set description(description){
        this._description = description
    }

    get description(){
        return this._description 
    }
}