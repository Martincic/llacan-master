<template>
  <div class="warning" :class="{ open: warningToggle }">
    <div class="warning__inner ptb-sm">
      <img src="@/assets/img/deleteOrder.svg" alt="deleteOrder.svg" />
      <h3 class="fs-md fw-bold mt-sm">Želite li otkazati narudžbu?</h3>
      <p class="fs-base mt-sm">
        Otkazivanjem se gube svi odabiri u narudžbi!
      </p>
      <p class="fs-base mt-sm">Ps. Ostati ćete llačni</p>
      <hr />
      <div class="u-flex u-flex-jc--sb plr-xl ptb-sm">
        <button @click="this.warningToggle = false" class="">
          Natrag na narudžbu
        </button>
        <button @click="removeOrder" class="btn btn--primary">Otkaži</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    removeOrder() {
      this.$axios
        .delete('/orders/' + this.orderSlug)
        .then(res => {
          response = res.data
          console.log(response)
        })
        .catch(err => {
          //this.$router.push({ name: 'index' })
          console.log(err)
        })
    }
  },
  props: {
    warningToggle: false,
    orderSlug: ''
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
