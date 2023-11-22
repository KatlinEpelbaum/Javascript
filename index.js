/*
*MUUTUJAD: 
*
*CONST- Väärtus mida ei saa muuta hiljem
*LET- väärtus mida saab muuta hiljem
*Näited:
*/
const constVariable = "Seda me ei saa hiljem muuta.";
let letVariable = "Seda me saame hiljem muuta.";

/*
*ANDMETÜÜBID:
*
*String- on alati jutumärkides. Näide: "Tere"
*Number- Numbrid, neid ei pea jutumärkidesse panema. Näide: 5
*Boolean- True/False
*Array- Sinna sisse saab panna stringe, numberid,booleane jne. Neid alati ümbritseb []. Näide: ["Tere", 5, true]
*Object- Objektis on key(võti), ja selle väärtus, neid alati ümbritseb {}. Näide: {key:"Väärtus", key2:"Väärtus2"}
*/
const dataTypesObject = {
    string: "Tere",
    number: 15,
    boolean: true,
}
const arrayForArray = ["String", 15, true];
/*
*IF-ELSE(CONDITIONALS):
*
*If/else if/else
*
*Annab kontrollida olukorda, näiteks kui number on alla 5, liidab 5 juurde, aga kui on üle viie võtab 5 ära.
*/
const musicLessons = false;

if (musicLessons === true) {

    return "Depression";

}else{

    return "Happy";
}

/*
*LOOPS:
*1) For loopi näide:
*/
const headPhones = ["Headphone1", "Headphone2", "Headphone3", "Headphone4"];

for (let index = 0; index < headPhones.length; index++) {
    console.log(headPhones[index])
}

/*
*Kuidas see töötab:
*
*1. Esimese indeksi väärtus on 0.
*2. Teiseks kontrollitakse kas indeksi väärtus on väiksem kui array pikkus.
*3. Kui on väiksem, aktiveeritakse loopi sees olev koodiplokk ja lisatakse indeksile 1 juurde.
*4. Seda tehakse seni, kuni indeksi väärtus on suurem kui array pikkus. Peale seda peatakse kood.
*
*2) forEach loop näide:
*/
const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

headPhones.forEach((headphone) => {
    console.log(headphone);
});

/*
*Kuidas see töötab:
*
*forEach() kasutatakse Arrays, see käivitab igale elemendile ette antud funktsiooni ühe korra.
*
*3) For...In näide:
*/
const arrayOfColors = [
    "Roosa",
    "Lilla",
    "Punane",
    "Sinine",
];

for(const color in arrayOfColors) {
    const editedColors = color.toUpperCase();
    console.log(editedColors)
};
/*
*Kuidas see töötab:
*
*Seda kasutame rohkem objektide puhul, array puhul tagastab indeksi.
*Võimaldab juurdepääsu igale objekti omadusele ja väärtusele, teadmata selle omaduse konkreetset nime. 
*
*4) For...Of näide:
*/
for(const color of arrayOfColors) {
    const editedColors = color.toUpperCase();
    console.log("for...of:", editedColors)
};

/*
*Kuidas see töötab:
*
*Tagastab väärtuse (kas objekt või array).
*/

/*
*FUNKTSIOONID:
*
*Keyword on function(), neil on parameetrid.
*Parameeter on "placeholderid", mis võtavad enda sisse andmed ehk muutuja,see annab võimaluse sul neid andmeid funktsiooni sees kasutada.
*
*Näide:
*/
function adding(number1, number2) {

    return number1 + number2;

}

console.log(adding(3, 6));

/*
*Arrow Funktsioon:
*Arrow funktsioon on teine viis tavalisest funktsioonist, mis näeb puhtam välja.
*/
const areaCalculator = (side1 = 1, side2 = 1) => {
    const answer = side1 * side2;
    return answer;
};
console.log(areaCalculator(3, 4));

/* IIFE Funktsioon:
* IIFE funktsioon on isekäivituv funktsioon
*Näide
*/
(function () {
    console.log("Hakkas tööle");
})();

/* 
*See töötab ka arrow funktsioonina samamoodi
*/
(() => {
    console.log("Arrow funktsioon töötab ka nii");
})();

