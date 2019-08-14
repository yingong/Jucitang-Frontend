<template>
  <div class="card listing-preview">
    <img
      :src="item.imgs[0]"
      @click="$router.push(`/item-detail/${item.id}`)"
      class="card-img-top"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5
        class="card-title text-center"
        @click="$router.push(`/item-detail/${item.id}`)"
      >{{item.name}}</h5>
      <p class="card-text">{{item.year}}</p>
      <p class="card-text">¥{{item.price}}</p>
      <p class="card-text">{{`${item.favs}人收藏`}}</p>
      <!-- TODO: 加入价格,年代, 分类,  -->
      <p class="card-text">
        <small class="text-muted">Posted on {{item.postTime}}</small>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"]
};
</script>

<style scoped>
img:hover {
  cursor: pointer;
}
</style>
