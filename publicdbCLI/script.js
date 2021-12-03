let output = document.getElementById("output")
let input = document.getElementById('input');

window.onload = function(){
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
    baseURL = "https://corsanywherepr.herokuapp.com/https://api.prushton.com/publicdb/"
    args = input.value.split(" ")
    args = args.join("/")
    
    response = await fetch(baseURL + args).then((data) => {
        console.log(data)
        addToDisplay(data)
        return data
    })


}


function updateDisplay() {
    input = document.getElementById('input');
    command = "> "+input.value+"<br>";
    output.innerHTML += command;
    input.value = "";
}