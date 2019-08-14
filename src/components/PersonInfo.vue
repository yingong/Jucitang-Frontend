<template>
  <form class="col-md-8 mt-5 px-4 py-3 my-4 bg-light" style="border-radius:4px;max-width:600px">
    <div class="control-group">
      <label for>电子邮件</label>
      <input disabled :value="email" type="text" class="form-control" />
    </div>
    <div class="control-group">
      <label for>用户名</label>
      <input
        v-model="formControls[0].value"
        type="text"
        :class="formControls[0].err?'form-control is-invalid':'form-control'"
      />
      <div v-if="formControls[0].err" class="alert alert-danger mt-2" role="alert">密码有误!</div>
    </div>
    <div class="control-group">
      <label for>手机号码</label>
      <input
        v-model="formControls[1].value"
        type="text"
        :class="formControls[1].err?'form-control is-invalid':'form-control'"
      />
      <div v-if="formControls[1].err" class="alert alert-danger mt-2" role="alert">密码有误!</div>
    </div>
    <div class="row justify-content-around">
      <button @click.prevent="submit" class="btn col-11 mt-3 col-md-3 btn-success">提交</button>
      <button @click.prevent="cancel" class="btn col-11 mt-3 col-md-3 btn-danger">取消</button>
    </div>
  </form>
</template>
<script>
import Joi from "@hapi/joi";

export default {
  data: function() {
    const initialState = [
      { err: false, value: "dddd" },
      { err: false, value: "电话蛤蟆" }
    ];
    return {
      initialState: initialState,
      email: "adasd.com",
      formControls: JSON.parse(JSON.stringify(initialState))
    };
  },
  methods: {
    submit() {
      this.resetErrors();
      const data = {
        username: this.formControls[0].value,
        phone: this.formControls[1].value
      };
      const err = validate(data);
      if (err !== null) {
        this.formControls[err].err = true;
      } else {
        this.$router.push("/dashboard");
      }
    },
    cancel() {
      this.$router.go("-1");
    },
    resetErrors() {
      for (let i in this.formControls) {
        const newItem = { err: false, value: this.formControls[i].value };
        this.formControls.splice(i, 1, newItem);
      }
    }
  }
};
function validate(obj) {
  const err = schema.validate(obj);
  if (err.error) {
    return Number(err.error.message);
  } else return null;
}
const schema = Joi.object().keys({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    .error(new Error(0)),
  phone: Joi.string()
    .min(11)
    .max(11)
    .required()
    .error(new Error(1))
});
</script>