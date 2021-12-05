document.addEventListener('DOMContentLoaded', ()=> {
    const openContent = (selector, button) => {
        let selectorElem = document.querySelectorAll(selector)
        let buttonElem = document.querySelector(button)
        buttonElem.addEventListener("click", ()=> {
            for(let elem of selectorElem)
            elem.style.display == "block"?elem.style.display = "none" : elem.style.display = "block";
        })
    }
    openContent("#p_block_1", ".gr_produit_button_1")
    openContent("#p_block_2", ".gr_produit_button_2")
    openContent("#p_block_3", ".gr_produit_button_3")
})
 
const elems = document.querySelectorAll(".pt")
elems.forEach((element) => {
    element.addEventListener("click", () => {
        let resultElem = element
        
        elems.forEach((element) => {
            element.classList.remove("selected")
        })
        resultElem.classList.add("selected")
    })
})
// ++++++++++++++++++++=DETAILS=++++++++++++++++++++++++
// ++++++++++++++++++++=SLIDER=++++++++++++++++++++++++
const elemsPb = document.querySelectorAll(".pb")
elemsPb.forEach((element) => {
    element.addEventListener("click", () => {
        let resultElem = element
        
        elemsPb.forEach((element) => {
            element.classList.remove("active")
        })
        resultElem.classList.add("active")
    })
})
const elemse = document.querySelectorAll(".thickbox img")
elemse.forEach((element) => {
    element.addEventListener("click", () => {
        document.querySelector("#bigpic").src = element.src
    })
})
// ++++++++++++++++++++=SLIDER=++++++++++++++++++++++++
// ++++++++++++++++++++=ZOOM=++++++++++++++++++++++++

function clickZoom() {
    document.querySelector(".gr_produit_gauche").classList.add("zoom")
    document.querySelector(".gr_home_filtre").style.display = "none"
    document.querySelector(".gr_zoom_only").style.display = "block"
    document.querySelector("#gr_produit_infos_mobile").style.display = "none"
    document.querySelector(".novuerapide").style.display = "none"
    document.querySelector(".gr_produit_social").style.display = "none"
    document.querySelector("#gr_produit_coloris").style.display = "none"
    document.querySelector("#gr_produit_miniatures").classList.add("zoom_position")
    document.querySelector(".gr_produit_photo_grand").classList.add("gr_produit_photo_grand_height")
    document.querySelector("#gr_produit_photo_bulles").style.left = "80px"
    if (window.innerWidth > "800") { document.querySelector(".gr_produit_photo_container").classList.add("padding_185") }
    else{ document.querySelector(".gr_produit_photo_container").classList.add("padding_30") }
    const none = document.querySelectorAll("#gr_produti_li")
    none.forEach((elem) => {
        elem.style.float = "none"
        elem.style.width = "100%"
        elem.style.maxWidth = "150px"
    })  
    
}
function fermerZoom() {
    document.querySelector(".gr_produit_gauche").classList.remove("zoom")
    document.querySelector(".gr_home_filtre").style.display = "block"
    document.querySelector(".gr_zoom_only").style.display = "none"
    document.querySelector(".novuerapide").style.display = "block"
    document.querySelector(".gr_produit_social").style.display = "block"
    document.querySelector("#gr_produit_coloris").style.display = "block"
    document.querySelector("#gr_produit_miniatures").classList.remove("zoom_position")
    document.querySelector(".gr_produit_photo_grand").classList.remove("gr_produit_photo_grand_height")
    if (window.innerWidth > "800"){
        document.querySelector("#gr_produit_infos_mobile").style.display = "none"
        document.querySelector(".gr_produit_photo_container").classList.remove("padding_185")
    } else {
        document.querySelector("#gr_produit_infos_mobile").style.display = "block"
        document.querySelector(".gr_produit_photo_container").classList.remove("padding_30")
    }
    document.querySelector("#gr_produit_photo_bulles").style.left = "0"
    const none = document.querySelectorAll("#gr_produti_li")
    none.forEach((elem) => {
        elem.style.float = "left"
        elem.style.width = "100%"
        elem.style.maxWidth = "108px"
    })
}
window.addEventListener("resize", function(){
    if (this.innerWidth > 800) { document.querySelector("#gr_produit_infos_mobile").style.display = "none"
    } else { document.querySelector("#gr_produit_infos_mobile").style.display = "block" }
})
// ++++++++++++++++++++=ZOOM=++++++++++++++++++++++++




