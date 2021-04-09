class Workspace{
    constructor(id,name){
        this._id     = id;
        this._name   = name;
        this._sections = [];

        // criar atributo idSection para incrementar o id das seções, sempre que criar nova seção
        this._idSection = 0;
    }
    
    set name(name){
        this._name = name
    }

    get name(){
        return this._name
    }

    get sections(){
        return this._sections
    }
    
    addSection(section){
        // atribuimos o id para a seção criado
        section.id = this._idSection;
        this._sections.push(section)

        // precisamos incrementar o id para ser passado para a próxima seção
        this._idSection++;
    }

    // criamos método para adicionar novo card
    // esse método recebe o idSecao, para saber em qual seção será adicionado
    // recebe também o card que sera adicionado
    addCard(idSection,card){
        const sections = this.sections
        // console.log(idSection);
        // com o id da seção, identificamos a posição que o card vai ser adicionado na array de seções
        // e ai é chamado o método adicionarCard da seção, para que ele seja adicionado apenas numa seção específica
        sections[idSection].addCard(card)
    }

    // removerSecao(secao){
        
    // }

    removeCard(idCard,idSection){
     this.sections[idSection].removeCard(idCard)
    }
   
}