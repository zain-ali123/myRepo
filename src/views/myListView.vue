<template>
    <h1>See all todos here</h1>
    <ul>
        <li v-for="todo in myTodos" :key="todo">{{ todo }}</li>
    </ul>
    <router-view></router-view>
   <addtodo/> 
    
</template>

<script>
import router from '@/router'
import addtodo from '../components/addToTodo.vue'
export default {
    components:addtodo,
    name:'Myview',
    data() {
        return {
            myTodos:[]
        }
    },
    methods: {
        moveToAddItems() {
            router.push('')
        }
    }
}
</script>