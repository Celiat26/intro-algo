// Intro algo

// -------------------------------------------------


// DEFINITION : méthode permettant de résoudre un pb de manière systématique


// --------------------------------------------------

// I. LES VARIABLES

//------------------------------------------------------

// Ls variables nous servent à stocker des valeurs de toutes sorte.
//Pour les utiliser nous devons d'abord l'initialiser en lui donnant son nom puis sa valeur de base.

// Obsolète 
//var prenom = "Célia"
//console.log() => affiche moi dans mon terminal ce que je souhaite
//console.log(prenom)
//var age = 32 // Nombre / chiffre pas de guillemet 
//console.log(age)

//Depuis 2015 nous smmes passé à la version Ecmascript (ES6) et nous utilisons de nouvelles normes 


//a. LA CONST
//-----------

//const prenom = "célia"
//console.log(prenom);

// Une const ne peut pas être modifiée ni réinitialiser

//b. LA LET 
//-------------------

// Peut être modifier mais pas redéclarée
//let prenom = "celia";
//prenom = "kevin";
//let prenom = "kevin";
//console.log(prenom);
//=> SyntaxError: Identifier 'prenom' has already been declared

//c. LA CONVENTION Camel Case
//-------------------

//Pour définit le nom d'une variable et si ce même nom est un mot composé on utilise le camel case
// Quand mot composé => Le deuxième mot prend une maj

//const pereNoel = "blabla"

//-------------------------------------------------

// II. LES DIFFERENTS TYPES DE VALEURS

//--------------------------------------------------

// Il existe pls types de valeurs que l'on peut assigner à nos variables
// Voici leur liste :

// - nombres = (number) : 24; 32
// - les chaines de caractères = (string) : "celia"
// - les tableaux = (array)
// - les objets = (object)
// - vrai / faux = (boolean) : true / false

//-------------------------------------------
// A. LES NOMBRES (number)
//-------------------------------------------

// Les nombres nous servent à faire différents calculs
// Pas de guillemets 
//const num1 = 50;
//const num2 = 30;

//  1ere facon de faire des calculs

//const calcul = num1 + num2
//console.log(calcul)

// On peut calculer deux variables ensembles

// 2ème facon 
//let num1 = 50
//const num2 = 30
// on appelle la valuer num1 et on lui dit ajoute num 2 à ta valeur

//num1 = num1 + num2

//console.log(num1)

// Méthode un peu plus rapide
//num1 += num2

// const age = 30
// const plusTard = age + 10

//----------------------------------------------

// B. LES CHAINES DE CARACTERES (STRING)

//----------------------------------------------

//Les string sont tout simplement des phrases qui sont déclérées entre guillemets doubles ou simples

// const text = "bonjour"
// const otherText = 'bonjour'
// console.log(text)
// console.log(otherText)

//  Attention aux apostrophes si on utilise des guillemets

// La concaténation 
//-----------------------------------

// C'est le fait d'additionner du texte : ajouter des bouts de textes ensemble
// const prenom = "celia"
// const greetings = "bonjour"

// " " pour l'espace
// const resultat = greetings + " " + prenom
// console.log(resultat)

// const prenom = "celia"
// const age = "32"

// const resultat = "bonjour "  + prenom + " ,tu as " +  age + " ans"

// console.log(resultat)

//--------------------------

// < WARNING>

//-------------------------

// Si nombre entre parenthèse ça devient des caractères 

//--------------------------------

// Les templates string

//---------------------------------

//Depuis ES6 nous pouvons utiliser des backquotes afin d'intégrer javascript à l'intérieur de String
// const prenom = "celia"
// const age = "32"

//  const resultat = "bonjour "  + prenom + " ,tu as " +  age + " ans"
//  altgr + 2*7
// const res = `bonjour ${prenom}, tu as ${age} ans`
// console.log(res)

//--------------------------------------

//III. LES ARRAY (TABLEAUX)

//--------------------------------------

// Les array sont un type de valeurs extrèmement utilisés dans tous langage de programmation
// Ils sont extrèmement puissants.
// Les array peuvent tout stocker, sans limite.
// Peut stocker n'importe quoi
// Pour déclarer un array, nous utilisons les crochets []

// const prenom = "célia"
// const signe = "lion"

//  Quand on ajoute des valeurs à l'interieur d'un array on sépare ces valeurs par une virgule

// const tab = [prenom, signe, 40, "Hello world"]
// console.log(tab)


// const amazoon = ["gilles", "mohamed", "lionel"]

// Nous pouvons accéder à n'importe quel item grâce à son index
//Attention : les ordi commencent par zero
// Pour ce faire nous appelons notre tableau + index entre crochet 

// console.log(amazoon[0])

// TIPS : Les strings sont considérées comme des array

// const text = "bonjour"
// console.log(text[0])

//----------------------------------

// AJOUTER DES DONNEES A VOTRE ARRAY

//----------------------------------

//  const client1 = "celia"
//  const client2 = "nogoye"
//  const amazoon = [client1, client2]

// Pour ajouter un client nous allons utiliser la méthode array.push()

//  const client3 = "francisco"
//  amazoon.push(client3)
// const client4 = "lionel"
//  amazoon.push(client4)


 //Pour ajouter un idem au debut array.unshift()

// const client5 = "Mohamed"
// amazoon.unshift(client5)


// Pour supprimer un item à la fin array.pop()

// amazoon.pop()


//Pour supprimer au depart array.shift()
// amazoon.shift()
// console.log(amazoon)


//Exo sur les array µ
// Vous devez créer 2 variables, pour votre prénom et votre nom.
// Vous assignerez ces variables dans un array.

// A l'aide de ce que l'on a appris récemment (de manière automatique), 
// votre array devra afficher:
// votre prénom, votre nom, vos initiales
// résultat attendu dans la console: ['Julien', 'Delusseau', 'JD']


// const prenom ="Célia"
// const nom = "TOMEI"

// const res = `${nom[0]}.${prenom[0]}`

// const array = [nom, prenom, res]


// console.log(array)


//----------------------------
// IV LES OBJEcTS 
//-------------------------------

//Les object sont des shémas qui nous servent à contenir pls propriétés
// Par la suite modifiable à volonté
// Principalemment dans la programmation orienté objet (POO)
// Pour déclarer un objet, nous utilisons les {}
// Pour insérer des pp nous utilisons un système de 'clé' : 'valeur'


// const client1 = {
//     prenom: 'Célia',
//     nom: 'TOMEI',
//     email: "tolya69100@gmail.com",
//     basket: [
//         {
//             article: 'jean',
//             price: 50
//         },
//         {
//             article: 'shoes',
//             price: 99

//         }
        
//     ]
// }

// Pour accéder à une valeur définie, il suffit d'appeler l'objet.clé

// console.log(client1.basket[1].article)

// Pour modif une valeur déf il suffit d'appeler l'objet.clé et la modif

// client1.email = "nouvelle@gmail.com"
// console.log(client1)


//Exo

//Calculer et afficher dans le terminal le prix du panier de Noel 


//  const christmas = [
//      {
//         article: 'Play V',
//         price: 499
//     },
//    {
//        article: 'iPhone XIII',
//        price: 999
//     } 
// ]

// console.log(christmas[0].price + christmas[1].price)


// 0 = 1

//-------------------------------

//V LES BOOLEANS (TRUE / FALSE)

//----------------------------------

//Permettent de définir siune valeur, donnée etc est vrai ou fausse
//Utilisé quand on veut effectuer une condition 

// const a = 5
// const b = 10
// console.log(a === b)

//Il existe pls facons de determiner si qqch est "truesy" ou "falsy"

//-------------------
// a. Les opérateurs
//--------------------

//Il existe pls opératuers qui nous permettent de vérif des valeurs entre elles

// const a = 5
// const b = 10
// console.log(a == b)

// a == b : est ce que a = b
// a===b : a =b et du meme type que b 
// === pour la valeur ET le type

//a != b a différent de b
//a !== b différent et même type
//a >b a sup a b 
//a >= b sup ou égale


//---------------------
// b. La condition IF / ELSE IF / ELSE
//-----------------------

// SI (la condition est remplie) {
//     fais quelquechose 
// } OU SINON (la condition est est remplie ) {
//     fait qqch
// } SINON {
//     Fait qqch
// }

// const a = 5
// const b = 10

// if (a === b) {
//     console.log("la première condition est remplie");
// } else if (a <= b) {
//     console.log("la deuxime condition est remplie");
// } else (b > a) {
//     console.log("la troisième condition est remplie");
// }


// Exercice:
// Créez une variable, qui prend en valeur un age
// Si cet age est supérieur à 18, vous afficherez: "Tu as le droit de boire!"
// Si cet age est inférieur à 18, vous afficherez: "Rentres chez toi"
// Si cet age est inférieur à 15, vous afficherez: "Va boire ton lait"



//-----------------------------------
// Effectuer plueiurs condition en même temps 
//------------------------------------

// const a = 5
// const b = 10

// if (a === b || a < b ) {
//     console.log("condition remplie")
// }

// || veut dire"ou" pour une double condition
// && veut dire "et" pour une double condition

// const age = 17
// if (age >= 18) {
//   console.log("Tu as le droit de boire!");
// } else if (age < 18 && age >= 15) {
//   console.log("Rentres chez toi");
// } else {
//   console.log("vas boire ton lait");
// }

//-------------------------

// c. Condition ternaire

//-------------------------

// Remplit la meme condition que if sauf qu'elle ne s'écrit que sur une seule instruction
// const a = 5
// const b = 10 
// const c = 10

// a === b ? "C'est vrai" : "c'est faux"

// const exemple = `${a === b ? "C'est vrai" : b === c ? "b est égale à c" : "tout le reste"}`
// console.log(exemple)

//--------------------------------
// LES FONCTIONS
// ---------------------------------

// Un des grands principes en dev c'est d'avoir un code DRY (Don't repeat yourself)
//Pour éviter de faire du copoé collé, et automatiser le tout, on utilise les fonctions

//Première façon de déclarer une fonction

// function greetings() {
//     const prenom =" Célia "
//     const age = 32
//     const signe = "lion"
//     const resultat = `Bonjour ${prenom}, tu as ${age}tu es de signe ${signe}`
//     console.log(resultat)
// }

// Nous devons donc appeler greetings

// Les arguments d'une fonction

//Pour que notre fonction soit customisable nous pouvons luiappliquer des paramètres
// function greetings(prenom, age) {
//          const prenom = " Célia "
//         const age = 32
//        const resultat = `Bonjour ${prenom}, tu as ${age}`
//         console.log(resultat);
//      }

// greetings("julien", 36)
// greetings("gilles", 39)


// 2ème facon

// const calcul = (num1, num2) => {
//    console.log(num1 + num2); 
// }

//  calcul(10, 20)

// Exercice

// Créer un array contenant 2 nombres
// Puis créer une fonction qui aura pour seul but d'afficher dans la console la moyenne de ces 2
// bonus utiliser les paramètre de votre fonction pour faire ce calcul

// const a = 8
// const b = 2

// const array = [a, b]

// const calcul = (a, b) => {
//     console.log((a + b) / 2);

// }
// calcul(8, 2)

// const moyenne = (array) => {
//     const res = (arr[0] + arr[1]) /2 
//     console.log(res);
// }

//---------------------------------------------------------
// const arr = [8, 14]
// const moyenne = () => {
//   const res = (arr[0] + arr[1]) / 2
//   console.log(res);
// }
// moyenne()

// BONUS:

// const moyenne = (arr) => {
//   const res = (arr[0] + arr[1]) / 2
//   console.log(res);
// }
// moyenne([8, 16])
// moyenne([5, 9])
// moyenne([11, 19])
