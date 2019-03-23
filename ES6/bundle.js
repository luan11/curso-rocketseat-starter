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
"use strict";
