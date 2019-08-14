<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Navbar</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">
            首页
            <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/items?mode=recommand">精品甄选</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">关于焗瓷堂</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/dashboard">个人中心</router-link>
        </li>
        <form class="form-inline ml-lg-4 my-2 my-lg-0">
          <input
            v-model="searchText"
            class="form-control mr-sm-2"
            type="search"
            placeholder="输入关键字查询"
            aria-label="Search"
          />
          <button @click.prevent="onSearch" class="btn btn-success my-2 my-sm-0" type="submit">搜索宝贝</button>
        </form>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item mr-3">
          <router-link class="nav-link" to="/auth/0">注册</router-link>
        </li>
        <li class="nav-item mr-3">
          <router-link class="nav-link" to="/auth/1">登录</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data: function() {
    return {
      searchText: ""
    };
  },
  methods: {
    onSearch() {
      if (this.searchText) this.$emit("searched", this.searchText);
    }
  }
};
</script>
