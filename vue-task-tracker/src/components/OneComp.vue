<template>
    <input placeholder="please type" v-model="inputValue" type='text' name='inputValue'/>
    <input placeholder="please type" v-model="inputValue" type='text' name='inputValue'/>
</template>
<script>
export default {
    name: 'componentOne',
    data() {
        return {
            inputValue:''
        }
    }
}
</script>
