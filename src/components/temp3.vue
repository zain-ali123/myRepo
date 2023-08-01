<template>
  <h3 >Im 2nd child and mesage from top is===> {{ ancestorMessage }}</h3>
  <v-btn @click="a">a</v-btn>
</template>

<script>
export default {
    name: 'secondChild',
    inject: ['message'],
    data() {
        return {
            ancestorMessage: this.message,
            message: 'Message from leaf of heirachy (hello)'
        } 
    },
    provide() {
        return {
            leafMessage:this.message
        }
    },
    methods: {
        a() {
            console.log(this.message)
        }
    },
    
   
    created() {
        console.log("in created hook")
        console.log(this.message)
        console.log("leaving created hook")
    }
}
</script>

<style>

</style>