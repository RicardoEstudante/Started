class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data)
    }
}
class TodoList extends List{
    constructor() {
        super();

        this.usuario = "Ricardo";
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add("Novo todo");
}

MinhaLista.mostraUsuario();


// ---Errado---
// class TodoList2 {
//     constructor() {
//         this.todos = [];
//     }

//     static addTodo(){
//         this.todos.push("Novo todo");
//         console.log(this.todos);
//     }
// }
// TodoList.addTodo();
// TodoList.addTodo();
// TodoList.addTodo();

class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(2, 2))