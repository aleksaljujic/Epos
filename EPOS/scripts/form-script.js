function validateForm(){  
    let Ime = document.getElementById('ime').value.trim();
    let Prezime = document.getElementById('prezime').value.trim();
    let Brojtelefona = document.getElementById('brojtelefona').value.trim();
    let Email = document.getElementById('email').value.trim();
    // let Datum = document.getElementById('datum').value;

        const imeError = document.getElementById('imeError');
        const prezimeError = document.getElementById('prezimeError');
        const emailError = document.getElementById('emailError');
        const telefonError = document.getElementById('telefonError');

        var val = true;
      
    if (Ime==null || Ime=="" || !isUpper(Ime)){  
      // alert("Niste lepo uneli ime");
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

    if(!val){
      return false;
    }else{
    alert(
      "Ime: "+Ime+
      "\nPrezime "+Prezime+
      "\nemail: "+Email+
      "\nbroj telefona: "+Brojtelefona+""
    )
    return true;
    }
 } 

 function isUpper(str){
  return /[A-Z]/.test(str);
 }




