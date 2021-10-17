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
            <v-img src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{item.username}}</v-list-item-title>
            <v-list-item-subtitle><p v-if="item.description != null">{{item.description}}</p>
            <p v-else>Hi, I'm new to Heap!</p></v-list-item-subtitle>
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