React.creatElement('h1', null, 'baked salmon')
//adding attributes
React.creatElement('h1', {
    id: 'daisy',
    class: 'first'
}, 'baked salmon')

// using react DOM
let dish = React.creatElement('h1', null, 'baked salmon')
ReactDOM.render(dish, document.getElementById('react-container'))

/**
 * --------------------------------------------------
 * constructing a vitual DOM using map, but
 * the method has a flaw. react would like each child to
 * have a key unique
 * --------------------------------------------------
 */
let items = ["1 lb Salmon", "1 cup Pine Nuts", "2 cups Butter Lettuce", "1 Yellow Squash", "1/2 cup Olive Oil"]
React.creatElement('ul', {
    className: 'ingredients'
}, items.map(ingredient => React.creatElement('li', null, ingredient)))

/**
 * ----------------------------------------------
 * creating components in the DOM
 * -we use : -createClass, ES6 classes, stateless 
 * functional components 
 * ----------------------------------------------
 */
