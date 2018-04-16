/* TD08 Robbie 

Dans cet exercice, vous devez créer un petit robot.

Celui-ci prend en paramètre une instruction (représentée par un nombre), et potentiellement un 
ou plusieurs paramètres à la suite de celle-ci.

Voici la liste des instructions que votre robot doit être capable d'executer : 

Format : 

Numéro de l'instruction [paramètre1, paramètre2] // Description de l'instruction

Instructions :

1 [prénom]                  // Retourner 'Bonjour {prénom}!'
2                           // Retourner la date au format UTC
3 [texte]                   // Remplacer les 't' par des '7' dans {texte}
4 [texte]                   // Remplacer tous les mots par '####' dans {texte}
5 [texte, mot, alt]         // Remplacer {mot} par {alt} dans {texte}
6 [texte]                   // Remplacer la chaine 'date' par la date au format UTC dans {texte}

Exemple :

var robbie = Robbie()
robbie.do(1, 'Jérémie') // Retourne 'Bonjour Jérémie!'

*/

function Robbie()
{
    this.do = function(int, text, mot, alt)
    {
        switch(int)
        {
            case 1:
                return 'Bonjour ' + text + '!';
                break;
            case 2:
                var utcDate = new Date(Date.now());
                return utcDate.toUTCString();
                break;
            case 3:
                return text.replace(/t/g, '7');
                break;
            case 4:
                return text.replace(/\w/g, '#');
                break;
            case 5:
                var motReg = new RegExp(mot, 'g');
                return text.replace(motReg, alt);
            case 6:
                var utcDate = new Date(Date.now());
                return text.replace(/'date'/g, utcDate.toUTCString());
                break;
        }
    }
}

/* TD Part */

/* Testing Part */

function test()
{
    var robbie = new Robbie()
    var text = 'Je suis un test'
    if (robbie.do(1, 'Jérémie') !== 'Bonjour Jérémie!') {
        return console.log('false1')
    } else if (!robbie.do(2)) {
        return console.log('false2')
    } else if (robbie.do(3, text) !== 'Je suis un 7es7') {
        return console.log('false3')
    } else if (robbie.do(4, text) !== '#### #### #### ####' && robbie.do(4, text) !== '## #### ## ####') {
        return console.log('false4')
    } else if (robbie.do(5, text, 'test', 'toast') !== 'Je suis un toast') {
        return console.log('false5')
    } else if (!robbie.do(6, text)) {
        return console.log('false6')
    }
    return true
}

console.log(test() === true ? 'TD08 :: Success' : 'TD08 :: Failed')
