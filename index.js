function encrypt() {
    var plainText = document.getElementById("plainText").value;
    var keyLength = parseInt(document.getElementById("keyLength").value);
    
    var result = "";
    for (var i = 0; i < plainText.length; i++) {
        var charCode = plainText.charCodeAt(i);
        var encryptedCharCode;

        if (charCode >= 65 && charCode <= 90) { 
            encryptedCharCode = ((charCode - 65 + keyLength) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
            encryptedCharCode = ((charCode - 97 + keyLength) % 26) + 97;
        } else { // Non-alphabetic characters
            encryptedCharCode = charCode;
        }

        result += String.fromCharCode(encryptedCharCode);
    }

    document.getElementById("cipherText").value = result;
}
