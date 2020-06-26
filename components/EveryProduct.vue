<template>
  <section>
      <div class="menu-info-right__food">
          <div
            v-for="(category, index) in restaurantData.products"
            :key="index"
          >
            <h1 class="title-restaurant border-box">{{ index }}</h1>
            <!-- <h1 class="title-restaurant border-box">Burger</h1>  -->

            <div
              class="menu-info-right__food1  u-flex u-flex-fd-r u-flex-jc--sb"
              v-for="(item, index) in restaurantData.products[index]"
              :key="index"
            >
              <div class="ingredients">
                <!-- <p class="restaurant"></p> -->
                <p class="title-food">{{ item.name }}</p>

                <p class="ingredients-food">
                  {{ item.description }}
                </p>
              </div>
              <div class="price fs-base">
                <p>{{ item.price }} kn</p>
              </div>
            </div>
          </div>
        </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>