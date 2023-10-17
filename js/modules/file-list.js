'use strict'

/*

    fileList : array of file names
    path : optional path to add as a prefix to the filenames
    ext: optional 3/4/5 characater extension to add as a post fix to the file name (if it doesn't have one!!)

*/
const fileListInit = (fileNames, path, ext) => {
    
    let fullFileNames = []  // don't modify the original array
    /*
        if the last char of the path is not a forward slash (/) then add it!!
        if the fist characater of the extension is not a period (.), then add it
    */
    if(path && (path[-1] !== "/")) path += "/"
    if(ext && ext[0] !== "." ) ext = "." + ext

    fileNames.forEach(filename => {
        if(path) {
            filename = path + filename
        }
        /*
            if we have a default ext, AND the filename doesn't already have an extension
            then add the default extension
        */
        if(ext) {
            if(!filename.includes(".")) {
                filename += ext
            }
        }
        fullFileNames.push(filename)
    })

    return fullFileNames

}

export {
    fileListInit
}