/**
 * ------------------------------
 * adding functions in arrays
 * ------------------------------
 */

var yarn = ['developed in 2015', getText => getText, 'npm can be of threat']
// console.log(yarn[1](yarn[0]));

/**
 * ---------------------------------------
 * higher order functions
 * ---------------------------------------
 */
const insideFn = logger => logger("They can be sent to other functions as arguments");
insideFn(message => console.log(message))

var createScream = function (logger) {
    return function (message) {
        logger(message.toUpperCase() + "!!!")
    }
}
const scream = createScream(message => console.log(message))
// scream('functions can be returned from other functions')
// scream('createScream returns a function')
// scream('scream invokes that returned function')

const createScreams = logger => message => logger(message.toUpperCase() + "!!!")

/**
 * ---------------------------------
 * wierd immutable functions
 * ---------------------------------
 */

let color_lawn = {
    title: "lawn",
    color: "#00FF00",
    rating: 0
}

function rateColour(color, rating) {
    color.rating = rating
    return color
}
// console.log(rateColour(color_lawn, 5).rating, color_lawn)

/**
 * -------------------------------------------
 * how to declare immutable 
 * -------------------------------------------
 */

let rateColors = function (color, rating) {
    return Object.assign({}, color, {
        rating: rating
    })
}
// console.log(rateColors(color_lawn, 5).rating);
// console.log(color_lawn.rating);

/**
 * ---------------------------------------
 * writing the above function using ES6
 * ---------------------------------------
 */

const rateColor = (color, rating) => ({
    ...color,
    rating
})

/**
 * ----------------------------------------------------
 * adding colors but 
 * IMUTABLY(adding to a copy but maintaining the original)
 *  to this array
 * ----------------------------------------------------
 */

let list = [{
        title: 'red red'
    },
    {
        title: 'lawn'
    },
    {
        title: 'party pink'
    }
]
const addColor = (title, array) => array.concat({
    title
})
console.log(addColor('glam green', list).length);
console.log(list);

/**
 * --------------------------------
 * it can also be writen as 
 * --------------------------------
 */
const addColour = (title, list) => [...list, {
    title
}]

/**
 * -----------------------------------------------
 * example of a pure function 
 * NOTE : if it causes side effects, changes the 
 * values, does not return a value,
 *  its not a pure function
 * -----------------------------------------------
 */

var fredrick = {
    name: 'fred daug',
    canRead: false,
    canWrite: false
}

const selfEducate = (person) => ({
    ...person,
    canRead: true,
    canWrite: true
})
selfEducate(fredrick)

/**
 * ------------------------------
 * example 2 : 
 * ------------------------------
 */
// const Header = (props) => <h1> {props.title} </h1>

/**
 * ------------------------------------
 * USING THE FILTER FUNCTION
 * ------------------------------------
 */
const schools = ["Yorktown", "Washington & Lee", "Wakefield"]
const wSchools = schools.filter(school => school[0] === 'W')
// console.log(wSchools);

const cutSchool = (cut, list) => list.filter(school => school !== cut)
console.log(cutSchool('Washington & Lee', schools).join(' * '));

/**
 * --------------------------------------------
 * using MAP and object.keys()
 * --------------------------------------------
 */
const schools = {
    "Yorktown": 10,
    "Washington & Lee": 2,
    "Wakefield": 5
}
const schoolArray = Object.keys(schools).map(key => ({
    name: key,
    wins: schools[key]
}))

/**
 * ------------------------------------
 * using reduce in arrays with objects
 * ------------------------------------
 */
const colors = [{
    id: '-xekare',
    title: "rad red",
    rating: 3
}, {
    id: '-jbwsof',
    title: "big blue",
    rating: 2
}, {
    id: '-prigbj',
    title: "grizzly grey",
    rating: 5
}, {
    id: '-ryhbhsl',
    title: "banana",
    rating: 1
}]

const hashColors = colors.reduce((hash, {
    id,
    title,
    rating
}) => {
    hash[id] = {
        title,
        rating
    }
    return hash
}, {})

/**
 * -----------------------------------------
 * reducing an array not to repeat colors
 * -----------------------------------------
 */
const colors = ["red", "red", "green", "blue", "green"];

const distinctColors = colors.reduce((distinct, color) => (distinct.indexOf(color) !== -1) ? distinct : [...distinct, color], [])

/**
 * ------------------------------
 * HIGH order functions
 * ------------------------------
 */
const invokeIf = (condition, fnTrue, fnFalse) => (condition) ? fnTrue() : fnFalse()

const showWelcome = () => console.log("Welcome!!!")
const showUnauthorized = () => console.log("Unauthorized!!!")

invokeIf(true, showWelcome, showUnauthorized)
invokeIf(false, showWelcome, showUnauthorized)

/**
 * -----------------------------------
 * function within a function
 * -----------------------------------
 */
const userlog = username => message => console.log(`${username} -> ${message}`);

const log = userLogs("grandpa23")
log("attempted to load 20 fake members")
getFakeMembers(20).then(members => log(`successfully loaded ${members.length} members`),
    error => log("encountered an error loading members"))

/**
 * --------------------------------------------
 * RECURSION-
 * --------------------------------------------
 */
const countdown = (value, fn) => {
    fn(value)
    return (value > 0) ? countdown(value - 1, fn) : value
}

countdown(10, value => console.log(value))

/**
 * ---------------------------------------------
 * COMPOSITION
 * ---------------------------------------------
 */
const template = 'hh:mm:ss tt'
const clockTime = template.replace('hh', '03').replace('mm', '22').replace('ss', '33').replace('tt', 'pm')
console.log(clockTime);

const both = compose(
    civilianHours,
    appendAMPM
)
both(new Date())
const compose = (...fns) => (arg) => fns.reduce((composed, f) => f(composed), arg)

/**
 * ----------------------------------------------------------------
 * STATELESS FUNCTIONS. 
 * they have no 'this' scope. they are pure functions and simple
 * -they take in properties and return DOM elements without side effects. 
 * -in react stateless functions should take in props as properties 
 * and return DOM elements. 
 * they are faster than createClass or ES6 class syntax
 * ----------------------------------------------------------------
 */
