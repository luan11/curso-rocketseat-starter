// Exercício 1
class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    isAdmin(){
        return this.admin === true;
    }
}

class Admin extends User {
    constructor(email, pw){
        super(email, pw);
        this.admin = true;
    }
}

const admin = new Admin("luan@luandev.com.br", "123");
const user = new User("user@luandev.com.br", "321");

// console.log(user.isAdmin()); false
// console.log(admin.isAdmin()); true

// Exercício 2
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
];

const idades = usuarios.map(usuario => usuario.idade);
const filtro = usuarios.filter(usuario => usuario.idade > 18 && usuario.empresa === "Rocketseat");
const encontrar = usuarios.find(usuario => usuario.empresa === "Google");
const calc = usuarios
    .map(usuario => ({...usuario, idade: usuario.idade * 2}))
    .filter(usuario => usuario.idade <= 50);

// Exercício 3
const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);

const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario => usuario.idade;

const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = "Diego", idade = 18) => ({nome, idade});
// console.log(mostraUsuario(nome, idade), mostraUsuario(nome));
const promise = () => new Promise((resolve, reject) => resolve());

// Exercício 4
const empresa = {
    nomeEmp: 'Rocketseat',
    enderecoEmp: {
        cidadeEmp: 'Rio do Sul',
        estadoEmp: 'SC',
    }
};
const {nomeEmp, enderecoEmp:{cidadeEmp, estadoEmp}} = empresa;

function showNameAndAge({nome, idade}){
    return `${nome} tem ${idade} anos.`;
}
// console.log(showNameAndAge({nome: "Luan", idade: 19}));

// Exercício 5
const arr_nums = [1, 2, 3, 4, 5, 6];
const [firstEl, ...restEls] = arr_nums;
// console.log(firstEl, restEls);

function sum(...params){
    return params.reduce((tot, next) => tot + next);
}
// console.log(sum(10, 20, 30, 5));

const userDefault = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
}
const u1 = {...userDefault, nome: 'Gabriel'};
const u2 = {...userDefault, endereco:{...userDefault.endereco, cidade: 'Lontras'}};
// console.log(u1, u2);

// Exercício 6
// console.log(`O usuário ${nome} possuí ${idade} anos.`);

// Exercício 7
const shortSyntaxObj = {
    nome,
    idade,
    cidade: "Guarulhos"
}
// console.log(shortSyntaxObj);