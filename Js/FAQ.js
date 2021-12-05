document.addEventListener('DOMContentLoaded', ()=> {
    const openContent = (selector, button) => {
        let selectorElem = document.querySelector(selector)
        let buttonElem = document.querySelector(button)
        buttonElem.addEventListener("click", ()=> {
            selectorElem.style.display == "block"?selectorElem.style.display = "none" : selectorElem.style.display = "block";
        })
    }
    openContent("#p1","#h1")
    openContent("#p2","#h2")
    openContent("#p3","#h3")
    openContent("#p4","#h4")
    openContent("#p5","#h5")
    openContent("#p6","#h6")
    openContent("#p7","#h7")
    openContent("#p8","#h8")
    openContent("#p9","#h9")
    openContent("#p10","#h10")
    openContent("#p11","#h11")
    openContent("#p12","#h12")
    openContent("#p13","#h13")
    openContent("#p14","#h14")
})
