<template>
  <div>
    <h3>Todo List</h3>
    <input v-model="inputValue" type="text" name='inputValue'  placeholder="please add a todo"/>
    <button class="btn" @click="addTodo">Add</button>
    {{inputValue}}
  </div>
  <div :key="todo.id"  v-for="todo in todoList">
        <p>{{todo.id}} - {{todo.title}}</p>
  </div>
</template>

<script>
export default {
    name: 'TodosItem',
    data() {
        return {
            todoList:[],
            inputValue:'',
            counter:0
        }
    },
    methods: {
        addTodo() {
            if (!this.inputValue) {
                alert('please add a input value');
                return
            }
            this.todoList.push({ id: this.counter, title: this.inputValue });
            this.counter++;
            this.inputValue=''
        }
    }
}
</script>

<style>
input{
    padding: 12px 18px;
}
</style>