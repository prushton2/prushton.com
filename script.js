webpages = [
    ["/discordBots", "Discord Bots", "Some of my project ive done relating to discord",],
    ["/squareQuiz", "Square Quiz", "A simple quiz on the square of a 2 digit number",],
    ["/vexCodeMss", "Vex Code MSS", "A mock motor sensor setup for VexCode",],
    ["https://clickme.prushton.com", "Click Me", "",],
]

function createWebpageHTML(name, url, desc) {
    let button = `<button onclick=\'window.location.href="${url}"\' class="ibtn"><b>${name}</b></button><br>`
    let description = `<label id="desc">${desc}</label><br>`

    return `<div class="website">${button}${description}</div>`
}


function createGithubHTML(name, url, lang, desc, colors) {

    dotColor = colors[lang]["color"]

    let newName = ""

    name.split("").forEach((element) => {
        newName += (element == "." || element == element.toUpperCase()) ? "<wbr>" + element : element;
    });


    let button = `<button id="title" onclick=\'window.location.href="${url}"\' class="ibtn"><b>${newName}</b></button><br>`
    let description = `<label id="desc">${desc}</label><br>`
    let dot = `<span class="dot" style="background-color: ${dotColor}"></span>`
    let language= `<label id="lang">${lang}</label>`
    return `<div class="githubRepo">${button}${description}${dot}${language} </div>`
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

    pinnedRepos.forEach((element) => {
        let name = element["repo"]
        let url  = element["link"]
        let lang = element["language"]
        let desc = element["description"]
        document.getElementById("githubContainer").innerHTML += createGithubHTML(name, url, lang, desc, colors)
    })
    webpages.forEach((element) => {
        let url  = element[0]
        let name = element[1]
        let desc = element[2]
        document.getElementById("WebsiteContainer").innerHTML += createWebpageHTML(name, url, desc)
    });
}

createPage()