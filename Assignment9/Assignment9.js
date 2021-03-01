//A1.

let bill;
const bills = [125, 155, 144];


function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
        
    }
    else {
        return bill * 0.2;
       
    }
}


var tips = bills.map(calcTip);
console.log(tips);






//A2.

var john = {
    firstName: 'John',
    lastName: 'Willams',
    birthYear: 1996,
    job: 'student',
    friends: ['Mike', 'Jack', 'Peter'],
    calAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
    },
} 
    
    getSummary =  function () {
        if (this.age >= 18) {
            console.log(`${firstname} ${lastname} is ${calAge} years old, and has a driver's license`);
        }
        else {
            console.log(`${firstname} ${lastname} is ${calAge} years old, and does not have a driver's license`);
        }
    
    }


// B

var lucas = {
    firstname: 'Lucas',
    lastname: 'Miller',
    height: 1.69,
    weight: 78,
    bmi: function(height, weight) {
        return weight / (height ** 2);
    bmi = this.bmi();
    }

};

var john = {
    firstname: 'John',
    lastname: 'Smith',
    height: 1.95,
    weight: 92,
    bmi: function(height, weight) {
        return weight / (height ** 2);
    bmi = this.bmi();
    }
};

const compare = function(johnbmi, lucasbmi) {
    if (lucas.bmi > john.bmi) {
        console.log(`${lucas.firstname} ${lucas.lastname}'s BMI (${lucas.bmi}) is higher than ${john.firstname} ${john.lastname}'s (${john.bmi})!`);
    }
    else if (john.bmi > lucas.bmi) {
        console.log(`${john.firstname} ${john.lastname}'s BMI (${john.bmi}) is higher than ${lucas.firstname} ${lucas.lastname}'s (${lucas.bmi})!`);
    }
    else {
        console.log(`${john.firstname} ${john.lastname}'s BMI (${john.bmi}) is the same as ${lucas.firstname} ${lucas.lastname}'s (${lucas.bmi})!`);
    }


}

//C. 
let bills2 = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];





function calcTip2(bill2) {
    if (bill2 >= 50 && bill2 <= 300) {
        return bill2 * 0.15;
        
    }
    else {
        return bill2 * 0.2;
       
    }
}

for (let i = 0; i < bills2.length; i++)
    var tips2 = bills2.map(calcTip);
    console.log(tips2);

function calcTotal(bills2, tips2) {
    return tips2 + bills2;

}
