
// FUNKCIJA KOJA SLUŽI ZA VALIDACIJU FORME VRAĆA TRUE AKO
//SU PODACI LEPO UNETI U SUPROTNOM VRAĆA FALSE KADA SE PRITISNE DUGME TIMA SUBMIT
function validateForm(){ 

  //DEKLARACIJA POTREBNIH PROMENJIVIH

    let Ime = document.getElementById('ime').value.trim();
    let Prezime = document.getElementById('prezime').value.trim();
    let Brojtelefona = document.getElementById('brojtelefona').value.trim();
    let Email = document.getElementById('email').value.trim();

    //DEKLARACIJA POTREBNIH LABELA ČIJI SE TEKST MENJA UKOLIKO NEKI OD PODATAKA NISU
    //LEPO UNETI
        const imeError = document.getElementById('imeError');
        const prezimeError = document.getElementById('prezimeError');
        const emailError = document.getElementById('emailError');
        const telefonError = document.getElementById('telefonError');

        //INICIJALIZACIJA BOOLEAN PROMENJIVE KOJA VRAĆA TRUE AKO
        //SU PODACI LEPO UNETI U SUPROTNOM VRAĆA FALSE
        var val = true;

    //PROVERA UNETIH PODATAKA
      
    if (Ime==null || Ime=="" || !isUpper(Ime)){ 
      //PROMENA SADRŽAJA LABELE KOJA NAS OBAVEŠTAVA DA NISMO LEPO UNELI IME
      imeError.textContent="Niste uneli ispravno ime.";
      val = false;  
    }else{
      imeError.textContent="";
    }
    if(Prezime.length<6 || Prezime=="" || Prezime==null || !isUpper(Prezime)){  
      prezimeError.textContent="Niste uneli ispravno prezime."; 
      val = false; 
    }else{
      prezimeError.textContent="";
    }
    if (Email.indexOf("@")<1 || Email.lastIndexOf(".")<Email.indexOf("@")+2 || Email.lastIndexOf(".")+2>=Email.length){  
        emailError.textContent = "Niste uneli ispravan email"; 
        val = false;  
    }else{
        emailError.textContent="";
    }
    if(!(Brojtelefona.length==9) && !(Brojtelefona.length==10)){
        telefonError.textContent="Niste uneli ispravno broj telefona";
        val = false;
    }else{
        telefonError.textContent="";
    }

    //PROVERA PPROMENJIVE VAL
    if(!val){
      return false;
    }else{
      //ISPIS UNETIH PODATAKA AKO SU DOBRO UNETI
    alert(
      "Ime: "+Ime+
      "\nPrezime "+Prezime+
      "\nemail: "+Email+
      "\nbroj telefona: "+Brojtelefona+""
    )
    return true;
    }
 } 

 //POMOĆNA FUNKCIJA KOJA PROVERAVA DA LI JE PRVO SLOVO VELIKO
 function isUpper(str){
  return /[A-Z]/.test(str);
 }



