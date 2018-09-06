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

const loveArrowOneLine = ireland.map( name => `I love ${name}!` )
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