<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
div[data-app="true"] {
  background-image: none !important;
  background-color: white !important;
}
</style>