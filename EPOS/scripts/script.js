console.log("radi");

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const lista = document.querySelector(".nav-menu");
const newl = document.createElement("li");
const newl_a = document.createElement("a");
const textNewl = document.createTextNode("Poseti nas");
const imgs = document.getElementById("info-img");

newl_a.appendChild(textNewl);
newl_a.href = "form.html";
newl.appendChild(newl_a);

newl.classList.add("nav-item");

const images = ["img/kopaonik-brdo.jpg","img/kop-noc.jpg","img/kop-staza2.jpg"];

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
    // lista.remove(newl);
  })
}






