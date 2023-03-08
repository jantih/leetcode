/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    let index = 1;
    while(time > 0){
        while (index < n && time > 0){
            index++;
            time--;
        }
        while (index > 1 && time > 0){
            index--;
            time--;
        }
    }
    return index;
};

console.log(passThePillow(4,5));
console.log(passThePillow(3,2));