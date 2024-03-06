function encryptText() {
    var textInput = document.getElementById("text");
    var resultTextarea = document.getElementById("result");
    var clipboardTextarea = document.getElementById("clipboard");
    
    var text = textInput.value;
    var encryptedText = text.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");

    resultTextarea.value = encryptedText;
    clipboardTextarea.value = encryptedText;

    textInput.value = "";
}

function decryptText() {
    var textInput = document.getElementById("text");
    var resultTextarea = document.getElementById("result");
    var clipboardTextarea = document.getElementById("clipboard");

    var text = textInput.value;

    if (!isValidEncryptedText(text)) {
        alert("El texto no se puede desencriptar. Asegúrate de que cumple con las reglas de encriptación.");
        return;
    }

    var decryptedText = text.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");

    resultTextarea.value = decryptedText;
    clipboardTextarea.value = decryptedText;

   
    textInput.value = "";
}

function isValidEncryptedText(text) {
    return /^[a-z]+(enter|imes|ai|ober|ufat)+[a-z]*$/.test(text);
}

function copyToClipboard() {
    var clipboardTextarea = document.getElementById("clipboard");
    
    clipboardTextarea.select();
    document.execCommand("copy");

    alert("Texto copiado al portapapeles");
}


