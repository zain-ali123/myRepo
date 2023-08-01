<template>
    <h1>im in temp Parent and  message from leaf is =====>{{ leafNodeMessage }}</h1>
    <firstChild/>
</template>
<script>
import firstChild from '../components/temp2.vue'

export default {

    
    components: {
            firstChild
    },
   
    inject: ['leafMessage'],
    data() {
        return {
        leafNodeMessage:this.leafMessage
        }
    },
    provide() {
        return {
             message: 'Message from heirarchy top (hello)'
        }
   
       
    },
    created() {
        console.log(this.leafMessage)
    }
}
</script>