<template>
  <div>
    <h3>Todo List</h3>
    <input v-model="inputValue" type="text" name='inputValue'  placeholder="please add a todo"/>
    <input class='checkbox' type="checkbox" name="reminder" v-model="reminder"/>
    <button class="btn" @click="addTodo">Add</button>
    {{inputValue}}
  </div>
  <div :key="todo.id"  v-for="todo in todoList">
        <p @dblclick="toggle(todo.id)" :class="[todo.reminder?'reminder':'red']">{{todo.id}} - {{todo.title}} - {{todo.reminder}}</p>
  </div>
</template>

<script>
export default {
    name: 'TodosItem',
    data() {
        return {
            todoList:[],
            inputValue:'',
            counter: 0,
            reminder:false
        }
    },
    methods: {
        addTodo() {
            if (!this.inputValue) {
                alert('please add a input value');
                return
            }
            this.todoList.push({ id: this.counter, title: this.inputValue ,reminder: this.reminder});
            this.counter++;
            this.inputValue = ''
            this.reminder = false;
        },
        toggle(id) {
            this.todoList = this.todoList.map((t) => {
                if (t.id == id) {
                    t.reminder = !t.reminder;
                }
                return t;
            });
        }
    }
}
</script>

<style>
input{
    padding: 12px 18px;
}
.reminder{
    background-color:green;
    padding:10px;
    border: 1px solid black;
    margin: 1px;
}
.checkbox{
    width: 47px;
    height: 26px;
}
.red{
    background-color:red;
    padding:10px;
    border: 1px solid black;
    color: white;
}
</style>