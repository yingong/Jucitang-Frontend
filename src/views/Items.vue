<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">古今中外 瓷器之家</h1>
        <p
          class="lead"
        >This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>
    <div class="container">
      <ItemList :itemList="itemList"></ItemList>
    </div>
  </div>
</template>

<script>
import ItemList from "../components/ItemList.vue";

import store from "../store/index";
import { mapState } from "vuex";
export default {
  components: {
    ItemList
  },
  computed: mapState({
    itemList: state => state.items.list
  }),
  mounted() {}
};
</script>

