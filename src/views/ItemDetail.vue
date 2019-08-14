<template>
  <div class="container">
    <div v-if="cachedItem.id" class="row">
      <div class="col-md-9" style>
        <img :src="cachedItem.imgs[0]" style="max-width:100%;" />
        <div class="row thumbs m-2">
          <div class="col-3" v-for="ele in cachedItem.imgs" :key="ele">
            <a href="#">
              <img class="img-fluid" :src="ele" :alt="ele" />
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-3 desc-card">
        <h2>{{cachedItem.name}}</h2>
        <h3>{{cachedItem.year}}</h3>
        <div class="collapse-group">
          <p>
            You need to keep your enterprise secure, and you want to do it on your terms.
            <span
              class="collapse"
              id="viewdetails"
            >{{cachedItem.desc}}</span>
            <a data-toggle="collapse" style="color:#307DF6" data-target="#viewdetails">
              <strong>More... &raquo;</strong>
            </a>
          </p>
        </div>
        <div class="row justify-content-around">
          <button class="col-md-5 btn btn-primary">联系卖家</button>
          <button class="col-md-5 btn btn-success">加入收藏</button>
        </div>
      </div>
    </div>
  </div>
  <!-- TODO: use lightbox modal -->
</template>



<script>
import { mapState } from "vuex";
import store from "../store/index";
import actions from "../store/actions";
export default {
  computed: mapState({
    cachedItem: state => state.item.cachedItem
  }),
  mounted() {
    const id = this.$router.history.current.params.id;
    const cachedItem = this.cachedItem;
    if (cachedItem.id != id) {
      store.dispatch({ type: actions.item.FETCH_ITEM, id });
    } else {
      console.log("cache mode");
    }
  }
};
</script>


<style scoped>
a:hover {
  filter: brightness(80%);
}
</style>
