<template>
    <!-- <h1>sdkjfbw</h1> -->
    <ul>
        <li v-for="todo in todos" :key="todo">
            {{ todo }}
        </li>
    </ul>
</template>

<script>
export default {
    name:'ShowTodo',
    props: {
        todos:[]
    }  
    }

</script>