function Saludar(lista) {
    let {nombre, dirrecion, edad, ...DatosSobrantes} = lista;
    lista = undefined;
}

Saludar({nombre:'Miguel', dirrecion:"Calle 11b", altura: 1.6});














// function Saludar(nombre, apellido, edad) {
//     this.non = nombre;
//     this.ape = apellido;
//     this.eda = edad;
//     nombre = undefined; apellido= undefined; edad = undefined;
//     console.log(`Hola ${nombre} como estas`);
// }

// Saludar.call(this, 'Miguel', "Castro", 24);
// let obj = new Saludar('Miguel', "Castro", 24);