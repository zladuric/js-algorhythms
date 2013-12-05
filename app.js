var arrays = {
    string : 'Something'
    , number : 23
    , empty : []
    , one : [1]
    , sorted : [1, 3, 7, 12, 25]
    , sortedString : ['a', 'c', 'e', 'figure']
    , unsorted : [17, 32, 3, 9, 21, 15, 8]
    , unsortedString : ['this', 'array', 'holds', 'unsorted', 'string', 'elements']
}
var algorythms = ['quicksort', 'merge'];
var algo = process.argv[2];
for (var i in algorythms) {
    if(algorythms[i] == algo) {
        var found = true;
        break;
    }
}
if(!found) {
    console.log('Please use one of the following algorythms: ', algorythms.join(', '));
    process.exit();
}
var al = require('./lib/' + algo);
for (var arr in arrays) {
    console.log('Testing ' + arr + ': ', arrays[arr]);
    console.log(al(arrays[arr]));
}
console.log('Testing undefined');
console.log(al(arrays['undef']));
