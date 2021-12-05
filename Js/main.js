document.addEventListener('DOMContentLoaded', ()=> {
    const openContent = (selector, button) => {
        let selectorElem = document.querySelector(selector)
        let buttonElem = document.querySelector(button)
        buttonElem.addEventListener("click", ()=> {
            selectorElem.style.display == "block"?selectorElem.style.display = "none" : selectorElem.style.display = "block";
        })
    }
    openContent("#gr_menu","#gr_header_menu_mobile")
    openContent("#gr_header_recherche","#gr_header_recherche_mobile")
})
