console.log("radi");

//DEKLARACIJA POTREBNIH PORMENJIVIH

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const lista = document.querySelector(".nav-menu");
const newl = document.createElement("li");
const newl_a = document.createElement("a");
const textNewl = document.createTextNode("Poseti nas");

//DODAVANJE NOVOG ČLANA U LISTI MENI KAKO BI PRILIKOM
//KLIKA NA BURGER MENI UBACIO I LINK ZA STRANU POSETI NAS

newl_a.appendChild(textNewl);
newl_a.href = "form.html";
newl.appendChild(newl_a);

newl.classList.add("nav-item");

//OTVARANJE BURGER MENIJA I TOGLOVANJE KLASE ACTIVE
//KOJA JE U CSS-U POSTAVNJENA DA SIFTUJE MENI PO HORIZNOTALNOJ LINIJI

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    newl_a.classList.add("menu-item");
    lista.append(newl);
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("actice");
  navMenu.classList.remove("active");
}))

const arr = document.getElementsByClassName("nav-item");

for(const element of arr){
  element.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
}






