<template>
  <div>
    <div class="row">
      <div v-for="ele in itemList" :key="ele.id" class="my-3 col-md-6 col-lg-4 col-xl-3">
        <ItemCard :item="ele"></ItemCard>
      </div>
    </div>
    <Pagination @pageShift="pageJump" :currentPage="currentPage" :itemsCount="60" :pageSize="6"></Pagination>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";
import ItemCard from "./ItemCard.vue";
import { mapState } from "vuex";
import store from "../store/index";
import actions from "../store/actions";

export default {
  props: ["itemList"],
  components: {
    Pagination,
    ItemCard
  },
  computed: mapState({
    currentPage: state => state.items.currentPage,
    cachedPath: state => state.items.cachedPath
  }),
  methods: {
    pageJump(page) {
      const currentPath = this.$router.history.current.fullPath;
      store.dispatch({
        type: actions.items.JUMP_PAGE,
        page,
        query: this.$router.history.current.query,

        cachedPath: currentPath
      });
      //update lastUrl in store to new one
    }
  },
  mounted() {
    // get cache first, wether to reset list when destruct
    const currentPath = this.$router.history.current.fullPath;
    if (currentPath === this.cachedPath) console.log("ItemList cache mode");
    else {
      // no cache load from server and update current route as cache
      store.dispatch({
        type: actions.items.JUMP_PAGE,
        page: 1,
        query: this.$router.history.current.query,
        cachedPath: currentPath
      });
    }
  },
  watch: {
    //component内router subscribe
    $route(to, from) {
      // Put your logic here...
      const currentPath = this.$router.history.current.fullPath;
      store.dispatch({
        type: actions.items.JUMP_PAGE,
        page: 1,
        query: this.$router.history.current.query,
        cachedPath: currentPath
      });
    }
  }
};
</script>

<style scoped>
img,
h5 {
  cursor: pointer;
}
</style>
