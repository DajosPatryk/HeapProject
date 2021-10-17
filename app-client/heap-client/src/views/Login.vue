<template>
  <div id="loginscreen">
    <div id="box">
      <v-img
        src="../../public/img/textures/TextLogo.png"
        width="50%"
        id="loginImg"
      ></v-img>
      <LoginBox @swap="swapBox" v-if="login" @loginUser="loginUser" />

      <RegisterBox
        :userAccounts="userAccounts"
        @swap="swapBox"
        @registerUser="registerUser"
        v-if="!login"
      />
      <a @click="$router.push('Map')">Dev Login</a>
    </div>
    <v-snackbar color="error" v-model="snackbar">
      <p id="snackbarText" class="text-center">
        {{ snackbarText }}
      </p>
    </v-snackbar>
    <v-snackbar color="success" v-model="snackbarSuccess">
      <p id="snackbarText" class="text-center">
        {{ snackbarText }}
      </p>
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";
import LoginBox from "../components/LoginBox.vue";
import RegisterBox from "../components/RegisterBox.vue";

export default {
  data() {
    return {
      login: true,
      userAccounts: [],
      snackbar: false,
      snackbarText: "",
      snackbarSuccess: false,
    };
  },
  components: {
    LoginBox,
    RegisterBox,
  },
  methods: {
    async getData() {
      let res = await axios.get("/accounts");
      this.userAccounts = res.data;
      console.log("check if users are received by client");
      console.log(this.userAccounts);
    },
    async registerUser(value) {
      console.log("abschicken");

      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      today = yyyy + "-" + mm + "-" + dd;

      value.createddate = today;

      console.log(value);
      await axios({
        url: "/register",
        method: "post",
        data: value,
      })
        .then((res) => {
          console.log(res.data);
          console.log("funkt");
          this.getData(); //Test Zwecke
          this.swapBox();
          this.snackbarText = "You've been successfully registered";
          this.snackbarSuccess = true;
        })
        .catch((err) => {
          console.log(err.response);
          if (err.response.status === 400) {
            this.snackbarText = "Username and E-Mail exist already";
            this.snackbar = true;
            console.log(err);
          } else if (err.response.status === 401) {
            this.snackbarText = "Username exists already";
            this.snackbar = true;
          } 
          else if (err.response.status === 402) {
            this.snackbarText = "E-Mail exists already";
            this.snackbar = true;
          } 
          else if (err.response.status === 500) {
            this.snackbarText = "Something went wrong on the server";
            this.snackbar = true;
          }
          else if (err.request) {
            this.snackbarText = "Something went wrong! Try again later.";
            this.snackbar = true;
          } else {
            console.log("cooles else");
          }
        });

      // if (res.data == "username and email exists") {
      //   this.snackbarText = "Username and E-Mail exists already";
      //   this.snackbar = true;
      // } else if (res.data == "email exists") {
      //   this.snackbarText = "E-Mail exists already";
      //   this.snackbar = true;
      // } else if (res.data == "username exists") {
      //   this.snackbarText = "Username exists already";
      //   this.snackbar = true;
      // } else {
      //   console.log("funkt");
      //   console.log(res);
      //   this.getData();
      //   this.$router.push("Login");
      // }
    },
    async loginUser(user) {
      await axios({
        url: "/login",
        method: "post",
        data: user,
        // withCredentials: true
      })
        .then((res) => {
          console.log(res.data);
          this.$store.dispatch("setToken", {accessToken: res.data.accessToken, refreshToken: res.data.refreshToken});
          this.$store.dispatch("setUser", res.data.user);
          this.$router.push("Map");
        })
        .catch((err) => {
          console.log(err.response);
          if (err.response.status === 401) {
            this.snackbarText = "Password or Username is wrong";
            this.snackbar = true;
            console.log(err);
          } else if (err.response.status === 500) {
            this.snackbarText = "Something went wrong on the server";
            this.snackbar = true;
          } else if (err.request) {
            this.snackbarText = "Something went wrong! Try again later.";
            this.snackbar = true;
          } else {
            console.log("cooles else");
          }
        });

      // console.log(res);

      // if (res.status === 401 || res.status === 404) {
      //   this.snackbarText = "Password or Username is wrong";
      //   this.snackbar = true;
      //   console.log("nope");
      // } else {
      //   console.log("coolio");
      //   this.$store.state.user.accessToken = res.data.accessToken;
      //   this.$store.state.user.refreshToken = res.data.refreshToken;
      //   this.$router.push("Map");
      // }
    },
    swapBox() {
      this.login = !this.login;
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style>
#loginscreen {
  width: 100%;
  height: 100%;
  background-image: url("../../public/img/textures/LoginBackgroundMobile.jpg") !important;
  background-size: cover 100%;
  background-position: center;
  background-repeat: no-repeat;
}
#box {
  position: relative;
  margin-right: 3rem;
  margin-left: 3rem;
  top: 40%;
  transform: translateY(-50%);
}
#loginImg {
  margin-bottom: 3rem;
  margin-left: auto;
  margin-right: auto;
}
#snackbarText {
  margin: 0px;
}
/* .error {
  top: 1rem;
  position: sticky;
} */
</style>
