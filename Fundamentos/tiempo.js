/*
Number.prototype.isPrime = function() {
        for( let i=2; i<this; i++ ) {
            if( this % i === 0 ) {            
                return false;
            }
        }
        return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
*/


// Number.prototype.isPrime = function() {
//     for( let i=2; i<this; i++ ) {
//         return this % i === 0 ? false:true;
//     }
//   //  return true;
// }

// const { performance } = require('perf_hooks');
// const start = performance.now();
// let primeCount = 0;
// let num = 2; // por razones matemáticas, 1 se considera primo
// while( primeCount < 1e6 ) {
//     if( num.isPrime() ) {
//         primeCount++;
//     }
//     num++;
// }

// console.log(`The 10,000th prime number is ${num-1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);


/*
// recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
    

    }
console.log(rFib(20));

const { performance } = require('perf_hooks');
const start = performance.now();

console.log(`This took ${performance.now() - start} milliseconds to run`);
*/

/*
// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
console.log(iFib(20));

const { performance } = require('perf_hooks');
const start = performance.now();

console.log(`This took ${performance.now() - start} milliseconds to run`);
*/

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
//const reversed1 = story.split("").reverse().join("");

//console.log(reversed1);

function invertirCadena(cadena)
{
    var nuevaCadena="";

    for(var i = cadena.length-1; i>=0;i--)
    {
        nuevaCadena += cadena[i];
    }
    return nuevaCadena; 
}

const cadenaInvertida = invertirCadena(story);

console.log(cadenaInvertida);