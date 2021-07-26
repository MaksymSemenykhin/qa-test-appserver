// let urlModule = require('url');

let msemfucntion = function(text){
    return text.replace('msem','superMsem');
}

let spaceReplacer = function(text){
    console.log('spaceReplacer');

    let words = text.split(','); // ['123.asd'] 0

    words.forEach(function(word,index){
        let aa = msemfucntion(word)
        console.log(aa);
        console.log(word);
        console.log(index);
    })

    return words;
}

module.exports = {
    spaceReplacer:spaceReplacer
}
