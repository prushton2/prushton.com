configtypes = [null, null, null, null] 
copyable = false
mssopts = 4

function run() {
  for(j = 0; j < mssopts; j++) {
    i = j.toString()
    if (configtypes[i] == 'motor') {
      document.getElementById("opt"+i).innerHTML = ("vex::"+configtypes[i]+" "+document.getElementById("Name"+i).value+" = vex::"+configtypes[i]+"( vex::PORT"+document.getElementById("Port"+i).value+", "+document.getElementById("Reversed"+i).checked+" );");
    } else if (configtypes[i] == 'vision') {
      document.getElementById("opt"+i).innerHTML = ("vex::"+configtypes[i]+" "+document.getElementById("Name"+i).value+" = vex::"+configtypes[i]+"( vex::PORT"+document.getElementById("Port"+i).value+" );");
    } else {
      document.getElementById("opt"+i).value = 'Select device type';
    }
  }
}

function settype(x, y) {
  map=[
    "motor",
    "vision"];
  configtypes[x] = map[y];
  document.getElementById("type"+x).innerHTML = map[y]
}

function CopyFn() {
  copyable = !copyable
  document.getElementById("TVCT").innerHTML = (copyable ? "Hide" : "Show") + " Copyable Text"
  if(copyable) {
    document.getElementById("copyLabel").innerHTML = document.getElementById("opt0").innerHTML+"</br>"+document.getElementById("opt1").innerHTML+"</br>"+document.getElementById("opt2").innerHTML+"</br>"+document.getElementById("opt3").innerHTML 
    
    
    //Add more outputs to this line when creating new rows
  } else {
    document.getElementById("copyLabel").innerHTML = ""
  }
}





//vex::motor RightMotor       = vex::motor( vex::PORT10, true );