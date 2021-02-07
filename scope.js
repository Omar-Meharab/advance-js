let bonus = 20;
function sum (first, second) {
    let result = first + second + bonus;
    console.log(bonus);
    if(result > 9){
        var mood = 'happy';
        mood = 'sappy';
        mood = 'dappy';
        // console.log(mood);
    }
    console.log(mood);
    return result;
}

// console.log(mood);
const output = sum(3, 5);
console.log(bonus);
console.log(output);