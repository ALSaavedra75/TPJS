function compra(){
    let c1 = document.getElementById("Cantidad").value;
    let fp = document.getElementById("Pago").value;
    let valor = 30000;

    let porc = ((valor * fp) / 100) ;
    let totValor = ((valor - porc) * c1)

console.log(porc);
console.log(totValor);

document.getElementById("total").innerText = totValor
}

function limpiar() {
    document.getElementById('total').innerHTML = '';
    document.getElementById('form_id').reset();
  }
  
var x = document.getElementById('btnCalcular');
x.addEventListener('click', compra);

var y = document.getElementById('btnLimpiar');
y.addEventListener('click', limpiar);








