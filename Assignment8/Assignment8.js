//A.
const meal = 'breakfast'

if (meal === 'breakfast'|| 'lunch') {
    console.log('coffee + bagel')
}
else if (meal === 'dinner') {
    console.log('pasta')
}
else { 
   console.log('no food')
}

//B1.
function foodFor4(originalFood){
    return originalFood * 4;
}
function timeFor4(originalTime){
    return originalTime * 4;
}

function microwave(foodWeight, time, mode){

   const food4 = foodFor4(foodWeight)
   const time4 = timeFor4(time)

  const readyToEat =  `Your food weight is ${food4} ounces for 4 people and will be heated for ${time4} minutes under ${mode}`;
  return readyToEat;

}

const food = microwave(80, 20, 'reheat');
console.log(food)


//B2.

let billAmt = 430
//let billAmt = 28
//let billAmt = 275

const normalTip = billAmt * .15
const otherTip = billAmt * .20

const normalTotal = billAmt + normalTip
const otherTotal = billAmt + otherTip

50 < billAmt < 300 ? console.log(`The bill came out to ${billAmt}, the tip was ${normalTip}, and the total was ${normalTotal}`): 
console.log(`The bill came out to ${billAmt}, the tip was ${otherTip}, and the total was ${otherTotal}`);

//C.

//TEST DATA 2: Nets score 85, 54 and 41. Knicks score 23, 34 and 27

var knicks = {
    s1: 65,
    s2: 54,
    s3:49
}

var nets = {
    s1: 44,
    s2: 23,
    s3: 71
}

let calcAvg = (s1, s2, s3) => (s1 + s2 + s3) / 3;

let knicksAvg = calcAvg(knicks);
let netsAvg = calcAvg(nets);

function checkWinner(netsAvg, knicksAvg) {
   
    if (netsAvg >= (knicksAvg * 2)) {
            console.log(`Nets win ${netsAvg} to ${knicksAvg}!`) }

    else if (knicksAvg >= (netsAvg * 2)) {
         console.log(`Knicks win ${knicksAvg} to ${netsAvg}!`) }
         
    else {
         console.log(`There is no winner!`);
        }
}

//D.
let celTemp1 = 30;

let farTemp1 = celTemp1 * 1.8 + 32;

console.log(`${celTemp1} degrees celsius is ${farTemp1} degrees farenheit`);


let farTemp2 = 20;

let celTemp2 = farTemp2 - 32 * .5556;

console.log(`${farTemp2} degrees farenheit is ${celTemp2} degrees celsuis`);