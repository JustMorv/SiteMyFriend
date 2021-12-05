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
// ++++++++++++++++++++=SLIDE=++++++++++++++++++++++++
var pb1 = document.querySelector(".pb1")
var pb2 = document.querySelector(".pb2")
const result = document.querySelector("#bigpic")
function changerPhoto(e) {
    let x = e;
    if (x == 1) {
        pb1.classList.add("active")
        pb2.classList.remove("active")
        result.src = "Img/accessories/st_2.jpg"
    }
    if (x == 2) {
        pb2.classList.add("active")
        pb1.classList.remove("active")
        result.src = "Img/accessories/st_3.jpg"
    }
}
function clickPhoto(e){
    if (e == 1){
        result.src = "Img/accessories/st_2.jpg"
    }
    if (e == 2){
        result.src = "Img/accessories/st_3.jpg"
    }
}
// ++++++++++++++++++++=SLIDE=++++++++++++++++++++++++
// ++++++++++++++++++++=ZOOM=++++++++++++++++++++++++
function clickZoom() {
    document.querySelector(".gr_produit_gauche").classList.add("zoom")
    document.querySelector(".gr_home_filtre").style.display = "none"
    document.querySelector(".gr_zoom_only").style.display = "block"
    document.querySelector("#gr_produit_infos_mobile").style.display = "none"
    document.querySelector(".novuerapide").style.display = "none"
    document.querySelector(".gr_produit_social").style.display = "none"
    document.querySelector("#gr_produti_li").style.float = "none"
    document.querySelector(".gr_produit_photo_grand").classList.add("gr_produit_photo_grand_height")
    document.querySelector("#gr_produit_photo_bulles").style.left = "80px"
    if (window.innerWidth > "800") { document.querySelector(".gr_produit_photo_container").classList.add("padding_185") }
    else{ document.querySelector(".gr_produit_photo_container").classList.add("padding_30") }
    
}
function fermerZoom() {
    document.querySelector(".gr_produit_gauche").classList.remove("zoom")
    document.querySelector(".gr_home_filtre").style.display = "block"
    document.querySelector(".gr_zoom_only").style.display = "none"
    document.querySelector(".novuerapide").style.display = "block"
    document.querySelector(".gr_produit_social").style.display = "block"
    document.querySelector("#gr_produti_li").style.float = "left"
    document.querySelector(".gr_produit_photo_grand").classList.remove("gr_produit_photo_grand_height")
    if (window.innerWidth > "800"){
        document.querySelector("#gr_produit_infos_mobile").style.display = "none"
        document.querySelector(".gr_produit_photo_container").classList.remove("padding_185")
    } else {
        document.querySelector("#gr_produit_infos_mobile").style.display = "block"
        document.querySelector(".gr_produit_photo_container").classList.remove("padding_30")
    }
    document.querySelector("#gr_produit_photo_bulles").style.left = "0"
}
window.addEventListener("resize", function(){
    if (this.innerWidth > 800) { document.querySelector("#gr_produit_infos_mobile").style.display = "none"
    } else { document.querySelector("#gr_produit_infos_mobile").style.display = "block" }
})
// ++++++++++++++++++++=ZOOM=++++++++++++++++++++++++

