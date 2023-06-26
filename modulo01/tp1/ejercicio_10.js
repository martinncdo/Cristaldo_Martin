//Crear el archivo “ejercicio_10.js”. Declarar un array llamado “meses” y que tenga guardado los
//meses del año. Luego el usuario debe poder ingresar en el navegador un número de 1 al 12 y este
//le devolverá el nombre del mes. Por ejemplo escribe 5 debe devolver el mes mayo.

let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

let mes = parseInt(window.prompt("Ingrese el número del mes que desea obtener (del 1 al 12)"))

for (let i = 0; i < meses.length; i++){
    if (i === (mes - 1)){
        window.alert(`El mes es ${meses[i]}`);
    }
}