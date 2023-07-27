<template>
    <!-- <h1>sdkjfbw</h1> -->
    <ul>
        <li v-for="todo in todos" :key="todo">
            {{ todo }}
        </li>
    </ul>
    <button @click="passTOParent">Emit</button>
</template>

<script>
export default {
    name:'ShowTodo',
    props: {
        todos:[]
    },
    data() {
        return {
            name: "zain",
            
        }
    },
    methods: {
        passTOParent() {
            console.log(this.name)
            this.$emit('name', this.name)
        },
    },
    
    }

</script>