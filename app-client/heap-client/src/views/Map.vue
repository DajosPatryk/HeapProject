<template>
  <div>
    <google-map/>
    <div id="top-panel">
      <v-btn id="profilebtn" fab x-large elevation="5" color="white"
      @click="$router.push('Profile')">
        <v-icon>account_circle</v-icon>
      </v-btn>
    </div>
    <div id="bottom-panel" class="centered">
      <v-btn
      id="whbtn" 
      x-large 
      block 
      elevation="3" 
      color="white"
      class="font-bold" 
      style="margin-bottom:1.5rem;"
      @click="$router.push('EventMenu')">What's Happening?</v-btn>
      <div id="map-label" class="centered" style="color:grey; width:100%; text-align:center;">Search for Events!</div>
    </div>
  </div>
</template>

<script>
import GoogleMap from '../components/GoogleMap.vue';
export default {
  name: 'Map',
  components: {
    GoogleMap
  },
  methods: {
    getStarted() {
      console.log(this.$store.state.user)
    }
  },
  created () {
    this.getStarted();
  },
};
</script>

<style scoped>
#bottom-panel {
  position: fixed;
  bottom:0;
  width:100%;
  height:9rem;
  background-color: #ffffff;
}
#whbtn {
  height:4rem;
  font-size:1.1rem;
  color:gray;
  top: 50%;
  -ms-transform: translateY(-85%);
  transform: translateY(-85%);
}
#top-panel {
  position: fixed;
  top:0;
  width:100%;
  height:12rem;
}
#profilebtn {
  top:1.5rem;
  left:1.5rem;
}
#map-label{
  color:grey;
  width:100%;
}
div[data-app='true'] {
  background-color:white;
}
</style>