
function edadDni() {
    let ingresante = parseInt(-1);
    let edad = parseInt(prompt("Ingrese su edad"));
    alert(`su edad es de ${edad}`);
    if (edad >= 21) { 
        alert("Puede comprar su entrada en campo General Azul o Vip Blanco");
        ingresante = 2
    } else if (edad >= 18) {
        alert("Puede comprar su entrada en campo General Verde");
        ingresante = 1
    } else if (edad > 0) {
        alert("No puede comprar entradas, no cumple con el requisito minimo de edad");
        ingresante = 0 
    } return ingresante
} 

condicion = edadDni();
while (true) {
    if (condicion != -1) {
       break; 
    } 
    alert("Edad invalida, por favor ingrese un valor mayor a 0")
    condicion = edadDni();
}

function valorEntrada (condicion) {
    const gverde = parseInt(5000)
    const gazul = parseInt(7000)
    const vblanco = parseInt(10000)
    if (condicion === 1) {
        alert(`El valor de la Entrada del Campo General Verde: $${gverde}`);
    } else {
        alert(`El valor de la Entrada del Campo General Azul: $${gazul}\nEl Vip Blanco: $${vblanco}`)
    }
}

if (condicion != 0) {
    valorEntrada(condicion)
}