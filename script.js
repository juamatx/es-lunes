
const d = new Date();
let day = d.getDay();

console.log(day)
if(day===0){
    document.getElementById('lunes').innerText = 'Es Lunes'
    document.styleSheets[0].insertRule(":root{background-color: #F97D0B;}")
}
else{
    document.getElementById('lunes').innerText = 'No es Lunes'
    document.styleSheets[0].insertRule(":root{background-color: black;}")
    
}