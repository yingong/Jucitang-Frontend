<template>
  <section>
    <section id="showcase" style="background-color:#E9ECEF">
      <div class="container py-5">
        <div class="row bg-success justify-content-center" style>
          <h1 class="col-10 display-3 text-center">珍宝古萃 千年底蕴</h1>
          <p
            class="col-10 lead"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae beatae blanditiis fugit eligendi, cupiditate tempore sit autem ad quisquam perferendis assumenda iusto necessitatibus error porro reprehenderit aperiam qui culpa quaerat.</p>

          <form>
            <div class="form-row">
              <div class="col-4">
                <input v-model="formQuery.focus" :class="fClass[0]" type="text" placeholder="关键字" />
              </div>
              <div class="col-4">
                <select :class="fClass[1]" v-model="formQuery.year">
                  <option value disabled>年代</option>
                  <option value="1">唐朝及以前</option>
                  <option value="2">宋</option>
                  <option value="3">元</option>
                  <option value="4">明</option>
                  <option value="5">清朝</option>
                  <option value="6">民国以后</option>
                </select>
              </div>
              <div class="col-4">
                <select :class="fClass[2]" v-model="formQuery.type">
                  <option value disabled>类别</option>
                  <option value="1">盘,碗,杯</option>
                  <option value="2">瓶</option>
                  <option value="3">首饰</option>
                  <option value="4">其他</option>
                </select>
              </div>
            </div>
            <div class="form-row py-4">
              <div class="col">
                <button @click.prevent="onSubmit" class="btn btn-info col">搜索</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    <section class="container my-5">
      <LatestPosts mode="latest" :title="'新品上架'" :foot="'更多新品'"></LatestPosts>
      <LatestPosts mode="hot" :title="'大家喜欢'" :foot="'更多热款'"></LatestPosts>
    </section>

    <section class="container-fluid bg-info py-5 text-white">
      <div class="row">
        <div class="col col-md-4 text-center">
          <font-awesome-icon size="5x" icon="comment" />
          <h4 class="my-3">联系我们</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A officia tenetur aut, voluptas eligendi architecto unde ad. Molestias porro repellat laborum illum, aut quam dicta illo ipsa vitae, nesciunt sequi?</p>
        </div>
        <div class="col col-md-4 text-center">
          <font-awesome-icon size="5x" icon="toolbox" />
          <h4 class="my-3">瓷器维修</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A officia tenetur aut, voluptas eligendi architecto unde ad. Molestias porro repellat laborum illum, aut quam dicta illo ipsa vitae, nesciunt sequi?</p>
        </div>
        <div class="col col-md-4 text-center">
          <font-awesome-icon size="5x" icon="map-marked-alt" />
          <h4 class="my-3">店铺地址</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A officia tenetur aut, voluptas eligendi architecto unde ad. Molestias porro repellat laborum illum, aut quam dicta illo ipsa vitae, nesciunt sequi?</p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import LatestPosts from "../components/LatestPosts.vue";
import store from "../store/index";
import actions from "../store/actions";
export default {
  name: "home",
  components: {
    LatestPosts
  },
  data: function() {
    return {
      formQuery: {
        focus: "",
        year: "",
        type: ""
      },
      formErro: false,
      fClass: ["form-control", "form-control", "form-control"]
    };
  },

  methods: {
    onSubmit(e) {
      this.fClass = ["form-control", "form-control", "form-control"];
      const query = { ...this.formQuery };
      if (query.focus.length > 200) {
        return this.fClass.splice(0, 1, "form-control is-invalid");
      }
      if (!query.year) {
        return this.fClass.splice(1, 1, "form-control is-invalid");
      }
      if (!query.type) {
        return this.fClass.splice(2, 1, "form-control is-invalid");
      }

      this.$router.push({ path: "/items", query });
    }
  }
};
</script>


