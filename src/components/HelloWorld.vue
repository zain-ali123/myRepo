<template>
  <div  class="hello">
    <h1>sign in</h1>
    <fieldset>
              <label for="email">Email<br></label>
              <input type="email" id="email" v-model="form.email">
              <span v-if="errors.email" class="error">{{ errors.email }}</span>
          </fieldset>
          <fieldset>
              <label for="password">Password<br></label>
              <input type="password" id="password" v-model="form.password">
              <span v-if="errors.password" class="error">{{ errors.password }}</span>
          </fieldset>
          <span v-if="errors.credentials" class="error">{{ errors.credentials }}</span>
    
        <button type="submit" @click="Login">Login{{ getForm(form) }}</button>
    
    <router-link to="/register">
      <button >register</button> 
    </router-link>
    

     
  </div>
</template>

<script>
import router from '@/router';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      form:{
        email: '',
        password: ''
      },
       errors: {},
      continue: false,
      count:0

    }
  },

  computed: {

  },
  methods: {
    getForm(obj) {
      console.log(obj);
    },
    validateForm() {

      this.errors = {};


      
      if (!this.form.email) {
        this.errors.email = 'Email is required.';
      } else if (!this.isValidEmail(this.form.email)) {
        this.errors.email = 'Invalid email format.';
      }

      
      if (!this.form.password) {
        this.errors.password = 'Password is required.';
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(this.form.password)) {
        this.errors.password = 'Password must include a special character.';
      } else if (!/^[A-Z]/.test(this.form.password)) {
        this.errors.password = 'Password must start with a capital letter.';
      } else if (this.form.password.length !== 8) {
        this.errors.password = 'Password must be 8 digits long.';
      }



      return Object.keys(this.errors).length === 0;
    },
    isValidEmail(email) {
     
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    },
    Login() {

      
      if (this.form.email == localStorage.getItem('email') && this.form.password == localStorage.getItem('password')) {
          console.log(' valid credentials. Logging...');
          router.push('/todo');

        }
    
      else {
        this.count = this.count + 1;
        this.errors.credentials = ' invalid credentials.Please enter correct credentials.';
        console.log(' invalid credentials. Please enter correct credentials.');
      }
    },

    
  


  },
  watch: {
    count(val) {
      if (val == 3) {
        alert("you have entered wrong credentials 3 time")
      }
    }

  },
  created() {
    console.log("im in created hoook")
  },
  mounted(){
    console.log("im in mounted hoook")
  },
  updated() {
    console.log("im in updated hoook")
  },
  unmounted() {
    console.log("im in unmounted hoook")
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.conditional-class{
  background-color: #42b983;}
/* .hello{
  display: block;
} */
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
