
//JQUERY KOD KOJU SLIKOM NA NASLOV AKTIVNOSTI AKTIVIRA TOOGLE ANIMACIJU
//KOJA PRIKAŽE TEKST O TOJ AKTIVNOSTI

let aktivnosti = $(".opis-aktivnosti");
 
//SAKRIVA TEKST AKTIVNOSTI ULASKOM NA STRANICU
aktivnosti.hide();
let k=true;

//PROVERAVA DA LI JE KORSNIK KLIKUNIO NA PILO KOJI NASLOV IZ KLASE .NASLOV
//I U SKLADU SA TIM TOGLUJE DA LI ĆE SE TEKST PRIKAZATI ILI SKLONITI
for(let i=0;i<aktivnosti.length;i++){
$(".naslov:eq("+i+")").click(function(){
    $(".opis-aktivnosti:eq("+i+")").toggle(100);
    //PROVERAVA DA LI JE STRELICA OKRENUTA NA GORE ILI NA DOLE I U SKLADU SA TIM
    //JE OKREĆE SUPROTNO
    if(k){
        $(".naslov:eq("+i+") i").addClass("fa-solid fa-angle-up");
        k=false;
    }else{
        $(".naslov:eq("+i+") i").removeClass("fa-solid fa-angle-up");
        $(".naslov:eq("+i+") i").addClass("fa-solid fa-angle-down");
        k=true;
    }
})
}