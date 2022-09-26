<template>
    <input name="inputValue" v-modal="inputValue" type="text" placeholder='you will get here'/>
</template>
<script>
export default {
    name: "componentTwo",
    data() {
        return {
            inputValue:''
        }
    }
}
</script>

