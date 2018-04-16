/* TD01 CSV Parsing

Le but de cet exercice est de transformer une chaine de texte en
un tableau d'objets javascript contenants les informations : title, author et date.

Attention : La première ligne n'est pas prise en compte dans votre tableau final !

Exemple : 

"Title;Author;Date\nAnimal Farm;George Orwell;1945" => [{author: 'George Orwell', title: 'Animal Farm', date: 1945}]

*/

/* TD Part */
function parseCSV(string)
{
    // 0 - Decouper les lignes
    // 1 - Faire un tableau pour contenir le rendu final output
    var lines = string.split('\n')
    console.log('Lines ::', lines)
    //Pour chaque titre, créer un objet contenant
    var output = []

    for(var i = 1; i<lines.length; i++)
    {
        console.log('Line ::', lines[i])
        var lineArray = lines[i].split(';')
        var object = {
            title: lineArray[0],
            author: lineArray[1],
            date : Number(lineArray[2])
        }
        output.push(object)
    }
    console.log(output)
    return output
}

/* Testing Part */
var csv = "Title;Author;Date\n" +
    "Animal Farm;George Orwell;1945\n" +
    "The Hitchhiker's Guide to the Galaxy;Douglas Adams;1985\n" +
    "Transmetropolitain;Warren Ellis;1997"

var parsed = parseCSV(csv)
if (parsed[0].title === 'Animal Farm' &&
    parsed[1].author === 'Douglas Adams' &&
    parsed[2].date === 1997) {
    console.log('TD01 :: Success')
} else {
    console.log('TD01 :: Failed')
}