let output = document.getElementById("output")
let input = document.getElementById('input');

function selectTextBox() {
    input.focus();
    input.select();
}

document.addEventListener('click', function(event) {
    selectTextBox();
}, true); 

window.onload = function(){
    
    selectTextBox()

  
    window.onkeydown= function(gfg){
        if(gfg.keyCode === 13) {
            input = document.getElementById('input');
            args = input.value.split(" ")
            updateDisplay();
            switch(args[0]) {
                case "db":
                    callDB(args.slice(1));
                break;
                case "help":
                    showHelp();
                break;
            }
        }
    };
};




function addToDisplay(text) {
    output.innerHTML += text + "<br>"
}

const callDB = async(args) => {
    baseURL = "https://corsanywherepr.herokuapp.com/https://api.prushton.com/publicdb/"
    args = args.join("/")
    
    response = await fetch(baseURL + args).then((data) => {
        responsejson = data.text().then((value) => {
            return value
        });
        return responsejson;
    })
    
    response = JSON.parse(response)

    text  = "Command: "+response["Response"]["command"] + "<br>"
    text += "Key: "+    response["Response"]["key"]     + "<br>"
    text += response["Response"]["value"] === undefined ? "" : "Value: "+  response["Response"]["value"]   
    addToDisplay(text)


}


function updateDisplay() {
    input = document.getElementById('input');
    command = "> "+input.value+"<br>";
    output.innerHTML += command;
    input.value = "";
}

function showHelp() {
    commands = [
        ["db set [Key] [Value]", "Sets the value to the given key"],
        ["db get [Key]",         "Gets the value of the given key"],
        ["db ls",                "Lists all keys"],
        ["db del [Key]",         "Deletes given key"],
    ]
    
    for (const element of commands) {
        addToDisplay(element[0]+" | "+element[1])
    }

}