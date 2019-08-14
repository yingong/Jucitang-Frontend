<template>
  <div class="container">
    <Form></Form>
  </div>
</template>

<script>
import Form from "../components/AuthForm.vue";

export default {
  components: {
    Form
  },
  data: function() {
    return {
      mode: this.$route.params.mode
    };
  }
};
</script>

<style scoped>
form {
  border-radius: 4px;
  background-color: #f7f7f9;
  width: 90%;
  max-width: 600px;
  padding: 15px 25px;
  padding-top: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
