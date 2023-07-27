<template>
    <h1>See all todos here</h1>
    <ul>
        <li v-for="todo in myTodos" :key="todo">{{ todo }}</li>
    </ul>
   <router-link to="/mylist/addtodo">
    <button @click="$router.push({ name: 'addTodo' })">Add todo</button>
   </router-link>
    
</template>

<script>
import router from '@/router'
import adtodo from '../components/addToTodo.vue'
export default {
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