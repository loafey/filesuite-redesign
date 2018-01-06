var HomeButton = document.getElementById("HomeButton");
var EncryptButton = document.getElementById("EncryptButton");
var DecryptButton = document.getElementById("DecryptButton");

var Pages = document.getElementById("Padding").childNodes;

function openPage(PageName) {
    for (var i = 0; i < Pages.length; i++) {
        if (Pages[i].nodeName.toLowerCase() == "div") {
            Pages[i].style.display = "none";
        }
    }

    TempPage = document.getElementById(PageName);
    TempPageChildren = document.getElementById(PageName).childNodes;

    TempPage.style.display = "block";
    for (var i = 0; i < TempPageChildren.length; i++) {
        if (TempPageChildren[i].nodeName.toLowerCase() == "div") {
            TempPageChildren[i].style.display = "block";
        }
    }
}

function closeWindow() {
    alert("This should close the page, but due to the fact that this is not Electron, it wont.")
}