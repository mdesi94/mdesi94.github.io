//A. 
const lucasMass= 78
const johnMass= 92

const lucasHeight=1.69
const johnHeight=1.95

const lucasBMI = lucasMass/lucasHeight**2
const johnBMI= johnMass/johnHeight**2

console.log(lucasBMI);
console.log(johnBMI);

let lucasHigherBMI = `Lucas has a higher BMI than John`

if (lucasBMI > johnBMI) {
    console.log(lucasHigherBMI);
}
else {
    console.log(`Lucas does not have a higher BMI than John`)
}

//B.

let celTemp = 30;

let farTemp = celTemp * 1.8 + 32;

console.log(`${celTemp} degrees celsius is ${farTemp} degrees farenheit`);

let farTemp2 = 30;

let celTemp2 = (farTemp2 - 32) * .5556;

console.log(`${farTemp2} degrees farenheit is ${celTemp2} degrees celsius`);


//C. 

let k1 = 88
let k2 = 91
let k3 = 110

let n1 = 96
let n2 = 108
let n3 = 89

let kAverage = (k1+k2+k3) / 3

let nAverage = (n1+n2+n3) / 3

if (kAverage > nAverage) {
    console.log(`The Knicks win the trophy!`)
}
else if (kAverage == nAverage) {
    console.log(`It's a draw!`)
}
else {
    console.log('The Nets win the trophy!')
}

//Bonus 1

let k4 = 109
let k5 = 95
let k6 = 123

let n4 = 97
let n5 = 112
let n6 = 101

let kAverage1 = (k4+k5+k6) / 3

let nAverage1 = (n4+n5+n6) / 3

if (kAverage1 > nAverage1 && kAverage1 >= 100) {
    console.log(`The Knicks win the trophy!`)
}
else if (kAverage1 == nAverage1) {
    console.log(`It's a draw!`)
}
else if (nAverage1 > kAverage1 && nAverage1 >= 100) {
    console.log(`The Nets win the trophy!`)
}
else {
    console.log('There is no winner')
}

//Bonus 2

let k7 = 109
let k8 = 95
let k9 = 106

let n7 = 97
let n8 = 112
let n9 = 101

let kAverage2 = (k7+k8+k9) / 3

let nAverage2 = (n7+n8+n9) / 3

if (kAverage2 > nAverage2 && kAverage2 >= 100) {
    console.log(`The Knicks win the trophy!`)
}
else if (kAverage2 == nAverage2 && kAverage2 >= 100 && nAverage2 >= 100) {
    console.log(`It's a draw!`)
}
else if (nAverage2 > kAverage2 && nAverage2 >= 100) {
    console.log(`The Nets win the trophy!`)
}
else {
    console.log('There is no winner')
}