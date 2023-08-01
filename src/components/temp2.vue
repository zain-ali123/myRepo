<template>
    <h2>now im in temp 1st child ===>{{ a }}</h2>
    <secondChild/>
</template>
<script>
import secondChild from '../components/temp3.vue'
export default {
    name: 'firstChild',
    inject: ['message'],
    data() { return { a:this.message}},
    components: {
        secondChild
    }
    
}
</script>