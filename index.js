//Ejercicio Complementario
//Clase: 30325
//Alumno: Catalano Marco

let var1=prompt("Ingrese su email: ");
let var2;

for (let i of var1){
    if (i=="@"){
        var2=true;
        break;
    }else{
        var2=false;
        
}}
if(var2){
    alert("Usted ingreso un mail correcto")
    alert("Su mail es: "+var1);
}
else{
    alert("Ingreso un mail incorrecto");
} 


