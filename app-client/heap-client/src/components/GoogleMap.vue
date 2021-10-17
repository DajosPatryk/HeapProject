<template>
  <div>
    <gmap-map
    :options="mapOptions"
    :center="center"
    :zoom="11"
    style="position: fixed; padding: 0; margin: 0; top: -5rem; left: 0; width:100%;  height:100%;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center = m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
//Test Axios Call
import axios from "axios";

export default {
  name: "GoogleMap",
  data() {
    return {
      events: [],
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
      mapOptions:{
        disableDefaultUI : true,
      }
    };
  },
  async mounted() {
    this.geolocate();
    await this.refreshEvents();
    await this.refreshMarkers();
  },
  methods: {
    //Fetches Events from Server
    async refreshEvents(){
      let res = await axios.get("/events");
      this.events = res.data;
      //console.log("Fetched Events: " + this.events, this.events);
    },
    //Puts markers on the map using coordinates from the column "location"
    refreshMarkers(){
      for(let item of this.events){
        let bracketRemover = item.gpslocation;
        bracketRemover = bracketRemover.substring(1);
        bracketRemover = bracketRemover.substring(0, bracketRemover.length-1);
        //console.log("Marker pushed: " + bracketRemover)
        let perm = bracketRemover.split(",");
        const marker = {
          lat: parseFloat(perm[0]),
          lng: parseFloat(perm[1])
        }
        this.markers.push({ position: marker })
      }
      //console.log("Pushed Markers: " + this.markers, this.markers)
    },

    //Default Methods by plugin
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>

<style></style>
