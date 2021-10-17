<template id="panel">
  <div>
    <div class="eventdiv" v-if="show_categories" @click="shutevent">
      <Eventfilter
        @chosenevent="choosenevent"
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
    <div id="search-panel" class="centered">
      <v-text-field
        label="Search"
        v-model="searchbox"
        class="font-bold"
        solo
        elevation="3"
      ></v-text-field>
    </div>
    <div id="btn-panel" class="centered">
      <v-btn
        id="filterbtn"
        x-large
        block
        elevation="3"
        color="white"
        class="font-bold"
        @click="setCategories"
        >Filter {{ chosenevent }}
      </v-btn>
    </div>
    <div id="list-panel">
      <List class="centered" :listShow="listShow" :items="events" />
    </div>
    <div id="showmore-panel" class="centered">
      <v-btn
        id="showmorebtn"
        x-large
        block
        elevation="3"
        color="white"
        @click="listShow = 100"
        >Show More Events
      </v-btn>
    </div>
  </div>
</template>

<script>
import List from "../components/EventList.vue";
import axios from "axios";
import Eventfilter from "../components/Eventfilter.vue";

export default {
  name: "EventMenu",
  components: {
    List,
    Eventfilter,
  },
  data() {
    return {
      events: [],
      listShow: 10,
      searchbox: "",
      show_categories: false,
      chosenevent: "",
    };
  },
  async mounted() {
    await this.refreshEvents();
  },
  methods: {
    //Fetches Events from Server
    async refreshEvents() {
      let res = await axios.get("/events");
      this.events = res.data;
      console.log("Fetched Events: " + this.events, this.events);
    },
    setCategories() {
      this.show_categories = !this.show_categories;
    },
    choosenevent(value) {
      this.chosenevent = value;
      this.show_categories = false;
    },
    shutevent() {
      this.show_categories = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#top-panel {
  padding-bottom: 3rem;
  background-image: url("../../public/img/textures/TopBanner.png");
  background-size: 100%;
  overflow: visible;
  height: 12rem;
}
#search-panel {
  margin-bottom: -1rem;
}
#list-panel {
  width: 100%;
  margin: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
#backbtn {
  top: 1.5rem;
  left: 1.5rem;
}
#showmorebtn {
  height: 2rem;
  font-size: 0.8rem;
}
.eventdiv {
  height: 100%;
  width: 100%;
}
</style>