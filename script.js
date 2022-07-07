import * as config from "./config.js"
import * as utils from "./utils.js"

let webpages = [
    ["/yubikey", "Yubikey Verifier", "A tool to verify if the yubikey given is from a registered user",],
    ["/simpleDB", "Simple DB", "A key value database using yubikey verification",],
    ["https://clickme.prushton.com", "Click Me", "",],
    ["/discordBots", "Discord Bots", "Some of my project ive done relating to discord",],
]

let showcasedRepos = [
    "2.5dRenderEngine", "prushton2.github.io", "VexScoringProgram",
    "DestinyCollections", "DiscordBot", "977Z"
]


function createWebpageHTML(name, url, desc) {
    let button = `<button onclick=\'window.location.href="${url}"\' class="ibtn"><b>${name}</b></button><br>`
    let description = `<label id="desc">${desc}</label><br>`

    return `<div class="website">${button}${description}</div>`
}


function createGithubHTML(name, url, lang, desc, colors) {

    let dotColor = colors[lang]["color"]

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
    
    colors = JSON.parse(colors)

    showcasedRepos.forEach(async(element) => {
        let repo = await fetch("https://api.github.com/repos/prushton2/"+element).then(response => {
            return response.text()
        });
        repo = JSON.parse(repo);
        let name = repo["name"]
        let url  = repo["html_url"]
        let lang = repo["language"]
        let desc = repo["description"]
        document.getElementById("githubContainer").innerHTML += createGithubHTML(name, url, lang, desc, colors)
    })


    webpages.forEach((element) => {
        let url  = element[0]
        let name = element[1]
        let desc = element[2]
        document.getElementById("WebsiteContainer").innerHTML += createWebpageHTML(name, url, desc)
    });
}

if(utils.isPathName("/index.html") || utils.isPathName("/")) {
    createPage()
}