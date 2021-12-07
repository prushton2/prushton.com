let output = document.getElementById("output")
let input = document.getElementById('input');

let previousCommands = [""]
let commandHistoryPos = 0

function selectTextBox() {
    input.focus();
    input.select();
}

document.addEventListener('click', function(event) {
    selectTextBox();
}, true); 

window.onload = function(){
    document.getElementById("baseURL").value = window.localStorage.getItem("baseURL")    
    selectTextBox()

  
    window.onkeydown= function(gfg){
        console.log(gfg.keyCode)
        console.log(previousCommands)
        window.localStorage.setItem("baseURL", document.getElementById("baseURL").value)
        if(gfg.keyCode === 13) {
            input = document.getElementById('input');
            args = input.value.split(" ")

            if(previousCommands[1] != input.value) {
                previousCommands.splice(1, 0, input.value);
            }
            commandHistoryPos = 0
            
            updateDisplay();
            callDB(args);
        }
        else if(gfg.keyCode == 38) {
            commandHistoryPos += 1
            if(commandHistoryPos > previousCommands.length-1) {
                commandHistoryPos = previousCommands.length-1
            }
            document.getElementById("input").value = previousCommands[commandHistoryPos]
        }
        else if(gfg.keyCode == 40) {
            commandHistoryPos -= 1
            if(commandHistoryPos < 0) {
                commandHistoryPos = 0
            }
            document.getElementById("input").value = previousCommands[commandHistoryPos]

        }
    };
};




function addToDisplay(text) {
    output.innerHTML += text + "<br>"
}

const callDB = async(args) => {
    baseURL = document.getElementById("baseURL").value
    args = args.join("/")
    
    response = await getURLWithoutCors(baseURL + args)
    
    addToDisplay(response)


}


function updateDisplay() {
    input = document.getElementById('input');
    command = "> "+input.value+"<br>";
    output.innerHTML += command;
    input.value = "";
}
