class Section{
    constructor(name){
        this._id     = 0;
        this._name   = name;
        this._cards  = [];
        this._idCard = 0;
    }

    set id(id){
        this._id = id
    }

    get id(){
        return  this._id
    }

    set name(name){
        this._name = name
    }

    get name(){
        return  this._name
    }

    get cards(){
        return this._cards
    }

    addCard(card){

        card.id      = this._idCard
        card.idSection = this._id
        
        this._cards.push(card)

        this._idCard++
    }

    removeCard(idCard){
        this._cards.splice(idCard,1)
    }

}
