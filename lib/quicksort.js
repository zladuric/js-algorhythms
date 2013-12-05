var quicksort = function(arr) {
    if('[object Array]' !== Object.prototype.toString.call(arr)) {
        return Error('Invalid arguments.');
    }
    if(arr.length < 2) return arr;
    var mid = Math.floor(arr.length/2);
    var pivot = arr[mid]; // proven to be there, make a real pivot selection
    var less = [], greater = [], i;
    for (i = 0; i < arr.length; i++) {
        if(i == mid) continue;
        if(arr[i] <= pivot) {
            less.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    };
    return quicksort(less).concat(pivot, quicksort(greater));
}
module.exports = quicksort;

