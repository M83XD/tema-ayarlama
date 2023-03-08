function ayarla(deger) {
    console.log("deger okunuyor..."+deger)
const sayfa = document.getElementById("body")
if(deger === 0){
    sayfa.style.backgroundColor="black"
    sayfa.style.color="white"
}
else if(deger === 1){
    sayfa.style.backgroundColor="white"
    sayfa.style.color="black"
}
}
