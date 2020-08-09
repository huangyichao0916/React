import {observable,computed,action} from 'mobx';

class TodoList{
    @observable todos = [];

    @action
    addTodo = title => {
        if (!title) {
            return;
        }
        this.todos.push()
    }
}

const store = new TodoList();

export default store;