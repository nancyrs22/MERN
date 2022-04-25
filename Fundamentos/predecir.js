//Problema 1
/*
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars // randomCar = Tesla
const [ ,otherRandomCar ] = cars // otherRandomCar = Mercedes
//Predict the output
console.log(randomCar) //Tesla
console.log(otherRandomCar) //Mercedes
*/
//Problema 2
/*
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); //error?
console.log(otherName); //Elon
*/
//Problema 3
/*
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //12345
console.log(hashedPassword); //error: person no tiene variable password
*/
//Problema 4
/*
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //first = 2
const [,,,second] = numbers; //second = 5
const [,,,,,,,,third] = numbers; //third = 2
//Predict the output
console.log(first == second); //2 == 5 -> false
console.log(first == third); //2 == 2 -> true
*/
//Problema 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; //key = value
const { secondKey } = lastTest; //secondKey: [1, 5, 1, 8, 3, 3]
const [ ,willThisWork] = secondKey; //willThisWork: 5
//Predict the output
console.log(key); //value
console.log(secondKey); //[1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); //1
console.log(willThisWork); //5
