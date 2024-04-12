var boton = document.getElementById('btnCalcular');
boton.addEventListener ("click", promedio);

function promedio(){
    var num1 = parseInt(document.getElementById('parcial1').value) 
    var num2 = parseInt(document.getElementById('parcial2').value)
    var num3 = parseInt(document.getElementById('parcial3').value)
    var num4 = parseInt(document.getElementById('ordinario').value)
    var resultado; 
    var prom;

    resultado = (num1+num2+num3)/3;
    prom = (resultado+num4)/2;

    document.getElementById('Prom_final').innerHTML = prom;
}