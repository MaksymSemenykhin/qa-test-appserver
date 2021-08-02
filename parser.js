let urlModule = require('url');

let _query;

let _getText = function () {

    if(!_query)
        return '';
    if(!_query.text)
        return '';

    return _query.text ;
}

let setQuery = function (url) {
    _query = urlModule.parse(url,true).query;
}

let spaceReplacer = function(){

    let text = _getText();
    let words;
    let amount;
    let dividedAmount;
    if (text.indexOf("$") != -1) {
      amount = text.slice(1) ;
      dividedAmount = amount.split('.');

        dividedAmount.forEach(function(dividedAmount,index){
        console.log(dividedAmount);
        console.log(index);
    })
    return dividedAmount;

    } else	{
		words = text.split(',');

    	words.forEach(function(word,index){
       		console.log(word);
       		console.log(index);
        })
    return words;
    }
}


module.exports = {
    spaceReplacer:spaceReplacer,
    setQuery
}
