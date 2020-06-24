<template>
  <article class="box ">
    <div class="one-restaurant ptb-md plr-md">
      <h1 class="restaurant-title">{{ restaurantInfo.title }}</h1>
      <!-- <p class="tag">k <nuxt-lin:to="tag.link" v-for="tag in restaurantInfo.tags" :key="tag.id">{{tag.name}},</nuxt-link> </p> -->
      <p class="tag">{{ restaurantInfo.tags.map(e => e.name).join(', ') }}</p>
      <p class="restaurant-adress">
        <span class="icon-home-icon"></span>{{ restaurantInfo.address }}
      </p>
      <p class="restaurant-number">
        <span class="icon-phone-icon"></span>+{{ restaurantInfo.phone }}
      </p>
      <div class="buttons pt-md">
        <!-- <AppButton @click="$router.push('/restaurants/_slug')">Menu i info</AppButton> -->
        <nuxt-link
          :to="`/restaurants/${restaurantInfo.slug}`"
          class="btn btn--primary"
          >Menu i info</nuxt-link
        >

        <nuxt-link
          :to="`/restaurants/${restaurantInfo.slug}/order`"
          class="btn btn--secondary"
          >Nova narudžba</nuxt-link
        >
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ['restaurantInfo']
}
</script>

<style scoped>
.one-restaurant {
  box-shadow: 0px 0px 4px #070707;
}
.restaurant-title {
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.4px;
  color: #070707;
}
.tag {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: gray;
}

.restaurant-adress {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  padding-top: 16px;
}

.restaurant-number {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  padding-top: 12px;
}

.buttons {
  display: flex;
  justify-content: space-between;
}
</style>
