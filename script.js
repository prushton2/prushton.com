let domain = "prushton.com"

let redirects = [
  //Webpages
  ["Square Quiz", "/squareQuiz"],
  ["VexCode MSS", "/vexCodeMss"],
  //Subdomains
  ["Witch Queen Countdown", "https://witchqueencountdown."+domain],
  ["Click me", "https://clickme."+domain],
  //Other sites
  ["Bobibobi.org", "https://www.bobibobi.org/"],
]

function redirect(name) {
  for(i=0; i<redirects.length; i++) {
    if(redirects[i][0] == name) {
      window.location.href = redirects[i][1]
      return
    }
  }
}

