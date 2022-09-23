<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign Up</h3>
    <div class="form-group">
      <label>Username</label>
      <input type="text" class="form-control" v-model="username" placeholder="Username">
      <span
          v-if="v$.username.$error"> <small>150 characters or fewer. Letters, digits and @/./+/-/_ only.</small></span>
    </div>
    <div class="form-group">
      <label>First Name</label>
      <input type="text" class="form-control" v-model="first_name" placeholder="First Name">
    </div>
    <div class="form-group">
      <label>Last Name</label>
      <input type="text" class="form-control" v-model="last_name" placeholder="Last Name">
    </div>
    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" v-model="password" placeholder="Password">
      <span v-if="v$.password.$error"><small>Password should be 8+ characters, 1 capital, 1 numeric.</small></span>
    </div>
    <button class="btn btn-primary btn-block">Sign Up</button>
  </form>
</template>

<script>
import axios from 'axios';
import { useVuelidate } from '@vuelidate/core';
import { required, maxLength, helpers } from '@vuelidate/validators';


const alpha = helpers.regex(/^[\w.@+-]+$/);
const alpha2 = helpers.regex(/^(?=.*[A-Z])(?=.*\d).{8,}$/);

export default {
  name: 'SignUp',
  data() {
    return {
      username: '',
      first_name: '',
      last_name: '',
      password: '',
      v$: useVuelidate()
    };
  },
  validations() {
    return {
      username: { required, alpha, maxLength: maxLength(150) },
      first_name: { maxLength: maxLength(30) },
      last_name: { maxLength: maxLength(150) },
      password: { required, alpha2, maxLength: maxLength(128) }
    };
  },
  methods: {
    async handleSubmit() {
      const isFormCorrect = await this.v$.$validate();

      if (!isFormCorrect) return;

      await axios.post('http://emphasoft-test-assignment.herokuapp.com/api/v1/users/', {
            username: this.username,
            first_name: this.first_name,
            last_name: this.last_name,
            password: this.password,
            is_active: true,
          },
          {
            headers: {
              Authorization: 'Token 781bd9f1de084f4daa7ba2aa8a71a2eab855354e',
            },
          }
      );

      this.$router.push('/login');
    }
  }
};
</script>


<style scoped>
small {
  color: #FF0000;
}
</style>