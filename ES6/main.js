/* CLASSES ES6
class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class ToDoList extends List{
    constructor() {
        super();

        this.user = "Luan";
    }

    showUser(){
        console.log(this.user);
    }
}

var myToDoList = new ToDoList();

document.getElementById("newToDo").onclick = function(){
    myToDoList.add("Novo to do");
}

myToDoList.showUser(); 

class Matematica{
    static soma(a, b){
        return a + b;
    }
}

console.log(Matematica.soma(10, 15)); 
*/

/* VARIAVEIS (Const e Let) 
// Constante
const user = {name: "Luan"};
user.name = "João";
console.log(user);

// Var de escopo
function teste(x){
    let y = 2;
    console.log(y);
    if(x > 5){
        let y = 4;
        console.log(x, y);
    }
}
teste(10);
*/

/* OPERAÇÕES EM ARRAY 
const arr = [1, 3, 4, 5, 8, 10];
// Map
const newArr = arr.map(function(item, index){
    return item + index;
});
console.log(newArr);

// Reduce
const sum = arr.reduce(function(tot, next){
    return tot + next;
});
console.log(sum);

// Filter
const filter = arr.filter(function(item){
    return item % 2 === 0;
});
console.log(filter);

// Find
const find = arr.find(function(item){
    return item === 4;
});
console.log(find);
*/

/* ARROW FUNCTIONS
const arr = [0, 15, 28, 10, 2];
const newArr = arr.map(item => item * 2);
console.log(newArr);
*/

/* VALORES PADRÃO 
function sum(a = 3, b = 6){
    return a + b;
}
console.log(sum());
*/

/* DESESTRUTURAÇÃO 
const user = {
    nome: "Luan",
    idade: 19,
    endereco: {
        cidade: "Guarulhos",
        estado: "SP",
    },
};

const { nome, idade, endereco: {cidade} } = user;

function showName({nome, idade}){
    console.log(nome +" - "+ idade);
}
showName(user);
*/

/* OPERADORES rest/spread 
// rest => resto dos itens
const user = {
    nome: "Luan",
    idade: 19,
    empresa: "Pandora"
};
const {nome, ...resto} = user;

const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;

function sum(...params){
    return params.reduce((tot, next) => tot + next);
}
console.log(sum(20,30,40));

// spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

const user1 = {
    nome: "Luanzera",
    idade: 19,
    empresa: "Pandora"
};

const user2 = {
    ...user1,
    nome: "José"
};

console.log(user1, user2);
*/

/* TEMPLATE LITERALS 
const nome = "Luan";
const idade = 19;

console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
*/

/* OBJECT SHORT SYNTAX 
const name = "Luan";
const age = 19;

const user = {
    name,
    age,
    company: "Luandev"
};
console.log(user);
*/

