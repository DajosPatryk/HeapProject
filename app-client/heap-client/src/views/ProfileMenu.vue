<template>
  <div>
    <div v-if="show_addfriend" @click="shutaddfriend">
      <Addfriend
        @chosenevent="chosenevent"
        v-if="show_addfriend"
        style="position: absolute; z-index: 99"
      />
    </div>
    <div id="top-panel">
      <v-btn
        id="backbtn"
        fab
        x-large
        elevation="3"
        color="white"
        @click="$router.push('Map')"
      >
        <v-icon>keyboard_backspace</v-icon>
      </v-btn>
    </div>
    <div id="profile-panel" class="centered">
      <div
      class="profile-story">
        <v-img v-if="this.$store.state.user.detail.username == 'YoshiDaSon'"
        id="profile-avatar"
        src="https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg"
        ></v-img>
        <v-img v-else
        id="profile-avatar"
        src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
        ></v-img>
         <svg 
         id="profile-avatar-border"
         viewBox="0 0 100 100" 
         xmlns="http://www.w3.org/2000/svg" 
         style="enable-background:new -580 439 577.9 194;"
         xml:space="preserve">
         <circle cx="50" cy="50" r="40" />
         </svg>
      </div>
        <div color="grey" style="color:dimgrey !important;">
            <label class="font-bold">{{this.$store.state.user.detail.username}}</label><v-icon>location_on</v-icon>
            <br>
            <label><p v-if="this.$store.state.user.detail.description != null">{{this.$store.state.user.detail.description}}</p>
            <p v-else>Click here to add a description!</p></label>
        </div>
    </div>
    <div id="btn-panel" class="centered">
      <v-btn
        id="filterbtn"
        x-large
        block
        elevation="3"
        color="white"
        class="font-bold"
        @click="addfriend"
        >Add or Find Friends
      </v-btn>
      <br>
      <p v-if="noFriends" class="text-center">
      {{frlText}}
    </p>
    </div>
    <div id="list-panel">
      <List class="centered" :listShow="listShow" :items="friends" />
    </div>
    <div 
    v-if="!noFriends"
    id="showmore-panel" 
    class="centered">
      <v-btn
        id="showmorebtn"
        x-large
        block
        elevation="3"
        color="white"
        @click="listShow = 100"
        >Show More Friends
      </v-btn>
    </div>
    <div
    style="margin-top:1rem;"
    class="centered">
      <v-btn 
      color="white"
      elevation="3"
      class="font-bold"
      @click="logoutUser">Logout</v-btn>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Addfriend from "../components/Addfriend.vue";
import List from "../components/FriendsList.vue";

export default {
  name: "EventMenu",
  components: {
    List,
    Addfriend,
  },
  data() {
    return {
      friends: [],
      username: "test",
      description: "Lorem Ipsum Dolor Sit Amet",
      listShow: 10,
      searchbox: "",
      show_addfriend: false,
      chosenevent: "",
      noFriends: false,
      frlText: ''
    };
  },
  async mounted() {
    await this.refreshFriends();
  },
  methods: {
    //Fetches Events from Server
    async getProfile() {
      let res = await axios.get("/profile");
      this.username = res.data.username;
    },
    async refreshFriends() {  
      await axios({
        url: "http://localhost:3000/frl",
        method: "post",
        data: {
          id: this.$store.state.user.detail.id,
        },
      })
        .then((res) => {
          console.log(this.$store.state.user.detail.id);
          console.log("funkt");
          this.friends = res.data;
          console.log("Fetched Friends: " + this.friends);
          this.friends.forEach((element) => {
            console.log(element);
          })
        })
        .catch((err) => {
          console.log(err.response);
          if (err.response.status === 404) {
            this.frlText = "No friends yet" 
            this.noFriends = true;
            console.log(err);
          } else if (err.response.status === 500) {
            this.frlText = "Something went wrong on the server" 
            this.noFriends = true;
          } else if (err.request) {
            this.frlText = "Something went wrong! Try again later." 
            this.noFriends = true;
          } else {
            console.log("cooles else");
          }
        });
    },
    async logoutUser() {
      console.log(this.$store.state.user.tokens.refreshToken);
      let res = await axios.post("/logout", {token: this.$store.state.user.tokens.refreshToken},
      );
      console.log(res);
      this.$store.dispatch("logout");
      this.$router.replace("Login");
    },
    addfriend() {
      this.show_addfriend = !this.show_addfriend;
    },
    choosenevent(value) {
      this.chosenevent = value;
      this.show_addfriend = false;
    },
    shutaddfriend() {
      this.show_addfriend = false;
    }
  },
  created() {
    this.getProfile();
  },
};
</script>

<style lang="scss" scoped>
#top-panel {
  background-image: url("../../public/img/textures/TopBanner.png");
  background-size: 100%;
  overflow: visible;
  padding-top:-2rem;
  height:12rem;
  padding-bottom: 1rem;
}
#profile-panel {
  margin-top:-5rem;
}
#profile-avatar{
    /* width:5rem !important;
    height:5rem !important;
    border-radius:1000px;
    background-color:white; */
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%, -50%);
    width:70px;
    border-radius:50%;
}

.profile-story{
  /* background: linear-gradient(to left, #743ad5, #d53a9d);
  border: 0.3rem solid transparent;
  border-radius:1000px;
  display:inline-block;
  background-repeat:no-repeat;
  background-size: 120% 120%;
  top: -10rem;
  left: -10rem; */
  position:relative;
  width:100px;
  height:100px;
  margin-left:-0.5rem;
}
#profile-avatar-border{
    fill:none;
    stroke:#743ad5;
    stroke-linecap: round;
    stroke-width:3;
  }

#list-panel {
  width: 100%;
  margin: auto;
  position: sticky;
  padding-top: 0.5rem;
}
#backbtn {
  top: 1.5rem;
  left: 1.5rem;
}
#showmorebtn {
  height: 2rem;
  font-size: 0.8rem;
}
</style>
