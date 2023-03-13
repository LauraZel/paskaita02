/* 01.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.
*/
let vardas = "Vin"
let pavarde = "Diesel"


if (vardas.length <= pavarde.length) {
    console.log(vardas)
} else {
    console.log(pavarde)
}


/* 02.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms. (LEONARDO dicaprio)
*/

console.log(vardas.toUpperCase(), pavarde.toLowerCase())


/* 03.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/

let varPav = vardas.charAt(0)+pavarde.charAt(0)
console.log(varPav)

/* 04.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/

let varPav1 = vardas.charAt(2)+pavarde.charAt(5)
console.log(varPav1)

/* 05.
Sukurti kintamąjį su stringu: “An American in Paris”. Jame visas “a” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
*/

let amerParis = "An American in Paris"
console.log(amerParis.replace(/a/gi, "*"))


/* 06.
Sukurti kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.
*/

console.log(amerParis.replace(/[aeiou]/gi, ""))

let BrTif = "Breakfast at Tiffany's" 
let SpaceOd = "2001: A Space Odyssey"
let WonLif = "It's a Wonderful Life"

console.log(BrTif.replace(/[aeiou]/gi, ""))
console.log(SpaceOd.replace(/[aeiou]/gi, ""))
console.log(WonLif.replace(/[aeiou]/gi, ""))


/* 07.
Stringe, kurį generuoja toks kodas: "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope"; Surasti ir atspausdinti epizodo numerį.
*/

let kod = "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random()*10))+(Math.ceil(Math.random()*7)+1) + " - A New Hope"

console.log(Math.ceil(Math.random()*7)+1)

/* 08.
Suskaičiuoti kiek stringe “Don't Be a Menace to South Central While Drinking Your Juice in the Hood” yra žodžių trumpesnių arba lygių nei 5 raidės. Pakartokite kodą su stringu “Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale”.
*/

let text = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood"




   
/* 09.
Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
*/

 

/* 10. 
Parašykite kodą, kuris generuotų atsitiktinį stringą su 10 atsitiktine tvarka išdėliotų žodžių, o žodžius generavimui imtų iš 8-me uždavinyje pateiktų dviejų stringų. Žodžiai neturi kartotis. (reikės masyvo)
*/