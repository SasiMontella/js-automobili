//Creare un array composto da 10 automobili. Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, elettrica, ibrida, gpl).
//Dividi le automobili in 3 array separati: un array solo benzina, un array solo diesel e nel terzo tutte le altre.
//Stampare i tre array separatamente


let autoList = [
    { marca: "BMW", modello: "Serie 3", alimentazione: "Diesel"},
    { marca: "Fiat", modello: "Panda", alimentazione: "Benzina"},
    { marca: "Tesla", modello: "Model X", alimentazione: "Elettrica"},
    { marca: "Citroen", modello: "C3", alimentazione: "Diesel"},
    { marca: "Lamborghini", modello: "Urus", alimentazione: "Benzina"},
    { marca: "Chevrolet", modello: "Camaro SS", alimentazione: "Benzina"},
    { marca: "Ferrari", modello: "Roma", alimentazione: "Benzina"},
    { marca: "Renault", modello: "208", alimentazione: "Ibrida"},
    { marca: "Ford", modello: "Fiesta", alimentazione: "Diesel"},
    { marca: "Jaguar", modello: "F-PACE", alimentazione: "Elettrica"}
]

let autoBenzina = [];
let autoDiesel = [];
let autoRemain = [];

autoList.forEach (function(element) {
    if (element.alimentazione == "Benzina"){
        autoBenzina.push(element);
    } else if (element.alimentazione == "Diesel"){
        autoDiesel.push(element);
    } else {
        autoRemain.push(element);
    }
});

console.log (autoBenzina);
console.log (autoDiesel);
console.log (autoRemain);




//-------------FUNZIONI------------
