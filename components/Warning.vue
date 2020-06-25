<template>
  <div class="warning">
    <img src="@/assets/img/warning.svg" alt="warning.svg" />
    <h3 class="fs-md fw-bold">Narudžba već u tijeku</h3>
    <p class="fs-base">
      Kreiranje nove narudžbe nije moguće jer postoji aktivna narudžba za taj
      restoran.
    </p>
    <hr />
    <div class="u-flex u-flex-jc--sb plr-xl">
      <button class="">Natrag na restorane</button>
      <button class="btn btn--primary">Pridruži se postojećoj</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.warning {
  width: 590px;
}
</style>
