
function prikazPoruke(){
    let poruka = document.getElementById("pitanje");
    let pitanje = document.getElementById("pitanje").value.trim();
    if(pitanje != null  && pitanje != ""){
        alert("Vaše pitnaje je: " + pitanje);
        poruka.value = "";
    }else{
        alert("Pitanje mora sadržati bar 3 slova.");
        poruka.value = "";
    }
}