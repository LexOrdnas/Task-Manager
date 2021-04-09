//**********************************/
// INICIALIZANDO APLICAÇÃO MODELO
//***********************************/
//1 - CRIA WORKSPACE MODELO
const kenzieKanban = new Workspace(0,"Kenzie Kanban")

//2 - CRIA UMA NOVA SEÇÃO MODELO
const whole = new Section("To Do")

//3 - CRIA CARD DE ATIVIDADES MODELO
//const fazerExercicio = new Card(0,"Fazer Exercícios da Kenzie","Preciso praticar mais")

//4 - ADICIONA O CARD DENTRO DA SEÇÃO MODELO
//todo.adicionarCard(fazerExercicio)

//5 - ADICIONA A SEÇÃO DENTRO DO WORKSPACE MODELO
kenzieKanban.addSection(whole)

//6 - IMPRIME MODELOS CRIADOS
const areaSections = document.querySelector(".app_sections")
kenzieKanban.sections.forEach(printSections)

//**********************************/
// INICIALIZANDO APLICAÇÃO
//***********************************/

//SELECIONA INPUT PARA PEGAR O NOME DE UMA NOVA SEÇÃO
const inputNewSection = document.querySelector(".app_container_add_section input");
//SELECIONA O INPUT PARA ADICIONAR SEÇÃO
const buttonNewSection = document.querySelector('.app_container_add_section .app_input_add_section');
//ADICONA EVENTO DE CLINE  NO INPUT PARA ADICIONAR SEÇÃO
buttonNewSection.addEventListener('click', saveSection);

function saveSection(){
    
    //1 - PEGA O NOME DA SEÇÃO DIGITADO NO CAMPO
    const nameNewSection = inputNewSection.value;
    
    //2 - RESETA O VALOR DO CAMPO
    inputNewSection.value = '';

    if(validation(nameNewSection) !== false){
        //3 - CRIA UMA NOVA SEÇÃO
        const newSection = new Section(nameNewSection);
        
        //4 - ADICIONAR SEÇÃO NO WORKSPACE ATUAL
        kenzieKanban.addSection(newSection);
        
        //5 - LISTA SEÇÃO ADICIONADA NA PAGINA
        printSections(newSection);
    }else{
        showMessageValidation()
    }

}

// Função para salvar os cards
function saveCard(){
    
    //1 - SELECIONA O CARD CLICADO
    const sectionId = this.id;
    const parent = this.parentElement;

    //2 - SELECIONA OS INPUTS COM OS VALORES
    const inputNameCard = parent.querySelector('input');
    const inputDescriptionCard = parent.querySelector('textarea');

    //3 - SELECIONA OS VALORES
    const nameCard = inputNameCard.value;
    const descriptionCard = inputDescriptionCard.value;

    
    //4 -  RESETA OS CAMPOS
    inputNameCard.value = '';
    inputDescriptionCard.value = '';

    if(validation(nameCard) !== false){
        //5 - CRIA UM NOVO CARD
        const newCard = new Card(sectionId, nameCard, descriptionCard);
        
        //6 - ADICIONA ESSE CARD NA SEÇÃO ATUAL 
        kenzieKanban.addCard(sectionId, newCard);

        //7 LISTA O CARD NA SEÇÃO ATUAL
        templateCards(newCard);
    }else{
        showMessageValidation()
    }
}

function printSections(section){
    const nameSection  = section.name

    // pegar o id da seção que vai ser criada
    const idSection = section.id;

    const header = appSectionHeader(nameSection)
    const footer = appSectionFooter(idSection)

    const appSection = document.createElement("div")
    appSection.classList.add("app_section")

    // passar o id para o elemento appSeção
    appSection.dataset.id = idSection

    const  listCards = document.createElement("ul")

    appSection.appendChild(header)
    appSection.appendChild(listCards)
    appSection.appendChild(footer)
    areaSections.appendChild(appSection)

    // adiciona os eventos de clique
    resetControls();
}

function validation(inputText){
    const valueText  = inputText.trim()

    if(valueText !== ""){
       return valueText
    }

    return false
}

