<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li @click="pageJump('LEFT_SHIFT')" :class="liClass(1)">
        <a class="page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li v-for="i in pageCount" @click="pageJump(i)" :class="liClass(i)" :key="i">
        <a class="page-link">{{i}}</a>
      </li>
      <li @click="pageJump('RIGHT_SHIFT')" :class="liClass(pageCount)">
        <a class="page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ["itemsCount", "pageSize", "currentPage"],
  computed: {
    pageCount: function(props) {
      return Math.ceil(props.itemsCount / props.pageSize);
    }
  },
  methods: {
    liClass(i) {
      return i === this.$props.currentPage ? "page-item disabled" : "page-item";
    },
    pageJump(page) {
      if (page === "LEFT_SHIFT") page = this.currentPage - 1;
      else if (page === "RIGHT_SHIFT") page = this.currentPage + 1;
      if (page < 1) {
        page = 1;
        return;
      } else if (page > this.pageCount) {
        page = this.pageCount;
        return;
      }

      this.$emit("pageShift", page);
    }
  },
  mounted() {}
};
</script>

<style scoped>
li.disabled {
  cursor: not-allowed;
}
/* reload bootstrap class */
a:not([href]) {
  color: #007bff;
}
</style>
