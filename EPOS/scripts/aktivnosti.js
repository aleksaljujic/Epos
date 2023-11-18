let aktivnosti = $(".opis-aktivnosti");
 
aktivnosti.hide();
 
// var naslov = $(".naslov");

let icon = ["up" , "down"];
let k=true;
for(let i=0;i<aktivnosti.length;i++){
$(".naslov:eq("+i+")").click(function(){
    $(".opis-aktivnosti:eq("+i+")").toggle(100);
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