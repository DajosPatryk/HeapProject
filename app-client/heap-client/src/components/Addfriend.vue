<template>
  <div id="blog-posts-events-demo" class="categories_container">
    <div class="categories">
      <div class="title">
        <h4>Add/Find a Friend</h4>
      </div>
      <div id="search-panel" class="centered">
        <v-text-field
          label="Search by name..."
          v-model="searchbox"
          class="font-bold"
          single-line
          hide-details
          clearable
        ></v-text-field>
      </div>
      <v-btn
        tile
        v-for="item in event_categories"
        :key="item"
        @click="eventchoosen(item)"
        x-large
        class="btncategories"
      >
        {{ item }}
      </v-btn>
      <div id="list-panel">
        <List class="centered" :listShow="listShow" :items="friends" />
      </div>
    </div>
  </div>
</template>

<script>
import List from "../components/FriendsList.vue";
export default {
  name: "Addfriend",
  components: {
    List,
  },
  data() {
    return {
      event_categories: [],
    };
  },
  methods: {
    eventchoosen(item) {
      this.$emit("chosenevent", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.categories_container {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(50, 50, 50, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}
.categories {
  background-color: white;
  display: flex;
  flex-direction: column;
}
.title {
  background-color: #e6e6e6;
  text-align: center;
  padding-bottom: 0.75rem;
  color: #707070;
}
.btncategories {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>
