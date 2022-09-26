<template>
    <div>Counter : {{counter}}</div>
    <button class="btn" @click="onChange(1)">Increment</button>
    <button class="btn" @click="onChange(-1)">Decrement</button>
    <button class="btn" @dblclick="multiply">Multiply by 5</button>
</template>
<script>
export default {
    name: "counter-item",
    data() {
        return {
            counter : 0
        }
    },
    methods : {
        onIncrement() {
            this.counter = this.counter + 1
        },
        onDecrement() {
            this.counter = this.counter - 1;   
        },
        onChange(value) {
            this.counter = this.counter + value
        },
        multiply() {
            this.counter = this.counter * 5
        }
    }
}
</script>
