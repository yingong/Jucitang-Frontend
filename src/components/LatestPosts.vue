<template>
  <div class="row my-5">
    <div class="col-12 text-center">
      <h2 class="display-4">{{mode==='hot'? '大家喜欢':'新品上架'}}</h2>
    </div>
    <div v-for="ele in list.slice(0,3)"  :key="ele.name" class="col-4">
      <ItemCard :item="ele"></ItemCard>
    </div>

    <div class="col-12 text-right py-2 mr-1">
      <router-link :to="`/items?mode=${mode}`" style="text-decoration:none">
        <strong class="display-4 text-success">{{`更多${mode==='hot'?'热款':'新品'}...`}}</strong>
      </router-link>
    </div>
  </div>
</template>

<script>
import store from "../store/index";
import { mapState } from "vuex";

import ItemCard from "./ItemCard.vue";
import actions from "../store/actions";
export default {
  props: ["mode"],
  components: {
    ItemCard
  },
  computed: mapState({
    list: function(state) {
      return this.mode === "hot"
        ? state.items.mostFavs
        : state.items.newArrivals;
    }
  }),
  mounted() {
    //缓存
    if (!this.list.length)
      store.dispatch({
        type: actions.items.FETCH_LIST,
        query: { itemCount: 3, latest: true, mode: this.mode },
        origin: "home"
      });
    else console.log("home page cache mode");
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
a:hover {
  filter: brightness(80%);
}
a > strong {
  font-size: 1.2em;
  font-weight: 300;
}
</style>