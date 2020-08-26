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
const Header = (props) => <h1>{props.title}</h1>
