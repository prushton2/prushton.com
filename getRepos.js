
var pinnedRepos;
var colors;


function createHTML(name, url, lang, desc) {

    dotColor = colors[lang]["color"]

    let button = '<button id="title" onclick=\'window.location.href=" '+url+' "\' class="ibtn"><b>'+name+'</b></button><br>'
    let description = '<label id="desc">'+desc+'</label><br>'
    let dot = '<span class="dot" style="background-color: '+dotColor+'"></span>'
    let language= '<label id="lang">'+lang+'</label>'
    return button+description+dot+language
}


function createPage() {
    for(i=0; i<6; i++) {
        let name = pinnedRepos[i]["repo"]
        let url  = pinnedRepos[i]["link"]
        let lang = pinnedRepos[i]["language"]
        let desc = pinnedRepos[i]["description"]
        document.getElementById("gh"+i.toString()).innerHTML = createHTML(name, url, lang, desc)
    }
}










function makeHttpObject() {
  try {return new XMLHttpRequest();}
  catch (error) {}
  try {return new ActiveXObject("Msxml2.XMLHTTP");}
  catch (error) {}
  try {return new ActiveXObject("Microsoft.XMLHTTP");}
  catch (error) {}

  throw new Error("Could not create HTTP request object.");
}

function getMyGithub() {
    var request = makeHttpObject();
    request.open("GET", "https://gh-pinned-repos-5l2i19um3.vercel.app/?username=prushton2", true);
    request.send(null);
    request.onreadystatechange = function() {
    if (request.readyState == 4)
        pinnedRepos = JSON.parse(request.responseText);
        createPage()
    };
}


var request = makeHttpObject();
request.open("GET", "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json", true);
request.send(null);
request.onreadystatechange = function() {
if (request.readyState == 4)
    colors = JSON.parse(request.responseText);
    getMyGithub()
};