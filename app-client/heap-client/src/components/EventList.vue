<template>
    <div>
    <v-list three-line>
      <template v-for="(item, index) in items">
        <!-- <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader> -->

        <v-divider
          :key="index"
          v-if="index >= listShow"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img src="../../public/img/custom-img/small-map-pin.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{item.title}} <p v-if="item.type != null">- {{item.type}}</p></v-list-item-title>
            <v-list-item-subtitle>{{item.description}} - {{item.address}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    </div>
</template>

<script>
    export default {
       data() {
            return {
                //
            }
        },
        props: {
            items: Object,
            listShow: Number
        } 
    }
</script>

<style lang="scss" scoped>

</style>