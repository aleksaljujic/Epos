
//DEKLARACIJA PROMANJIVIH KOJI SU TIMA DUGME
const next = document.getElementById("next");
const before = document.getElementById("before");

//DEKLARACIJA PROMENJIVR IMGS KOJI UZIMA DOM ELEMENT SLIKE KOJI SE NALAZI NA POČETNOJ STRANI
const imgs = document.getElementById("info-img");

//BROJAČ
let i = 0;

let images = ["img/kop-staza.jpg","img/kop-noc.jpg","img/kopaonik-brdo.jpg","img/kop-staza2.jpg"];


//KLIKOM NA DRUGME NEXT I SE INKREMENTIRA ZA 1 I PROMENJIVA IMGS ĆE PROMENITI SVOJ SOURCE ZA 
//I-TI ELEMENT NIZA IMAGES

next.addEventListener("click", () =>{
  //USLOV KOJI SLUŽI ZA TO DA OGRANIČI I DA SE INKREMENTIRA DO DUZINE NIZA - 1
  //KAKO BI IZBEGLI PRISTUP NEPOSTOJEĆEM ELEMENTU
  //I VRATILI I NA 0 TJ. NA POČETAK NIZA
  if(i>=images.length-1){
    i=0;
    imgs.src = images[i];
  }else
    imgs.src = images[++i];
})
//RADI ISTO ŠTO I PREDHODNA FUNCKIJA SAMO DEKREMENTIRA I
before.addEventListener("click", () =>{
    //SLIČNO KAO I U PREDHODNOM SLUČAJU SAMO ŠTO ONEMOGUĆUJEMO I NA POSTANE NEGATIVAN BROJ
    //I VRAĆAMO NA INDEKS POSLEDNJEG ČLANA NIZA IMGS
  if(i==0){
    i=images.length;
    imgs.src = images[i-1];
  }else
    imgs.src = images[--i];
})