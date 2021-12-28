let name = prompt("Adın nedir?", "ayhan")

let myName = document.querySelector("#myName")
// myName.innerHTML= 
//     name.length>0 ? name.toUpperCase() :
//     name.length<0 ? alert("Lütfen adınızı giriniz .."):
//     name.toUpperCase() ;
 myName.innerHTML= name.length>0 ? name.toUpperCase() :alert("Lütfen adınızı giriniz ..")
 if(true){
 let name = prompt("Adın nedir?")
 myName.innerHTML= name.length>0 ? name.toUpperCase():alert("başarısız giriş")
 }
 //if(true){window.close()}
 

function tarihSaat(){
    var date = new Date()
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    var dayName = date.getDay()

    switch(dayName){
        case 1:
            dayName="Pazartesi"
            break;
        case 2:
            dayName="Salı"
            break;
        case 3:
            dayName="Çarşamba"
            break;
        case 4:
            dayName="Perşembe"
            break;
        case 5:
            dayName="Cuma"
            break;
        case 6:
            dayName="Cumartesi"
            break;
        case 0:
            dayName="Pazar"
            break;
            
    }

    h = h < 10 ? "0" + h : h; 
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    let timer = `${h} : ${m} : ${s}   ${dayName}`
    document.querySelector("#myClock").innerHTML=timer
    setInterval(tarihSaat,1000)
}
tarihSaat()
