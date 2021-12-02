let output = document.getElementById("output")
let input = document.getElementById('input');

window.onload = function(){
    let value = 0;
    let space_bar = 32;
    let right_arrow = 39;
    input.focus();
    input.select();
  
    window.onkeydown= function(gfg){
        if(gfg.keyCode === 13) {
            execute();
            updateDisplay();
        }
    };
};

function addToDisplay(text) {
    output.innerHTML += text + "<br>"
}

const execute = async() => {
    input = document.getElementById('input');
    baseURL = "https://api.prushton.repl.co/publicdb/"
    args = input.value.split(" ")
    args = args.join("/")
    
    response = await fetch(baseURL + args).then((data) => {
        return data
    })

    addToDisplay(response)

}


function updateDisplay() {
    input = document.getElementById('input');
    command = "> "+input.value+"<br>";
    output.innerHTML += command;
    input.value = "";
}