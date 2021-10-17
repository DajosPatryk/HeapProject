<template>
  <div id="blog-posts-events-demo" class="categories_container">
    <div class="categories">
      <div class="title">
        <h4>Category</h4>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event_categories: [
        "Hot",
        "Trending",
        "Newest",
        "Soonest",
        "Official Events",
        "Private Events",
        "Nightclubs",
        "Bars",
        "Concerts",
      ],
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
  width: 17rem;
}
.title {
  background-color: #e6e6e6;
  text-align: center;
  padding-bottom: 0.75rem;
  color: #707070;
}
.btncategories {
  height: 2rem;
  font-size: 1rem;
}
</style>
