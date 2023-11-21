//KLIKOM NA DRUGME POŠALJI ŠALJE IZBACUJE ALERT WINDOW SA PORUKOM KOJA JE POLATA
function prikazPoruke(){
    let poruka = document.getElementById("pitanje");
    let pitanje = document.getElementById("pitanje").value.trim();
    if(pitanje != null  && pitanje != ""){
        alert("Vaše pitnaje je: " + pitanje);
        poruka.value = "";
    }else{
        alert("Pitanje nije lepo uneto.");
        poruka.value = "";
    }
}