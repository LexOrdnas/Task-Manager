
/************************** 
TEMPLATE CARD
***************************/
function templateCards(card) {
    
  console.log(card)
    const section = document.querySelector(`.app_section[data-id="${card.idSection}"] ul`)

    const btnDeleteCard = document.createElement("button")
    btnDeleteCard.dataset.id = card.id
    btnDeleteCard.dataset.idSection = card.idSection

    btnDeleteCard.addEventListener("click", deleteCard)

    const li = document.createElement("li")
    const h2 = document.createElement("h2")
    h2.innerText = card.name
    const p  = document.createElement("p")
    p.innerText = card.description
    li.appendChild(btnDeleteCard)
    li.appendChild(h2)
    li.appendChild(p)

    section.appendChild(li)
}

function deleteCard(){
    const idCard  = this.dataset.id
    const idSection = this.dataset.idSection

    kenzieKanban.removeCard(idCard,idSection)
    this.parentElement.remove()
}

/************************** 
TEMPLATE HEADER SEÇÃO
***************************/
function appSectionHeader(sectionName){
    
    const appSectionHeader = document.createElement("div")
    appSectionHeader.classList.add("app_section_header")

    const input = document.createElement("input")
    input.value = sectionName
    input.type  = "text"
    input.placeholder = "Nome seção"
    appSectionHeader.appendChild(input)
    
    return appSectionHeader
}


/************************** 
TEMPLATE  FOOTER 
***************************/
function appSectionFooter(sectionId){
    const appSectionFooter = document.createElement("div")
    appSectionFooter.classList.add("app_section_footer")

    const templateFooter = `<button>Adicionar novo card</button>
    <div class='app_section_footer_card hidden'>
    <input type='text' name='titleCard' placeholder='Título do card'>
    <textarea placeholder='Descrição' name='descriptionCard' id='descriptionCard' value='Descrição do card'></textarea>
    <button class='app_section_footer_save_card' id='${sectionId}'>Add</button></div>`
    appSectionFooter.innerHTML = templateFooter
    return appSectionFooter
}


// -----------------------------------//
// CONTROLES
// -----------------------------------//

const appButtonOpenSection = document.querySelector('.app_add_section .app_button_add_section');
const appContainerAddSection = document.querySelector('.app_add_section .app_container_add_section');
appButtonOpenSection.addEventListener('click', function(){
    appContainerAddSection.classList.toggle('hidden');
})

function openAddCard() {
    this.nextElementSibling.classList.toggle("hidden") 
}

function resetControls(){
    const buttonOpenAddCard = document.querySelectorAll(".app_section_footer > button")
    buttonOpenAddCard.forEach(resetOpenAddCard)

    const buttonAddCard = document.querySelectorAll(".app_section_footer_save_card")
    buttonAddCard.forEach(resetSaveCard)
}

function resetOpenAddCard(element) {
    element.removeEventListener('click', openAddCard)
    element.addEventListener('click', openAddCard)
}


function resetSaveCard(element) {
    element.removeEventListener('click', saveCard)
    element.addEventListener('click', saveCard)
}

function showMessageValidation(){
    const message = document.querySelector('#app .message-validation');
    message.classList.add('show');
    setTimeout(function(){
        message.classList.remove('show');
    }, 3500)
}