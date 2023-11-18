function validateForm() {
    var ime = document.getElementById('ime').value.trim();
    var prezime = document.getElementById('prezime').value.trim();
    var email = document.getElementById('email').value.trim();
    var telefon = document.getElementById('brojtelefona').value.trim();

    function check(){
        const imeError = document.getElementById('imeError');
        const prezimeError = document.getElementById('prezimeError');
        const emailError = document.getElementById('emailError');
        const telefonError = document.getElementById('telefonError');
        let valid = true;
    
    
        function setError(element, message) {
            element.textContent = message;
            valid = false;
        }
    
        function clearError(element) {
            element.textContent = '';
        }
    
        if (ime.length < 3 || ime.length > 20) {
            setError(imeError, 'Ime mora biti između 3 i 20 karaktera.');
        } else if (!ime.match(letters) || !isUpper(ime[0])) {
            setError(imeError, 'Dozvoljena su samo slova za ime i prvo slovo mora biti veliko.');
        } else {
            clearError(imeError);
        }
    
        if (prezime.length < 3 || prezime.length > 20) {
            setError(prezimeError, 'Prezime mora biti između 3 i 20 karaktera.');
        } else if (!prezime.match("/^[A-Za-z]+$/") || !isUpper(prezime[0])) {
            setError(prezimeError, 'Dozvoljena su samo slova za prezime i prvo slovo mora biti veliko.');
        } else {
            clearError(prezimeError);
        }
    
        if (email.indexOf("@")<1 || email.lastIndexOf(".")<email.indexOf("@")+2 || email.lastIndexOf(".")+2>=email.length) {
            setError(emailError, 'Unesite validnu email adresu.');
        } else {
            clearError(emailError);
        }
    
        if (!telefon.match("[0-9]{3}/[0-9]{[6-7]}")) {
            setError(telefonError, 'Neispravan broj telefona.');
        } else {
            clearError(telefonError);
        }
    
        function isUpper(str){
            return /[A-Z]/.test(str);
        }
    
        return valid;
    }
 
    if(check() == true){
        alert("Ime "+ime+"\n"+"Prezime je "+prezime+"\n");
        return true;
    }
    else{
        return false;
    }
}

