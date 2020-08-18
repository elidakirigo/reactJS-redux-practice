let person = {
    name: {
        first: 'nancy',
        last: 'chessy'
    },
    age: 24,
    studies: ['commerce', 'coding']
}

function instanceOfPerson() {
    let {
        studies
    } = person;
    let {
        name,
        age
    } = person
    return `hello,my name is ${name.first} , i studied ${studies} and of age ${age}`
}
console.log(instanceOfPerson());

/**
 * -----------------------------------
 * DESTRUCTURING IN FUNCTIONS
 * -----------------------------------
 */
function DEstr({
    age
}) {
    console.log(age);
}
DEstr(person);
/**
 * -----------------------------------
 * DESTRUCTURING ARRAYS
 * -----------------------------------
 */
//this gives the first value a key
var [firstArray] = ["Kirkwood", "Squaw", "Alpine", "Heavenly", "Northstar"]
console.log(firstArray); //logs kirkwood

/**
 * -----------------------------------
 * list matching in arrays
 * -----------------------------------
 */
var [, , thirdArray] = ["Kirkwood", "Squaw", "Alpine", "Heavenly", "Northstar"]
console.log(thirdArray);

/**
 * -------------------------------
 * object literal enhancement
 * -------------------------------
 */

var chess = 98
var keep = 'mate'
var checkmate = {
    chess,
    keep
}
const skier = {
    chess,
    keep,
    powderYell() {
        let yell = this.sound.toUpperCase()
        console.log(`${yell} ${yell} ${yell}!!!`)
    },
    speed(mph) {
        this.speed = mph
        console.log('speed:', mph)
    }
}
console.log(skier);

/**
 * -------------------------------------
 * new way to use the spread operator
 * -------------------------------------
 */

 var peek = ["Kirkwood", "Squaw", "Alpine", "Heavenly", "Northstar"]
 var [last]= [...peek].reverse()
//  console.log(last);

 /**
  * -----------------------------------------------
  * getting the rest of an array
  * -----------------------------------------------
  */

  var [,,second, ...rest] = peek
  console.log(second,rest);