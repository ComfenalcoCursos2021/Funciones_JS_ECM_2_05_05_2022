let nombres = {
    Nombre1: "Miguel",
    Nombre2: "Jose",
    Nombre3: "Carlos", 
    Nombre4: "Maria",
};
let nombres2 = ["Miguel","Jose","Carlos", "Maria"];


let fnA = (Alumnos) => {
    Object.assign(this, Alumnos);
    console.log(this.Nombre1);
    console.log(this.Nombre2);
    console.log(this.Nombre3);
    console.log(this.Nombre4);
};
let fnB = (Nombre1, Nombre2, Nombre3, Nombre4) => {
    console.log(Nombre1);
    console.log(Nombre2);
    console.log(Nombre3);
    console.log(Nombre4);
};
fnA(nombres);
console.log("-------------------------------------");
fnB(...nombres2);