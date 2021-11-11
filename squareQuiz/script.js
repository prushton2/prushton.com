question = Math.floor(Math.random() * 100)
document.getElementById("number").innerHTML = question

function Check() {
  answer = document.getElementById("Answer").value;
  answer = parseInt(answer)
  if(answer == question**2) {
    document.getElementById("output").innerHTML = "Correct"
  } else {
    document.getElementById("output").innerHTML = "Answer is "+(question**2).toString()
  }
  question = Math.floor(Math.random() * 100)
  document.getElementById("number").innerHTML = question

}