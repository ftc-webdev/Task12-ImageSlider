'use strict'

import { imageSliderInit } from './modules/image-slider/index.js'
import { fileListInit } from './modules/file-list.js'

document.addEventListener("DOMContentLoaded", () => {
    /*
        in reality, we would probably generate this list as JSON
        on the server, and send it to the client - ie the browser
    */
    const imgs = [
        "slide-1",
        "slide-2",
        "slide-3",
        "slide-4",
        "slide-5",
        "slide-6",
        "slide-7",
        "slide-8",
        "slide-9",
    ]
    const imgFolder = "/img/kids-slider"
    const imgExt = "webp"

    const imgList = fileListInit(imgs, imgFolder, imgExt)

    imageSliderInit("kids-slider", imgList)

})









