
//Consigna numero 1 y 2.

let usuario = prompt("Ingrese su usuario")
console.log(usuario);

let contraseña = parseFloat(prompt("ingrese su Contraseña"))
console.log(contraseña);

if(usuario == "administrador" && contraseña == 1234){
    alert("Bienvenidx");
    console.log("Bienvenidx");

    let numero1= prompt("Ingrese su primer numero")
    let numero2= prompt("Ingrese su segundo numero")
    let numero3= prompt("Ingrese su tercer numero")

    let mayor= Math.max(numero1, numero2, numero3);
    alert("El mayor de los numeros es " + mayor);
    console.log("El mayor de los numeros es " + mayor);

    let menor= Math.min(numero1, numero2, numero3);
    alert("El menor de los numeros es " + menor);
    console.log("El menor de los numeros es " + menor);
}

else{
    console.log("Alguno de los datos ingresados es incorrecto");
    alert("Alguno de los datos ingresados es incorrecto");
}

//Consigna numero 3.

let saludo = "Hola, espero que estes muy bien!!!"
function button (){
    console.log (saludo);
    alert (saludo);
}
