function GreenPop(e) {
    document.getElementById("GreenBox").style.animationName = "GreenBoxPop";
    document.getElementById("GreenBox").style.animationDirection = "normal";
    document.getElementById("CancelButton").disabled = true;
    document.getElementById("NewKeyButton").disabled = true;
    setTimeout(function() {
        document.getElementById("NewKeyScreen").style.display = "block";
    }, 500)
    setTimeout(function() {
        document.getElementById("GreenBox").style.animationName = "";
        document.getElementById("CancelButton").disabled = false;
        document.getElementById("NewKeyButton").disabled = false;
    }, 3000);
}

function GreenDis(e) {
    document.getElementById("GreenBox").style.animationName = "GreenBoxPop";
    document.getElementById("CancelButton").disabled = true;
    document.getElementById("NewKeyButton").disabled = true;
    document.getElementById("GreenBox").style.animationDirection = "normal";
    setTimeout(function() {
        document.getElementById("NewKeyScreen").style.display = "none";
    }, 500)
    setTimeout(function() {
        document.getElementById("GreenBox").style.animationName = "";
        document.getElementById("CancelButton").disabled = false;
        document.getElementById("NewKeyButton").disabled = false;
    }, 3000);
}

var keysizeSlider = document.getElementById("keySize");
keysizeSlider.value = 2;

var keysize = keysizeSlider.value * 1024;

keysizeSlider.addEventListener("input", function() {
    document.getElementById("keySizeText").innerHTML = Math.round(keysizeSlider.value) * 1024;
    keysize = Math.round(keysizeSlider.value) * 1024;
    console.log("Keysize: " + keysize);
})

keysizeSlider.addEventListener("change", function() {
    keysizeSlider.value = Math.round(keysizeSlider.value);
})