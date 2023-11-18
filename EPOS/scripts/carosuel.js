const next = document.getElementById("next");
const before = document.getElementById("before");

let i = 0;
  
next.addEventListener("click", () =>{
  if(i>=images.length-1){
    i=0;
    imgs.src = images[i];
  }else
    imgs.src = images[++i];
})
before.addEventListener("click", () =>{
  if(i==0){
    i=images.length;
    imgs.src = images[i-1];
  }else
    imgs.src = images[--i];
})