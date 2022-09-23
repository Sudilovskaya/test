<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <div class="form-group">
      <label>Username</label>
      <input type="text" class="form-control" v-model="username" placeholder="Username">
      <span
          v-if="v$.username.$error"> <small>150 characters or fewer. Letters, digits and @/./+/-/_ only.</small></span>
    </div>
    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" v-model="password" placeholder="Password">
      <span v-if="v$.password.$error"><small>Password should be 8+ characters, 1 capital, 1 numeric.</small></span>
    </div>
    <button class="btn btn-primary btn-block">Login</button>
  </form>
</template>

<script>
import axios from 'axios';
import { useVuelidate } from '@vuelidate/core';
import { required, maxLength, helpers } from '@vuelidate/validators';


const alpha = helpers.regex(/^[\w.@+-]+$/);
const alpha2 = helpers.regex(/^(?=.*[A-Z])(?=.*\d).{8,}$/);

export default {
  name: 'LoginComponent',
  data() {
    return {
      username: '',
      password: '',
      v$: useVuelidate()
    };
  },
  validations() {
    return {
      username: { required, alpha, maxLength: maxLength(150) },
      password: { required, alpha2, maxLength: maxLength(128) }
    };
  },
  methods: {
    async handleSubmit() {
      const isFormCorrect = await this.v$.$validate();

      if (!isFormCorrect) return;

      const response = await axios.get('http://emphasoft-test-assignment.herokuapp.com/api/v1/users/', {
            headers: {
              Authorization: 'Token 781bd9f1de084f4daa7ba2aa8a71a2eab855354e',
            },
            body: {
              username: this.username,
              password: this.password,
              is_active: true,
            }
          }
      );
      const users = response.data;

      users.forEach(item => {
        if (item.username === this.username) {
          this.$store.dispatch('user', item);
        }
      });

      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
small {
  color: #FF0000;
}
</style>