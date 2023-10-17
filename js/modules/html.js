'use strict'

const attribute = (attributeName, value) => {
    let str = ""
    if(value) {
        str = `${attributeName}="${value}"`
    } 
    return str
}

const availAttributes = [
    "width",
    "class",
    "id", 
    "src",
]

const attributes =  (options) => {
    let html = ""
    for(let option in options) {
        if(!availAttributes.includes(option)) console.error(option + " is not a valid attribute")
        let value = options[option]  // option is the the name of the property
        html += `
            ${option}="${value}"
        `
    }
    return html
}

/*
    pass in an options object

*/

const img = (src, options) => {

    src = attribute("src", src)

    return `
        <img ${src} ${attributes(options)} /> 
    `
}

const tags = {} // empty object

const closedTags = [
    "img",
    "input"
]

const closedTag = (tagName, options) => {
    return `
        <${tagName} ${attributes(options)} />
    `
}

const generateClosedTags = () => {
    closedTags.forEach(tagName => {
        tags[tagName] = (options) => {
            return closedTag(tagName, options)
        }
    })
}


const contentTags = [
    "div",
    "span",
    "section",
    "head", //......
    "h1",
    "h2",
]


const generateContentTags = () => {
    /*
        tag.div = (options, content)

    */
    contentTags.forEach(tagName => {
        tags[tagName] = (options, content = "") => {
            return contentTag(tagName, options, content)
        }
    })
    console.log("tags", tags)
}

generateContentTags()
generateClosedTags()

const contentTag = (tagName, options, content = "") => {

    return `
            <${tagName} ${attributes(options)}>
                ${content}
            </${tagName}>
        `

}

const div = (options, content = "") => {
    return contentTag("div", options, content)
    // return `
    //     <div ${attributes(options)}>
    //         ${content}
    //     </div>
    // `

}

const span = (options, content = "") => {
    return contentTag("span", options, content)
    // return `
    //     <span ${attributes(options)}>
    //         ${content}
    //     </span>
    // `

}

export {
    img,
    div,
    span,
    tags,
}