export function isMain(mainFileName) {
    return window.location.pathname.endsWith(mainFileName)
}

export function isPathName(mainFileName) {
    return window.location.pathname == mainFileName
}