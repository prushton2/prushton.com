function createHTML(name, url, lang, desc, colors) {

    dotColor = colors[lang]["color"]

    let newName = ""

    name.split("").forEach((element) => {
        newName += (element == "." || element == element.toUpperCase()) ? "<wbr>" + element : element;
    });


    let button = `<button id="title" onclick=\'window.location.href="${url}"\' class="ibtn"><b>${newName}</b></button><br>`
    let description = `<label id="desc">${desc}</label><br>`
    let dot = `<span class="dot" style="background-color: ${dotColor}"></span>`
    let language= `<label id="lang">${lang}</label>`
    return `${button}${description}${dot}${language}`
}


const createPage = async() => {
    let colors = await fetch("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json").then(response => {
        return response.text()
    });
    let pinnedRepos = await fetch("https://gh-pinned-repos-5l2i19um3.vercel.app/?username=prushton2").then(response => {
        return response.text()
    });
    
    colors = JSON.parse(colors)
    pinnedRepos = JSON.parse(pinnedRepos)

    for(i=0; i<6; i++) {
        let name = pinnedRepos[i]["repo"]
        let url  = pinnedRepos[i]["link"]
        let lang = pinnedRepos[i]["language"]
        let desc = pinnedRepos[i]["description"]
        document.getElementById(`gh${i.toString()}`).innerHTML = createHTML(name, url, lang, desc, colors)
    }
}

createPage()