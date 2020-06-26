<template>
  <div class="warning" :class="{ open: warningToggle }">
    <div class="warning__inner ptb-sm">
      <img src="@/assets/img/warning.svg" alt="warning.svg" />
      <h3 class="fs-md fw-bold mt-sm">Narudžba već u tijeku</h3>
      <p class="fs-base mt-sm">
        Kreiranje nove narudžbe nije moguće jer postoji aktivna narudžba za taj
        restoran.
      </p>
      <hr />
      <div class="u-flex u-flex-jc--sb plr-xl ptb-sm">
        <nuxt-link to="/restaurants"
          ><button class="">Natrag na restorane</button></nuxt-link
        >
        <nuxt-link :to="this.redirectRoute"
          ><button class="btn btn--primary">
            Pridruži se postojećoj
          </button></nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    warningToggle: false,
    redirectRoute: ''
  }
}
</script>

<style lang="scss" scoped>
.warning {
  opacity: 0;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  &.open {
    opacity: 1;
    pointer-events: all;
  }
  &__inner {
    width: 590px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
