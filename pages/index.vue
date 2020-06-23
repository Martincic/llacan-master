<template>
  <section>
    <div class="llacan u-flex u-flex-fd--r u-flex-ai--c">
      <div class="llacan__left">
        <p class="llacan-left__title fs-xxl">
          S ovom aplikacijom nikad nećeš ostati
          <span class="special">
            l
            <span class="special1">lačan</span>
          </span>
          <img class="llacan-left__logo" src="~/assets/img/lloyds-logo.svg" />
        </p>
      </div>

      <div class="llacan__right u-flex u-flex-ai--c">
        <form @submit.prevent="userLogin" class="form u-flex u-flex-fd--c">
          <h1 class="login u-flex u-flex-jc--c fs-xl">Prijavi se</h1>
          <div class="form-item u-flex u-flex-fd--c">
            <label class="form-item__label fs-base" for="email">Email</label>
            <input
              class="input input-email input-placeholder"
              type="email"
              placeholder="Unesite svoj email"
              v-model="email"
            />
          </div>
          <label class="form-item__label fs base" for="password">Lozinka</label>
          <div class="input-picture">
            <input
              class="input input-password"
              type="password"
              placeholder="Unesite svoju lozinku"
              v-model="password"
            />
            <span class="icon-eye"></span>
            <!-- <img class="eye" src="~/assets/img/Oval.svg" /> -->
          </div>
          <!-- <nuxt-link to="/restaurants/"><button class="btn btn-prijava">Prijava</button></nuxt-link> -->
          <button class="btn btn-prijava">Prijava</button>

          <p class="forget u-flex u-flex-jc--c" @click="modalForget = true">
            Zaboravili ste lozinku
            <img class="line" src="~/assets/img/line.svg" />
          </p>
        </form>
      </div>
    </div>
    <div class="footer"></div>
    <section class="modal-forget border-box" v-if="modalForget">
      <div class="modal-forget__information">
        <div class="modal-forget-information__close u-flex u-flex-jc--fe mt-sm mr-xs">
          <button class="close pr-sm" @click="modalForget = false">X</button>
        </div>

        <div class="modal-forget-information__title u-flex u-flex-jc--c u-flex-ai--c ptb-xs">
          <h3>Zaboravili ste lozinku?</h3>
        </div>
        <div class="modal-send-information__paragraf u-flex u-flex-jc--c u-flex-ai--c mlr-lg">
          <p>Za oporavak lozinke kontaktirajte administratora</p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      modalForget: false
    }
  },
  methods: {
    async userLogin() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })
        
      } catch (err) {
        alert('Something went wrong! :(')
        console.log("HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
        console.log(err.response)
      }
    }
  }
}
</script>
<style scoped lang="scss">

.llacan {
  background-color: $primary-color;
  width: 100%;
  // height: 100vh;
  //  height: 1100px;
  margin: 0 auto;
  // height: 924px;
  // height:auto;
  // height:880px;
  height: auto;
}

.llacan__left {
  background-color: $tertiary-color;
  width: 50%;
  margin-left: 15%;
  height: 90%;
  // padding-bottom: 100px;
  // margin-bottom: 129px;
  position: relative;
  padding-bottom: 300px;

  padding-top: 40px;
}

.llacan__right {
  width: 50%;
  margin-right: 15%;
  margin-top: 190px;
}

.llacan-left__title {
  // font-size: 82px;
  letter-spacing: -1px;
  line-height: 88px;
  color: $primary-color;
  padding-left: 61px;
  padding-right: 151px;
  padding-top: 48px;
  padding-bottom: 40px;
  font-weight: bold;
}

.special {
  background-color: $primary-color;
  color: $secondary-color;
}

.special1 {
  background-color: $primary-color;
  color: $tertiary-color;
}

.llacan-left__logo {
  position: absolute;
  bottom: 0;
  padding-bottom: 62.24px;
  right: 67px;
}

.form {
  display: flex;
  align-content: center;
  padding-left: 300px;
  padding-bottom: 120px;
}
.login {
  // font-size: 56px;
  line-height: 60px;
  letter-spacing: -1px;
  color: $secondary-color;
  padding-bottom: 72px;
}

.form-item {
  margin-bottom: 18px;
}

.form-item__label {
  // font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: $tertiary-color;
  mix-blend-mode: normal;
  opacity: 0.92;
  padding-bottom: 6px;
}

.input-email {
  width: 342px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  position: relative;
  background: #252525;
  height: 48px;
}

.input-email::placeholder {
  color: $tertiary-color;
  padding: 14px 14px 14px 16px;
}
.input-password {
  width: 342px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  position: relative;
  background: #252525;
  height: 48px;
  position: relative;
}

.input-password::placeholder {
  color: $tertiary-color;
  padding: 14px 14px 14px 16px;
}
.input-picture {
  position: relative;
}
.icon-eye {
  position: absolute;
  top: 19px;
  right: 18px;
  // bottom: 18px;
}

.btn-prijava {
  background-color: $secondary-color;
  margin-top: 24px;
  color: $primary-color;
  width: 342px;
  height: 44px;
}

.forget {
  font-weight: 500px;
  font-size: 14px;
  line-height: 20px;
  color: $secondary-color;
  padding-top: 26px;
}

img.line {
  padding-left: 7.5px;
  padding-top: 4px;
}

.footer {
  box-sizing: border-box;
  border: 1px solid $primary-color;
  background-color: $primary-color;
  bottom: 0px;
  height: 100px;
}

@media screen and (max-width: 1880px) {
  .llacan-left__title {
    padding-right: 20px;
  }
}

@media screen and (max-width: 1510px) {
  .llacan {
    display: flex;
    flex-direction: column;
  }
  .llacan__left {
    width: 50%;
    margin-top: 100px;

    margin-left: 0;
    padding-right: 15px;
  }

  .llacan__right {
    width: 50%;
    margin-left: 0;
    margin-right: 0;
    display: flex;
    justify-content: center;
  }
  section {
    height: auto;
  }

  .form {
    padding-left: 0;
  }
}

@media screen and (max-width: 1073px) {
  .llacan__left {
    padding-bottom: 100px;
  }
}

@media screen and (max-width: 989px) {
  .llacan__left {
    width: 80%;
    //  margin-left:60px;
    // margin-right:60px;
  }
}

@media screen and (max-width: 768px) {
  .llacan-left__title {
    line-height: 50px;
  }
}

@media screen and (max-width: 416px) {
  .llacan-left__title {
    line-height: 35px;
  }
}

@media screen and (max-width: 503px) {
  .form {
    width: auto;
  }
}

//modal

.modal-forget {
  position: absolute;
  left: 0;
  top: 0;
  width: 35%;
  height: 15%;
  background-color: #fff;
  z-index: 3333;
  margin-top: 30%;
  margin-left: 30%;
}
.close {
  background-color: #ffffff;
  box-sizing: none;
  border: none;
}
</style>
