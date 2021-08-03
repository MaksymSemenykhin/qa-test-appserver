let urlModule = require('url');

let _query;

let _getText = function () {

    if(!_query)
        return '';
    if(!_query.text)
        return '';

    return _query.text ;
}

let ollyfucntion = function(text){
    var word = text.toUpperCase();
    return word + "_Test" ;
}

let setQuery = function (url) {
    _query = urlModule.parse(url,true).query;
}

let spaceReplacer = function(){

    let text = _getText();
    let words = text.split(',');

    words.forEach(function(word,index){
        let changedValue = ollyfucntion(word);
        console.log(a);
    })

    return words;
}

module.exports = {
    spaceReplacer:spaceReplacer,
    setQuery
}
