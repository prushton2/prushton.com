let sites = [
  ["squareQuiz", "Square Quiz"],
  ["vexCodeMss", "VexCode Motor Setup"]
]
let subdomains = [
  ["witchqueencountdown", "Witch Queen Countdown"],
  ["clickme", "Click Me"]
]
let websites = [
  ["https://www.bobibobi.org/", "bobibobi.org"]
]

let domain = "prushton.com"
let innerHTML = ""

let masterList = []

for(let i=0; i<sites.length; i++) {
  try {
    masterList[i][0] = sites[i]
  } catch {
    masterList.push([sites[i], [], []])
  }
}

for(let i=0; i<subdomains.length; i++) {
  try {
    masterList[i][1] = subdomains[i]
  } catch {
    masterList.push([[], subdomains[i], []])
  }
}

for(let i=0; i<websites.length; i++) {
  try {
    masterList[i][2] = websites[i]
  } catch {
    masterList.push([[], [], websites[i]])
  }
}

for(let i = 0; i<masterList.length; i++) {
  let html = "<tr>"

  if(masterList[i][0][0] != undefined) {
    html += "<td> <a href='" + window.location.href + masterList[i][0][0] + "'>"
    html += masterList[i][0][1]+"</a></td>"
  } else {
    html += "<td></td>"
  }


  if(masterList[i][1][0] != undefined) {
    html += "<td> <a href='" + "https://" + masterList[i][1][0] + "." + domain + "'>"
    html += masterList[i][1][1]+"</a></td>"
  } else {
    html += "<td></td>"
  }

  if(masterList[i][2][0] != undefined) {
    html += "<td> <a href='" + masterList[i][2][0] + "'>"
    html += masterList[i][2][1]+"</a></td>"
  } else {
    html += "<td></td>"
  }

  html += "</tr>"

  innerHTML += html;

}

innerHTML = "<tr><td>Webpages</td><td>Subdomains</td><td>Websites</td></tr>" + innerHTML

document.getElementById("links").innerHTML = innerHTML;