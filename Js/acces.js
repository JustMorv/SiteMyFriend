document.addEventListener('DOMContentLoaded', ()=> {
    const openContent = (selector, button) => {
        let selectorElem = document.querySelector(selector)
        let buttonElem = document.querySelector(button)
        buttonElem.addEventListener("click", ()=> {
            selectorElem.style.display == "block"?selectorElem.style.display = "none" : selectorElem.style.display = "block";
        })
    }
    openContent(".layered_filter_ul",".ul_block")
    openContent(".layered_filter_div",".layered_block")
    openContent(".gr_categorie_droite",".gr_tri_block")
    openContent(".gr_categorie_droite","#gr_categorie_exit")
})

var lab = document.querySelector(".lab");
var mySum = document.querySelector(".myRange");addEventListener("input", function(){
    lab.value = mySum.value + " тг";
})







