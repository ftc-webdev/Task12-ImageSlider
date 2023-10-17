'use strict'

const tags = {} // empty object

const availAttributes = [
    "width",
    "class",
    "id", 
    "src",
]

const closedTags = [
    "img",
    "input",
]

const contentTags = [
    "div",
    "span",
    "section",
    "head", //......
    "h1",
    "h2",
]

const attribute = (attributeName, value) => {
    let str = ""
    if(value) {
        str = `${attributeName}="${value}"`
    } 
    return str
}

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

const closedTag = (tagName, options) => {
    return `
        <${tagName} ${attributes(options)} />
    `
}
const contentTag = (tagName, options, content = "") => {
    return `
            <${tagName} ${attributes(options)}>
                ${content}
            </${tagName}>
        `

}

const generateClosedTags = () => {
    closedTags.forEach(tagName => {
        tags[tagName] = (options) => {
            return closedTag(tagName, options)
        }
    })
}

const generateContentTags = () => {
    contentTags.forEach(tagName => {
        tags[tagName] = (options, content = "") => {
            return contentTag(tagName, options, content)
        }
    })
}

generateContentTags()
generateClosedTags()


export { 
    tags
}

