<template>
  <form class="col-md-8 mt-5 px-4 py-3 bg-light" style="border-radius:4px;max-width:600px">
    <h2 class="text-primary mb-4">修改密码</h2>
    <div class="control-group">
      <label for="pswd">旧密码</label>
      <input
        v-model="formControls[0].value"
        type="password"
        :class="formControls[0].err?'form-control is-invalid':'form-control'"
      />
    </div>
    <div v-if="formControls[0].err" class="alert alert-danger mt-2" role="alert">密码有误!</div>

    <div class="control-group">
      <label for="new-pswd">新密码</label>
      <input
        v-model="formControls[1].value"
        type="password"
        :class="formControls[1].err?'form-control is-invalid':'form-control'"
      />
      <div
        v-if="formControls[1].err"
        class="alert alert-danger mt-2"
        role="alert"
      >密码须在3到30个字符,大小写数字并有至少一个下列特殊符号 @~`!#$%^&*.,?</div>
    </div>
    <div class="control-group">
      <label for="new-pswd">确认新密码</label>
      <input
        v-model="formControls[2].value"
        type="password"
        :class="formControls[2].err?'form-control is-invalid':'form-control'"
      />
      <div v-if="formControls[2].err" class="alert alert-danger mt-2" role="alert">两次密码不一致</div>
    </div>
    <div class="row justify-content-around">
      <button
        @click.prevent="submit"
        style="max-width:150px"
        class="mt-3 col-md-3 btn btn-success px-4"
      >更新</button>
      <button
        @click.prevent="resetAll"
        style="max-width:150px"
        class="mt-3 col-md-3 btn btn-danger px-4"
      >清空</button>
    </div>
  </form>
</template>

<script>
import Joi from "@hapi/joi";
const initialState = [
  { err: false, value: "" },
  { err: false, value: "" },
  { err: false, value: "" }
];
export default {
  data: function() {
    return {
      formControls: JSON.parse(JSON.stringify(initialState))
    };
  },
  methods: {
    submit() {
      this.resetErrors();
      const data = {
        pswd: this.formControls[0].value,
        newPswd: this.formControls[1].value,
        confirmNewPswd: this.formControls[2].value
      };
      const err = validate(data);
      if (err !== null) {
        this.formControls[err].err = true;
      } else {
        this.$router.push("/dashboard");
      }
    },
    resetAll() {
      this.formControls = JSON.parse(JSON.stringify(initialState));
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
    if (Number(err.error.message) == err.error.message) {
      return Number(err.error.message);
    } else return 2;
  } else return null;
}
const schema = Joi.object().keys({
  pswd: Joi.string()
    .regex(/^[a-zA-Z0-9@~`!#$%^&*.,?]{3,30}$/)
    .required()
    .error(new Error(0)),
  newPswd: Joi.string()
    .regex(/^[a-zA-Z0-9@~`!#$%^&*.,?]{3,30}$/)
    .required()
    .error(new Error(1)),
  confirmNewPswd: Joi.ref("newPswd")
});
</script>
