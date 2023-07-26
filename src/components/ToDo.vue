<template>
    <div class="ToDo">
        <form ref="form">
                <fieldset>
                <label for="" ><br></label>
                <input type="text" v-model="string">

            </fieldset>
        </form>
        
        <button type="submit" @click="getTodo ">Submit</button>
        
        <button type="submit" @click="displayList">ShowList</button>

        <ShowTodo @name="logName(name)" :todos="todo" v-if="showList"/>
    </div>
</template>
<script>
import ShowTodo from "../components/RenderList.vue" 
export default {
    name: 'todo',
    components: { ShowTodo },
    data() {
        return {
            
            todo: [],
            string: '',
            showList:false,
            
       }
    },
    methods: {
        getTodo() {
            
            this.todo.push(this.string);
            this.$refs.form.reset();
            console.log(this.todo);

                 
        },
        displayList() {
            this.showList = true;
        },
        logName(name) {
            console.log(name);
        }

    }
}
</script>