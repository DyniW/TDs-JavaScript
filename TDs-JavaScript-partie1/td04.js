/* TD04 - Leet

Le but de cet exercice est de faire un traducteur leet speak.

t => 7
i => 1
s => 5
e => 3
g => 6
o => 0
b => 8
a => 4

*/

/* TD Part */
function leet(chaine)
{
    chaine = chaine.replace(/t/g, '7').replace(/i/g, '1').replace(/s/g, '5').replace(/e/g, '3').replace(/g/g, '6').replace(/o/g, '0').replace(/b/g, '8').replace(/a/g, '4');
    return chaine;
}

/* Testing Part */

var str1 = 'this is the 42 string'
var str2 = 'this is the string containing foo bar'

if (leet(str1) === '7h15 15 7h3 42 57r1n6' &&
    leet(str2) === '7h15 15 7h3 57r1n6 c0n741n1n6 f00 84r') {
    console.log('TD04 :: Success')
} else {
    console.log('TD04 :: Failed')
}
