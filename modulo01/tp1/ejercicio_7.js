let dato, resultado;
val1 = window.prompt("Introduce tu nombre", "...");
val2 = window.prompt("Introduce tu apellido", "...");
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ;
document.write(resultado);
//Declara la variable resultado, luego las variables val1 y val2, con el resultado de window.prompt, donde se le pide al usuario
//que ingrese su nombre y su apellido.
//Asigna a la variable resultado, la string: 'cancatenado tu nombre y tu apellido es' + las variables val1 y val2
//Luego inserta en el body de index.html la variable resultado