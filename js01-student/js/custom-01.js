/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/
let dabar = new Date().getFullYear()
let vardas = "Laura"
let pav = "Zel"
let gim = 1981
console.log("AŠ esu " + vardas +" " + pav +". Man yra " + (dabar-gim) + " metai(-ų).")


/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/
let i = Math.round(Math.random() * 4)
console.log(i)
let a = Math.round(Math.random() * 4)
console.log(a)
if (i == 0 || a == 0) {
    console.log("Dalyba negalima")
} else if (i>=a) {
    console.log((i/a).toFixed(2))
} else {
    console.log((i/a).toFixed(2))
}


/* 03.d
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/
let b = Math.round(Math.random() * 25)
console.log(b)
let c = Math.round(Math.random() * 25)
console.log(c)
let d = Math.round(Math.random() * 25)
console.log(d)

let didelis = Math.max(b,c,d)
let mazas = Math.min(b,c,d)
let vidurys 

if (b != didelis && b != mazas) {
    vidurys=b
} else if (c != didelis && c != mazas) {
    vidurys=c
}  else if (d != didelis && d != mazas) {
    vidurys=d
} else {
    vidurys="neimanomas"
}

console.log("Vidurinis skaičius yra " + vidurys)


/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
let kr1 = Math.ceil(Math.random() * 10)
console.log(kr1)
let kr2 = Math.ceil(Math.random() * 10)
console.log(kr2)
let kr3 = Math.ceil(Math.random() * 10)
console.log(kr3)
let trikampis

if (kr1 + kr2 > kr3 && kr2 + kr3 > kr1 && kr3 + kr1 > kr2) {
   console.log("trikampis")
} else {(kr1 + kr2 < kr3 && kr2 + kr3 < kr1 && kr3 + kr1 < kr2)
console.log("trikampis negalimas")}



/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
let sk1 = Math.round(Math.random() * 2) 
let sk2 = Math.round(Math.random() * 2) 
let sk3 = Math.round(Math.random() * 2) 
let sk4 = Math.round(Math.random() * 2) 
console.log(sk1,sk2,sk3,sk4)

let nulis = 0
let vienas = 0
let du = 0

if (sk1 == 0) {
    nulis = nulis + 1
}

if (sk2 == 0) {
    nulis = nulis + 1
}

if (sk3 == 0) {
    nulis = nulis + 1
}

if (sk4 == 0) {
    nulis = nulis + 1
}


if (sk1 == 1) {
    vienas = vienas + 1
}

if (sk2 == 1) {
    vienas = vienas + 1
}

if (sk3 == 1) {
    vienas = vienas + 1
}

if (sk4 == 1) {
    vienas = vienas + 1
}


if (sk1 == 2) {
    du = du + 1
}

if (sk2 == 2) {
    du = du + 1
}

if (sk3 == 2) {
    du = du + 1
}

if (sk4 == 2) {
    du = du + 1
}

console.log(nulis,vienas,du)


/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/

let skai1 = Math.floor(Math.random() * (10 - -10 + 1) - 10) 
let skai2 = Math.floor(Math.random() * (10 - -10 + 1) - 10) 
let skai3 = Math.floor(Math.random() * (10 - -10 + 1) - 10) 
console.log(skai1,skai2,skai3)


if (skai1 == 0) {
    console.log("(" + skai1 + ")")
}

if (skai2 == 0) {
    console.log("(" + skai2 + ")")
}

if (skai3 == 0) {
    console.log("(" + skai3 + ")")
}

if (skai1 < 0) {
    console.log("[" + skai1 + "]")
}

if (skai2 < 0) {
    console.log("[" + skai2 + "]")
}

if (skai < 0) {
    console.log("[" + skai3 + "]")
}3

if (skai1 > 0) {
    console.log("[" + skai1 + "]")
}

if (skai2 > 0) {
    console.log("[" + skai2 + "]")
}

if (skai3 > 0) {
    console.log("[" + skai3 + "]")
}

/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/



/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/



/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/



/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

