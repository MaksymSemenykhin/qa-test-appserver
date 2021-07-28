// let urlModule = require('url');

let ollyfucntion = function(text){
    var word = text.toUpperCase();
    return word + "_Test" ;
}

let spaceReplacer = function(text){
    console.log('spaceReplacer');

    let words = text.split(','); // ['123.asd'] 0

    words.forEach(function(word,index){
        let a = ollyfucntion(word);
        console.log(a);
    })

    return words;
}

module.exports = {
    spaceReplacer:spaceReplacer
}
