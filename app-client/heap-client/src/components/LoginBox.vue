<template>
  <div id="content">
    <v-text-field
      type="username"
      label="Username"
      class="transparent font-bold"
      v-model="username"
      solo
      elevation="3"
    ></v-text-field>
    <v-text-field
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show ? 'text' : 'password'"
      v-model="password"
      label="Password"
      class="input-group--focused transparent font-bold"
      @click:append="show = !show"
      solo
      elevation="3"
    ></v-text-field>
    <v-btn
      x-large
      block
      elevation="3"
      color="white"
      class="font-bold"
      id="loginBtn"
      :disabled="deactivate"
      @click="$emit('loginUser', user)"
      >Login</v-btn
    >
    <label style="color:white;" class="font-thin" id="loginLabel"
      >Don't have an Account?
      <span @click="$emit('swap')" class="font-bold"
        >Register here.</span
      ></label
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "YoshiDaSon",
      password: "CoolPassword",
      show: false,
    };
  },
  computed: {
    deactivate() {
      if (this.username.length != 0 && this.password.length != 0) return false;
      else return true;
    },
    user() {
      return {
        username: this.username,
        password: this.password
      };
    },
  },
};
</script>

<style>
#content {
  width: 100%;
  height: 100%;
}
#loginBtn {
  margin-bottom: 1rem;
  text-align: center;
}
#loginLabel {
  margin-left: auto;
  margin-right: auto;
}
.transparent {
  background-color: white !important;
  opacity: 0.7;
}
</style>
