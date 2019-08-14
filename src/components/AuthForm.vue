<template>
  <form>
    <h2 class="text-primary mb-4">Please {{mode?'signin':'signup'}}</h2>
    <div class="form-group">
      <label for>Email {{!mode? "": '/ Username/ Phone'}}</label>
      <input
        v-model="formData.email"
        :class="inputClass[0]"
        type="text"
        required
        :placeholder="mode?'Email/ Username/ Phone':'Email'"
      />
      <div
        v-if="inputClass[0]!=='form-control'"
        class="alert alert-danger mt-2"
        role="alert"
      >Invalid email address</div>
    </div>
    <div class="form-group">
      <label for>Password</label>
      <input
        v-model="formData.password"
        :class="inputClass[1]"
        type="password"
        placeholder="Password"
      />
      <div
        v-if="inputClass[1]!=='form-control'"
        class="alert alert-danger mt-2"
        role="alert"
      >Invalid password {{mode?"":'Format, should between 3 and 30 characters, contain special character '}}</div>
    </div>
    <template v-if="!mode">
      <div class="form-group">
        <label for>Username</label>
        <input
          :class="inputClass[2]"
          v-model="formData.username"
          type="text"
          placeholder="Username"
        />

        <div
          v-if="inputClass[2]!=='form-control'"
          class="alert alert-danger mt-2"
        >Invalid username, should have length between 3 and 20</div>
      </div>
      <div class="form-group">
        <label for="email">Phone Number</label>
        <input
          :class="inputClass[3]"
          v-model="formData.phone"
          type="text"
          placeholder="Phone Number"
        />
        <div
          v-if="inputClass[3]!=='form-control'"
          class="alert alert-danger mt-2"
        >Invalid phone number, should have plain 11 digits. Like 19311119081</div>
      </div>
    </template>
    <div class="row justify-content-around">
      <button @click.prevent="submitForm" class="btn btn-primary col-6 col-md-4">Submit</button>
      <button type="button" @click="resetForm" class="btn btn-danger col-4 col-md-4">Clear</button>
      <p class="pt-2 mb-0">
        {{mode? 'Not a member yet?':'Already have an account?'}}
        <router-link :to="mode?'/auth/0':'/auth/1'">
          <small class="text-success font-weight-bold">Click here</small>
        </router-link>
      </p>
    </div>
  </form>
</template>

<script>
import Joi from "@hapi/joi";
import axios from "../axios/config";
export default {
  //   props: ["mode"],
  data: function(props) {
    return {
      inputClass: Array(4).fill("form-control"),
      mode: Number(this.$route.params.mode),
      formData: {
        email: "",
        password: "",
        username: "",
        phone: ""
      },
      initData: {
        email: "",
        password: "",
        username: "",
        phone: ""
      }
    };
  },
  watch: {
    $route(to, from) {
      this.mode = Number(to.params["mode"]);
      this.formData = { ...this.initData };
      this.inputClass = Array(4).fill("form-control");
    }
  },
  methods: {
    resetForm() {
      this.inputClass = Array(4).fill("form-control");
      this.formData = { ...this.initData };
    },
    submitForm() {
      this.authFailed = false;
      // 判断逻辑
      this.inputClass = Array(4).fill("form-control");
      var err, data;
      if (this.mode) {
        data = {
          email: this.formData.email,
          password: this.formData.password
        };
        err = validateAuthForm(data, 1);
      } else {
        data = { ...this.formData };
        err = validateAuthForm(data, 0);
      }
      if (err === null) {
        axios
          .post("auth/signin/", {
            usr_name: data.email,
            pswd: data.password
          })
          .then(res => console.log(res.data))
          .catch(err => {
            //  console.log(err.response.data.message)
            this.authFailed = true;
          });
      } else {
        const errIndex = err.message;
        this.inputClass.splice(errIndex, 1, "form-control is-invalid");
      }
    }
  }
};
// 判断逻辑
function validateAuthForm(data, mode) {
  //
  if (mode) {
    const result = signinSchema.validate(data);
    console.log(result.error);

    return result.error;
  } else {
    const result = signupSchema.validate(data);
    return result.error;
  }
}
const signinSchema = Joi.object().keys({
  email: Joi.string()
    .min(3)
    .max(30)
    .required()
    .error(new Error(0)),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9@~`!#$%^&*.,?]{3,30}$/)
    .required()
    .error(new Error(1))
});
//
const signupSchema = Joi.object().keys({
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required()
    .error(new Error(0)),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9@~`!#$%^&*.,?]{3,30}$/)
    .required()
    .error(new Error(1)),
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    .error(new Error(2)),
  phone: Joi.string()
    .min(11)
    .max(11)
    .required()
    .error(new Error(3))
});
</script>

<style scoped>
@media screen and (max-width: 400px) {
  button:first-child {
    /* margin-bottom: 10px; */
  }
}
</style>
