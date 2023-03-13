let num = 6 + 4
let vcs = "Labas"
let relationship = (vcs == num)

console.log(num + ", " + vcs + ", " + relationship)
console.log(`Mokomės JS: ${num}, ${vcs}, ${relationship}`)

let name = "Laura"
let surname = "Zelionkienė"
let person = name + " " + surname
console.log(person)

let num1 = 4
let num2 = "4"

let tekstas = "Pirmas"

console.log(tekstas.length)
console.log(tekstas.toUpperCase())
console.log(tekstas.toLowerCase())
console.log(tekstas.charAt(1))
console.log(tekstas.indexOf("r"))

tekstas = "Cia gali buti Jusu reklama!"

console.log(tekstas.replace("gali buti", "yra"))
console.log(tekstas.substring(4, 14))
console.log(tekstas.substring(14))
console.log(tekstas.substr(4, 9))

let x = 6.34
console.log(Math.round(x))
console.log(Math.ceil(x))
console.log(Math.floor(x))

let y = 5.8
let z = 9

console.log(Math.max(x,y,z))
console.log(Math.min(x,y,z))

let i = Math.random() * 50
console.log(Math.round(i))

let a = Math.floor(Math.random() * (26 - 16 +1) + 16) // atsitiktinis skaicius nuo 16 iki 26 (+16, pridedam minimuma)
//Math.random() generuoja skaicius tarp 0 ir 1
// * (max - min + 1) + min
console.log(a)

if ( y == z) {
    console.log("Lygus skaiciai")
} else {
    console.log("Nelygus skaiciai")
}

// if (kr1 + kr2 > kr3 && kr1 + kr)

b = 1
while (b <= 10) {
    console.log(b)
    b = b + 1
}

for(let b = 1; b<=10; b++) {
    console.log(b)
}

// 1+2+3+4+5+5+7+8+9+10

let suma = 0
for(let i = 1; i <= 10; i++) {
    suma += i // suma = suma + i
}
console.log(suma)

//suma = 0, 1, 3, 6, 10, 15, 21, 28, 39, 45, 55
// i = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

let s = 0
let skaiciai = [10, 20, 30, 40, 50, 60, 70, 80]

for(let i = 0; i < skaiciai.lennght; i++) {
    s += skaiciai[i]
}
console.log(s)

// alert("Demesio! Virusas!")
// confirm("Ar valgysi pietus?")
// prompt("Kiek tau metu?")

/*let turimVarda = false;

while (turimVarda == false) {
    let userVardas = prompt ("Koks tavo vardas?");

if(userVardas) {
    if(confirm(`Ar tikrai tavo vardas ${userVardas}?`)) {
        alert(`Labas, ${userVardas}!`);
        turimVarda = true;
    } else {
        alert("Bandyk dar kart.");
    }
 } else {
    alert("Bandyk dar kart.");
 }
}
*/

function sumOfCubes(a, b) {
    return a*a*a + b*b*b
}
let atsakymas = sumOfCubes(7, 9)
console.log(atsakymas)

let hi = "Labas"
function hello(a) {
    console.log("Labas")
}

hello("hi")

let studentai = ["Lukas", "Rita", "Martynas", "Rasa", "Klaudijus"]
console.log(studentai[3])

studentai[3] = "Laura"
console.log(studentai[3])

console.log(studentai.length)

console.log(studentai)

for(let i = 0; i < studentai.length; i++) {
    console.log(studentai[i])
}

studentai.pop()
console.log(studentai)

studentai.push("Tomas")
console.log(studentai)

let darbuotojai = ["Ieva", "Andrius", "Ugne", "Migle"]
for(let i = 0; i < darbuotojai.length; i++) {
console.log(darbuotojai[i])
}

darbuotojai.pop()
console.log(darbuotojai)
darbuotojai[2] = undefined
console.log(darbuotojai)
darbuotojai.push("Jurga")
console.log(darbuotojai)

let mokykla = [studentai, darbuotojai]

console.log(mokykla)
console.log(mokykla[1][2])

console.log(mokykla[0][2])


