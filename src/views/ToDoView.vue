<template>
    <div class="todo">
        <h1>Todo</h1>
    </div>
    <todo/>
</template>
<script>
import todo from '@/components/ToDo.vue'
export default {
    name: 'ToDoView',
    components: {
        todo
    }
}

</script>
