/* TD04 - Fibonacci Filter

Écrivez une fonction prenant un tableau en paramètre et 
ne retournant que les nombres de ce tableau faisant partie 
de la suite de fibonacci.

Par exemple fibFilter([1,2,3,4,5]) == [1,2,3,5]

/* TD Part */
const fib = require('./td00.js');

const fibFilter = (array) => {
    var max = Math.max(...array);
    var fib_array = [];
    var last = 0;

    for(var i = 0; last < max; i++)
    {
        fib_array.push(fib(i));
        last = fib(i);
    }

    return array.filter(res => fib_array.includes(res));
}

/* Testing Part */
const array = [0,1,4,5,13,2,3,4,20,30,11,8,12]
console.log(fibFilter(array).toString() == [0, 1, 5, 13, 2, 3, 8].toString() ? 'TD04 :: Success' : 'TD04 :: Failed')
