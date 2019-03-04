var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var toDos = JSON.parse(localStorage.getItem('listToDos')) || [];

function renderToDos(){
    listElement.innerHTML = '';

    for(toDo of toDos){
        var toDoEl = document.createElement('li');
        var toDoText = document.createTextNode(toDo);
        
        var linkEl = document.createElement('a');
        linkEl.setAttribute('href', '#');

        var pos = toDos.indexOf(toDo);
        linkEl.setAttribute('onclick', 'deleteToDo('+ pos +')');

        var linkText = document.createTextNode('Excluir');

        linkEl.appendChild(linkText);

        toDoEl.appendChild(toDoText);
        toDoEl.appendChild(linkEl);

        listElement.appendChild(toDoEl);
    }
}
renderToDos();

function addToDo(){
    var toDoText = inputElement.value;
    toDos.push(toDoText);
    inputElement.value = '';
    renderToDos();
    saveToStorage();
}

buttonElement.onclick = addToDo;

function deleteToDo(pos){
    toDos.splice(pos, 1);
    renderToDos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('listToDos', JSON.stringify(toDos));
}