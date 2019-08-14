<template>
  <div>
    <section class="container-fluid bg-success text-white">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="display-4">收藏夹</h1>
          <p>
            <strong>李四</strong> 您好, 看看您喜欢的宝贝
          </p>
        </div>
      </div>
    </section>

    <FavList></FavList>
  </div>
</template>

<script>
// TODO: 实现获取收藏夹逻辑.
import { mapState } from "vuex";
import store from "../store/index";
import actions from "../store/actions";

import FavList from "../components/FavList.vue";
export default {
  data: function() {
    return {};
  },
  components: {
    FavList
  },
  mounted() {
    store.dispatch({ type: actions.favorites.FETCH_FAV_LIST, uid: "123" });
  }
};
</script>