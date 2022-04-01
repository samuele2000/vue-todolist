var app = new Vue({

    el: '#root',
    data: {
        newTodo: '', //variabile per il v-model dove verrà salvato quello che viene scritto nell'input
        todos: []    
    },

    methods: {
        removeTodo: function (todoIndex) {
            //usiamo lo splice all'elemento in base alla posizione dell'indice, quanti elementi togiere dalla posizione
            this.todos.splice(todoIndex, 1);
        },
        addTodo: function () {

            let objTodo = {
                text: this.newTodo,
                done: false
            }
            if (!this.newTodo == '') {
                this.todos.push(objTodo);

                this.newTodo = '';
            }
        },

        addDone: function(element){
            if( element.done == true ){
                element.done = false
            } else {
                element.done = true
            }
        }
    }
})