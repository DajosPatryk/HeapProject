<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <div id="content">
      <v-text-field
        type="email"
        label="E-mail"
        class="transparent font-bold"
        :rules="emailRules"
        v-model="email"
        solo
        elevation="3"
      ></v-text-field>
      <v-text-field
        :rules="usernameRules"
        v-model="username"
        label="Username"
        hint="At least 3 characters"
        class="transparent font-bold"
        solo
        elevation="3"
      ></v-text-field>
      <v-select
        v-model="gender"
        :items="items"
        class="transparent font-bold"
        solo
        label="Gender (optional)"
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-text-field
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="passwordRules"
        :type="show ? 'text' : 'password'"
        v-model="password"
        label="Password"
        hint="At least 8 characters"
        class="input-group--focused transparent font-bold"
        @click:append="show = !show"
        solo
        required
        elevation="3"
      ></v-text-field>
      
      <v-checkbox
        dark
        v-model="TOS"
        color="white"
        value="white"
        label="I accept the Terms of Service."
        hide-details
        :rules="[(v) => !!v || 'Diese Bestätigung ist notwendig!']"
        required
      >
      </v-checkbox>
      <br />
      <v-btn
        :disabled="!valid"
        x-large
        block
        elevation="3"
        color="white"
        class="font-bold mb-2"
        @click="
          $emit('registerUser', user); validate
        "
        >Register</v-btn
      >
      <label style="color: white" class="font-thin"
        >Already have an Account?
        <span @click="$emit('swap')" class="font-bold">Login here.</span></label
      >
    </div>
  </v-form>
</template>

<script>
export default {
  props: {
    userAccounts: {
      type: Array,
    },
  },
  data() {
    return {
      TOS: false,
      valid: true,
      email: "antonio.j01@htlwienwest.at",
      username: "antonioj01",
      gender: "male",
      password: "CoolPassword",
      items: ["male", "female", "other"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        // (v) => this.userAccounts.find(el => el.email == v) != undefined || "email is already in use"
      ],
      usernameRules: [
        (v) => !!v || "Username is required",
        (v) => v.length >= 3 || "Minimum 3 characters.",
        // (v) => this.userAccounts.find(el => el.username == v) != undefined || "username is already in use"
      ],
      passwordRules: [
        (v) => !!v || "Required.",
        (v) => v.length >= 8 || "Minimum 8 characters",
      ],
      show: false,
    };
  },
  computed: {
    user() {
      return {
            username: this.username,
            email: this.email,
            gender: this.gender,
            password: this.password,
            createddate: null,
          } 
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate();
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
#registerCheckbox {
  color: white !important;
  margin-bottom: 1rem;
}
.transparent {
  background-color: white !important;
  opacity: 0.7;
}
</style>
