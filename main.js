// Variáveis
// let cria uma variável que se mantém somente dentro do escopo em que foi criado
let animal = 'cat'
console.log(animal) // retorna cat
{
    let animal = 'dog'
    console.log(animal) // retorna dog
}
console.log(animal) // retorna cat

// const cria uma variável que não recebe outra atribuição. 
const secretNumber = 28;
// secretNumber = 40 // Não aceita essa reatribuição
// No caso de objetos, pode-se reatribuir uma propriedade dentro dela
const will = {
    name: 'William',
    age: 53
}
will.age = 28
// para fazer o congelamento
Object.freeze(will)


// Temporal Dead Zone
console.log(cat) // retorna undefined. Ele reconhece que existe uma variável declarada, mas não sabe seu valor
var cat = 'meow'
// let cat = 'meow' // no console.log retornaria um erro, por estar declarado depois da sua chamada


// Arrow Function
const ireland = ['Dublin', 'Galway', 'Cork']

const love = ireland.map( function(name) {
  return `I love ${name}`  
})
console.log(love)

const loveArrow = ireland.map((name) => {
    return `I love ${name}`
})
console.log(loveArrow)

const loveArrowSingle = ireland.map(name => {
    return `I love ${name}`
})
console.log(loveArrowSingle)

const loveArrowOneLine = ireland.map(name => `I love ${name}!` )
console.log(loveArrowOneLine)

const loveChain = ireland
                        .filter(name => name === 'Dublin')
                        .map(name => `I love ${name}`)
console.log(loveChain)

// Arrow Function, no entanto, não deve ser usada sempre
const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    console.log(this) //como arrow function, ele pega o escopo maior do elemento, ou seja, a window
})

btn.addEventListener('click', function() {
    console.log(this) //sem arrow function, ele retorna o próprio elemento HTML
})

const sandwich = {
    bread: 'white',
    cheese: 'cheddar',
    prepare: function() {
        return `I want a sandwich with ${this.bread} bread and ${this.cheese} cheese!`;
    },
    make: function() {
        window.setTimeout(() => {
            console.log( this.prepare() ); // aqui a arrow function seleciona o escopo do sandwich
        }, 500);
    }
};
sandwich.make()


// Template Literals
const where = {
    live: 'Dublin',
    love: 'Galway'
}
// para concatenar variáveis, colocar a string entre `` e adicionar a variável entre ${}
const newText = `Eu moro em ${where.live} e sou apaixonada por ${where.love}`
const newFruits =
`banana
orange
apple`
console.log(newText)
console.log(newFruits)


// Template Literals para HTML
const article = {
    title: 'Aprendendo Template Strings',
    intro: 'Uma breve explicação de como se utilizar template strings do ES6 em seu código hoje!',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, officia, perspiciatis? Architecto, molestias autem. Repellat, laborum deserunt soluta necessitatibus. Tenetur illo, id magnam numquam neque illum temporibus, in qui eos.',
    tags: ['es6', 'js', 'template-literal']
};
function renderAuthor(name) {
    return (name) ? name : 'unknown';
}

const markup = ` 
    <article>
        <header>
            <h1>${article.title}</h1>
        </header>
        <section>
            <p>${article.intro}</p>
        </section>
        <footer>
            <ul>
                ${article.tags.map((tag) => `<li>${tag}</li>`).join('')}
            </ul>
            <p>Author: ${renderAuthor(article.author)}</p>
        </footer>
    </article>
`;

document.body.innerHTML = markup;

// Tagged template
const city = 'Dublin'
const something = 'Guinness'
const otherThing = 'Leprachauns'

function green(template, ...values) {
    return template.reduce((accumulator, part, i) => {
        return `
            ${accumulator}
            <span class="green">${values[i-1].toUpperCase()}</span>
            ${part}
        `
    })
}

const ireland2 = green`I live in ${city} the city of ${something} and ${otherThing}!`

document.body.innerHTML = ireland2


// Shorthand Properties
// Para objetos, se o nome da propriedade e do valor forem iguais, ele não precisa ser repetido
let firstName = 'William'
let surname = 'Justen'
let age = 26

const person = {
    firstName,
    surname,
    age,
    hello(){ // para método do objeto, não há mais necessidade para colocar o funtion()
        console.log('Hello!')
    }
}

console.log(person)
person.hello()

// Default Parameters
// Se o parâmetro não existir, ele coloca um valor padrão definido pelo programador
function hello(name = 'William', surname = 'Justen') {
    console.log(`Hello ${name} ${surname}! How are you?`)
}

hello() // retorna Hello William Justen! How are you?
hello('Jonar', 'Mendes')
hello('Jonas')


// Métodos para Strings
let text2 = 'Lorem ipsum dolor sit amet'

console.log(text2.startsWith('rem', 2)) // o segundo parâmetro define a partir de qual caracter ele vai começar a contar
console.log(text2.endsWith('ame', 25)) // o segundo parâmetro define qual o range de caracteres que ele conta
console.log(text2.includes('ipsum')) // procura dentro da string a string definida como parâmetro
console.log('lol'.repeat(10)) // retorna o texto 10 vezes


// Métodos de arrays
// Array.from()
const text = 'William'
console.log(Array.from(text)) // cria um array usando cada caracter como item

const list = document.querySelectorAll('#list li')
const listArray = Array.from(list) // transforma o node list em array, habilitando métodos próprios de array

// Array.of()
const arrayOf = Array.of(1, 4, 'William', {nome: 'Jonas'})
console.log(arrayOf)

// Array.find() e Array.findIndex()
const sampleArray = [4, -5, 0, -1]
const underZero = sampleArray.find( x => x < 0 )
console.log(underZero) // retorna o PRIMEIRO item que está dentro da condição

const underZeroIndex = sampleArray.findIndex( x => x < 0 )
console.log(underZeroIndex) // retorna o indíce que está dentro da condição

// Array.find()
const data = [
    {
        name: 'Wiliiam',
        age: 26,
        city: 'Dublin'
    },
    {
        name: 'Jonas',
        age: 22,
        city: 'Cologne'
    }
]

const will2 = data.find( will2 => will.name === 'William' )
console.log(will2)

// Array.fill()
const arr2 = new Array(50)
arr2.fill('lol', 1, 3) // o primeiro parâmetro define o que vai ser inserido, segundo, em qual índice e o último até qual índice

console.log(arr2)


// Destructuring
// Destructuring facilita a nomeação de variáveis para nomes e valores de um objeto
var destruct = {
    name2: 'William',
    surname2: 'Justen',
    age: 25,
    blog: 'https://willianjusten.com.br',
    social: {
        twitter: '@Willian_Justen',
        facebook: '/willianjusten'
    }
}

const { name2, surname2 } = destruct
console.log(name2)
console.log(surname2)

const { facebook, twitter } = destruct.social // para objeto dentro de objeto
console.log(facebook)
console.log(twitter)

const { facebook: fb } = destruct.social // também é permitido mudar o nome da variável para que não seja o nome do valor
console.log(fb)

const { city2 = 'Dublin' } = destruct

// Destructuring em arrays
const arr3 = [ 'Willian', 'Justen', 26, 'Dublin' ]
const [ nameArray, surnameArray, ageArray, cityArray ] = arr3

console.log(nameArray)
console.log(surnameArray)
console.log(ageArray)
console.log(cityArray)

// Fazendo swap em variáveis
    let a = 42
    let b = 21

    console.log('a: ', a)
    console.log('b: ', b);

    [a, b] = [b, a] // realiza a troca de variáveis

    console.log('a: ', a)
    console.log('b: ', b)


// Spread e Rest
// Spread operator
let front = ['react', 'vue', 'angular']
let back = ['python', 'ruby', 'nodejs']

console.log([...'will']) // cria uma array, cujos itens sao cada caracter da string
console.log(...front) // imprime todos os itens do array

let fullStack = [...front, 'RxJS', ...back]
console.log(fullStack)

// Spread tambem pode ser usado dentro de funcoes
function makeSandwich(bread, cheese, sauce){
    console.log(`Your sandwich with ${bread} bread, ${cheese} cheese and ${sauce} is done!`)
}

const ingredients = [ 'white', 'cheddar', 'barbecue' ]
makeSandwich(...ingredients) // chama a funcao usando todos os itens do array como parametro

// Rest params

function multiply(mult, ...args){ // dessa forma, é informado que há mais argumentos, porém não se sabe a quantidade deles
    return args.map(arg => arg * mult)
}

console.log(multiply(5,2,5,6))


// Promises
// Promise é um objeto com uma ação que não foi finalizada, mas que no futuro será realizada. Importante para requisições assíncronas
var defer = new Promise((resolve, reject) => {
    setTimeout(() => {

        if (true){
            resolve('Hello! It works')
        } else {
            reject('Error!')
        }

    }, 2000)
})

defer
    .then((data) => {
        console.log(data)
        return 'foo'
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

// Lidando com múltiplas Promises
const currency = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ currency: 'euro', value: 3.5 })
    }, 2000)
})

const countries = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([ 'Ireland', 'England', 'Scotland' ])
    }, 600)
})

Promise
    .all([currency, countries]) // pega todas as promises e aí dá continuidade no script
    .then(responses => {
        console.log(responses)
    })

    Promise
    .race([currency, countries]) // imprime somente a primeira e mais rápida requisição
    .then(responses => {
        console.log(responses)
    })


// Classes
// MANEIRA DE CRIAR CLASSES NO ES5
// function Animal(kind, sound){
//     //constructor
//     this.kind = kind
//     this.sound = sound
// }

// //method
// Animal.prototype.hello = function(){
//     console.log(`${this.sound} I'm a ${this.kind}!`)
// }

// const dog = new Animal('dog', 'auau')
// const elephant = new Animal('elephant', 'brrr')
// console.log(dog)
// console.log(elephant)

class Animal {
    constructor(kind, sound){
        this.kind = kind
        this.sound = sound
    }

    hello(){
        console.log(`${this.sound} I'm a ${this.kind}!`)
    }
    static info(){ // só pode ser chamado pelo nome da classe. e.g. Animal.info()
        console.log('This is a class to create animals')
    }
    get Name(){ //tem que ser chamado como propriedade e não um método. e.g. dog.name
        console.log(`${this.sound} My name is Jake!`)
    }
    set nickname(nick) { // cria novas propriedades. e.g. dog.nickname = 'J'
        this.nick = nick
    }
}

const dog = new Animal('dog', 'auau')
const elephant = new Animal('elephant', 'brrr')
console.log(dog)
console.log(elephant)

class Dog extends Animal {
    constructor(kind, name, sound){
        super(kind, sound) //tem que ser ativada para chamar todos os métodos de Animal
        this.sound = sound
        this.name = name
    }
    bark(){
        console.log(`${this.sound}! I'm ${this.name}!`)
    }
}

const dog2 = new Dog('dog', 'Jake', 'auau')


// Symbol
let foo = Symbol('name') // symbols são únicos
let bar = Symbol('name') // ou seja, foo e bar são diferentes apesar de possuírem o mesmo valor

let obj = {
    [Symbol('name')]: 'Willian',
    [Symbol('age')]: 26,
    city: 'Dublin'
}

const symbols = Object.getOwnPropertySymbols(obj)
const data2 = symbols.map( sym => obj[sym])
console.log(data2)


// Iterator e Iterables
var txt = 'Ireland' // iterable
var it = txt[Symbol.iterator]() //iterator

for ( letter of txt ) {
    console.log(letter)
}


// Generator
function* genNames(){
    yield 'Willian'
    yield 'Jonas'
    yield 'Gabriel'
}

const names = genNames()
console.log(names)
console.log(names.next()) // ele para no primeiro yield a não ser que seja novamente chamado
console.log(names.next())
console.log(names.next())

function ajax(url){
    fetch(url)
        .then(data => data.json())
        .then(data => dados.next(data))
}

function* ajaxGen(){
    console.log('Buscando posts...')
    const posts = yield ajax('https://willianjusten.com.br/search.json') // para o script, vai para o ajax. O ajax retorna os dados e dá continuidade no ajaxGen
    console.log(posts)

    console.log('Buscando posts...')
    const github = yield ajax('https://api.github.com/users/willianjusten')
    console.log(github)
}

const dados = ajaxGen()
dados.next() // roda o ajaxGen


// Proxy
// Maneira de definir comportamentos diferentes para métodos dentro de um objeto
let obj2 = {
    name: 'Willian',
    age: 26
}

let proxy = new Proxy(obj2, {
    get(target, name) {
        console.log('Alguém está pedindo  o nome =D')
        return target[name]
    },
    set(target, name, value) {
        console.log('Alguém está mudando o nome!')
        target[name] = value
    }
})
console.log(proxy.name)
proxy.name = 'Jonas'
console.log(proxy.name)


// Set
// Objeto que permite guardar valores únicos de um tipo, seja primitivo ou objeto
// WeakSet
// Funciona como Set, porém recebe apenas objetos
// No WeakSet, .clear(), .values(), for of não funcionam e não permitem interação
// Map
// No map, se define chave - valor, parecido com objeto
// WeakMap
// é como Map, mas só recebe objetos
// Dentro do WeakMap e WeakSet, se os objetos que são referenciados forem deletados, eles saem de dentro dos WeakMap e WeakSet

let mySet = new Set(['willian', 'jonas', 'godoy'])
let myWeakSet = new WeakSet([obj])
let myMap = new Map()

console.log(mySet.size) // retorna o tamanho do set

console.log('adicionando marcio ao set: ', mySet.add('marcio')) // adiciona itens ao set. ele não adiciona se já existir no set

console.log('deletando willian do set: ', mySet.delete('willian')) // deleta um item
console.log(mySet)

console.log('minha set tem jonas? ', mySet.has('jonas')) // retorna true ou false, dependendo se há tal item dentro do set

let it2 = mySet.values()

for (name of it2) {
    console.log(name)
}

myMap.set('Willian', 26)
myMap.set('Jonas', 22)
myMap.set('Godoy', 30)
console.log(myMap)


// Módulos em JS
// Pequenos trechos de código autocontido, que tem uma única funcionalidade