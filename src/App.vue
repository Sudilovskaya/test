<template>
  <NavigationItems/>
  <div class="auth-wrapper">
    <div class="auth-inner">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavigationItems from '@/components/NavigationItems';


export default {
  name: 'App',
  components: {
    NavigationItems
  },
  data() {
    return {
      user: null,
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600;700;800&display=swap");

* {
  box-sizing: border-box;
}

body {
  background: #1C8EF9;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
  font-family: "Fira Sans", sans-serif;
}

h1, h2, h3, label, span {
  font-weight: 500;
  font-family: "Fira Sans", sans-serif;
}

body, html, #app {
  width: 100%;
  height: 100%;
}

#app {
  text-align: center;
}

.navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}

.auth-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  height: 100%;
  padding: 30px;

  & h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
  }

  & .form-control:focus {
    border-color: #167bff;
    box-shadow: none;
  }
}

.auth-inner {
  max-width: 500px;
  width: 100%;
  margin: auto;
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  border-radius: 15px;
  padding: 40px 30px 45px 30px;
  transition: all .3s;

  @media(min-width: 768px) {
    padding: 40px 55px 45px 55px;
  }
}

.custom-control-label {
  font-weight: 400;
}

.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7f7d7d;
  margin: 0;
}

.forgot-password a {
  border-color: #167bff;
}

</style>
