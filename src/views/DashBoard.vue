<template>
  <div>
    <section class="container-fluid bg-primary text-white">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="display-4">个人中心</h1>
          <p>
            <strong>李四</strong> 您好,欢迎回来!
          </p>
        </div>
      </div>
    </section>

    <section class="container mt-5">
      <div class="row">
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card">
            <img class="card-img-top" :src="require('../assets/home-1.jpg')" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">收藏夹</h5>
              <p class="card-text">随时随地关心宝贝的动向</p>
              <router-link to="/favorites" class="btn btn-primary">进入</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card">
            <img class="card-img-top" :src="require('../assets/home-1.jpg')" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">个人信息</h5>
              <p class="card-text">修改个人信息(邮件,名字,联系方式等)</p>
              <router-link to="/dashboard/personal-info" class="btn btn-primary">进入</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <img class="card-img-top" :src="require('../assets/home-1.jpg')" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">修改密码</h5>
              <p class="card-text">安全起见, 建议每个月修改一次密码</p>
              <router-link to="/dashboard/pswd-update" class="btn btn-primary">进入</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="row justify-content-center">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["user"]
};
</script>

