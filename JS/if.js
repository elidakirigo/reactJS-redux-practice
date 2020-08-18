/**
 * -----------------------------------
 *  using let to protect the scope
 * -----------------------------------
 */

let myname = 'elida'
if (myname) {
    let myname = 'changed'
    console.log(myname)
}
console.log(myname);
var mysurname = 'wanjiku'
if (myname) {
    var mysurname = 'changed to wanjiku'
    console.log(mysurname);
}
console.log(mysurname);

/**
 * ----------------------------------------
 * ways to use event listeners
 * ----------------------------------------
 * 1. button.onclick = function(){}
 * 2. button.addEventListener('click, callback)
 * 3. in the html as-
 * <a onclick=clickme() ></a>
 * ----------------------------------------
 * 
 */

/**
 * ----------------------------------------
 * using default parameters
 * ----------------------------------------
 */
let myPerson = {
    name: {
        firstname: 'catey',
        lastname: 'cookey'
    },
    score: [45, 87, 54, 9, 0, 0]
}

function newdafaultVal(arg = 'me', param = myPerson) {
    console.log(arg, param)
}
newdafaultVal()

/** 
 * ---------------------------------------------------------
 * with arrow functions the 'this' keyword is protected eg;
 * ---------------------------------------------------------
 */

let myscope = {
    nae: ["Kirkwood", "Squaw", "Alpine", "Heavenly", "Northstar"],
    bh: function (delay = 1000) {
        setTimeout(() => {
            console.log(typeof this.nae.join(','));
            //logs myscope
        }, delay);
    }
}
let myscopes = {
    nae: ["Kirkwood", "Squaw", "Alpine", "Heavenly", "Northstar"],
    bh: function (delay = 1000) {
        setTimeout(function () {
            console.log(this.bh);
            //logs window
        }, delay);
    }
}
myscope.bh()
myscopes.bh()