import * as config from "../config.js"
import * as utils from "../utils.js"

let yubikey = document.getElementById('yubikey');
let responseBox = document.getElementById("response")

yubikey.addEventListener("keyup", async(event) => {
    if (event.code == "Enter") {
        await verifyYubikey()
    }
});

async function verifyYubikey() {
    let response = await fetch(`${config.backendURL}/yubikey/verify/${yubikey.value}`)
    response = JSON.parse(await response.text())
    
    if(response.user != null) {
        responseBox.innerHTML = "Key is verified as "+response.user+"'s key"
    } else {
        responseBox.innerHTML = "Key is "+response.keyStatus
    }
}