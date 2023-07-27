<template>
    <div class="ToDo">
        
            <fieldset>
                <label for="" ><br></label>
                <form ref="form">
                    <input type="text" v-model="string">
                </form>
                <button type="submit" @click="getTodo">Submit</button>
            </fieldset>
       
        
        
        
        <button type="submit" @click="displayList">ShowList</button>
        <h2 >{{ emitRecieved }}</h2>

        <ShowTodo @name="logName" :todos="todo" v-if="showList"/>
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
            showList: false,
            emitRecieved:''
            
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
        logName(x) {
            this.emitRecieved = x;
        }

    }
}
</script>