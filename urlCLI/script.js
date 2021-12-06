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
    document.getElementById("baseURL").value = window.localStorage.getItem("baseURL")    
    selectTextBox()

  
    window.onkeydown= function(gfg){
        window.localStorage.setItem("baseURL", document.getElementById("baseURL").value)
        if(gfg.keyCode === 13) {
            input = document.getElementById('input');
            args = input.value.split(" ")
            updateDisplay();
            callDB(args);
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
    
    response = JSON.parse(response)


    addToDisplay(JSON.stringify(response))


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