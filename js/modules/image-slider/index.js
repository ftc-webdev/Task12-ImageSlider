'use strict'
/*
    we shoyuld be able to import these methods directly, without the extra const declaration 
*/
import { tags } from '/js/modules/html-clean.js'
const { div, h1, span, img } = tags

const generatePopover = () => {
    const popover = document.createElement("div")
    popover.classList.add("popover")
    popover.classList.add("hidden")
    popover.id = "popover"

    const html = div({
        id: "popover-content",
        class: "popover__content"
    }, 
        span({
            id: "popover-close",
            class: "clickable"
        },"X") 
        + 
        img({
            id: "popover-img"
        })
    )

    // const html = `
    //     <!-- <div id="popover" class="popover hidden"> -->
    //         <div id="popover-content" class="popover__content">
    //             <span id="popover-close" class="clickable">X</span>
    //             <img id="popover-img" src="" alt="">
    //             <!-- <h2>Hello</h2>
    //             <p>I am popover</p> -->
    //         </div>
    //     <!-- </div> -->    
    // `
    popover.innerHTML = html
    return popover
}

const displayImageRibbon = (containerId, imageList) => {
    let counter = 0

    let thumbs = ""
    imageList.forEach(filename => {

        thumbs += span({
            class:"imgae-ribbon-image"
        }, img({
            src: filename, 
            width: "50px",
            class: "clickable",
            id: counter++,
        }))

        // thumbs += `
        //     <span class="image-ribbon-image">${img(filename, {
        //         width: "50px",
        //         class: "some-class",
        //         id: counter++,
        //     })}
        //     </span>
        // `
    })

    let html = h1({}, "This is a H1 tag") + div({
        id: "image-slider",
        class: "image-ribbon",
    }, thumbs)
    // let html = `<div id="image-slider" class="image-ribbon">`

    // html += list + "</div>"

    // html += generatePopover()    // we are now returning a HTML node

    document.getElementById(containerId).innerHTML = html

    const imgSlider = document.getElementById("image-slider") 

    imgSlider.appendChild(generatePopover())

    imgSlider.addEventListener("click", (ev) => {
        
        const popoverContainer = document.getElementById("popover")
        popoverContainer.classList.toggle("hidden")

        const popoverImg = document.getElementById("popover-img")
        const thumb = ev.target
        popoverImg.src = thumb.src

        const popoverClose = document.getElementById("popover-close")
        popoverClose.addEventListener("click" , () => {
            popoverContainer.classList.toggle("hidden")
        })


    })

}


/*
    imageLiust: array of fully qualified file names - path + filename + ext
*/
const imageSliderInit = (containerId, imageList) => {
    displayImageRibbon(containerId, imageList)    
}

export {
    imageSliderInit
}