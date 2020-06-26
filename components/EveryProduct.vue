<template>
  <section>
      <div class="menu-info-right__food">
          <div
            v-for="(category, index) in restaurant.products"
            :key="index"
          >
            <h1 class="title-restaurant border-box">{{ index }}</h1>
            <!-- <h1 class="title-restaurant border-box">Burger</h1>  -->

            <div
              class="menu-info-right__food1  u-flex u-flex-fd-r u-flex-jc--sb"
              v-for="(item, index) in restaurant.products[index]"
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
             
              <div v-if="addProduct">
                    HEHEHHE

              </div>
            </div>
          </div>
        </div>
  </section>
</template>

<script>
export default {
  props: ['restaurant', 'addProduct']
}
</script>

<style scoped lang="scss">
p {
  line-height: 20px;
}

.menu-info {
  // padding-top:150px;
  position: relative;
  margin: 0 auto;
  width: 100%;
  padding-bottom: 104px;
}

.left__side {
  width: 33%;
}
.menu-info__left {
  border: 1px solid #eeeeee;

  /* padding-left: 32px; */
}

.fast-food {
  width: 100%;
}

.menu-info-left__info {
  padding-left: 32px;
  padding-bottom: 38.8px;
}

.restaurant-title {
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.5px;
  padding-top: 38px;
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

.menu-info-left__condements {
  border: 1px solid #eeeeee;
  box-sizing: border-box;
}

.menu-info__right {
  width: 67%;
}

.menu-info__right {
  margin-left: 24px;
}
.tag {
  padding-top: 46px;
}

.tag2 {
  padding-left: 40px;
}

.categories,
.condements {
  margin-top: 30px;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
}

.categories__title,
.condements__title {
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  padding-bottom: 24px;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 32px;
}

.categories__paragraf {
  box-sizing: border-box;
  padding-top: 24px;
  padding-bottom: 33px;
  padding-left: 32px;

  font-style: normal;
  font-weight: 550;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 0.1px;

  color: #070707;
}

.condements__paragraf {
  box-sizing: border-box;
  padding-top: 24px;
  padding-bottom: 33px;
  padding-left: 32px;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  display: flex;
  align-items: center;
}

.single-categories {
  padding-bottom: 20px;
}

/* RIGHT */
.title-restaurant {
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.4px;
  width: 100%;
  height: 100px;
}

.menu-info__right {
  background: $tertiary-color;
  /* Backgrounds / Light Gray */

  // border: 1px solid #EEEEEE;
  // box-sizing: border-box;
  //  width: 80%;
}

.menu-info-right__food1 {
  background: $tertiary-color;
  /* Backgrounds / Light Gray */

  border: 1px solid #eeeeee;
  box-sizing: border-box;
}

.ingredients {
  padding-top: 11px;
  padding-bottom: 10.5px;
  padding-left: 49px;
}

.title-restaurant {
  padding-top: 31px;
  padding-left: 47px;
}

.title-food {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #070707;
}

.ingredients-food {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #070707;
}

.price {
  padding-top: 24.6px;

  padding-bottom: 24.9px;
  padding-right: 40px;
}
.footer {
  box-sizing: border-box;
  border: 1px solid $primary-color;
  background-color: $primary-color;
  bottom: 0px;
}

// .footer-components__left{
//     background-color: $tertiary-color;
// }
// .footer-components__center{
//     color: $tertiary-color;
// }
// .footer-components__right{
//      background-color: $secondary-color;
// }

//fotter

.hiddenOrders {
  width: 100%;
  background-color: black;
  padding: 10px 10%;
}

.hiddenOtrders__singleRestaurant {
  width: 100%;
  padding: 30px;
  background-color: white;
  margin-top: 2px;
}

.hiddenOtrders-singleRestaurant__join {
  background-color: $secondary-color;
}

.btn-join {
  padding-left: 16px;
  padding-right: 16px;
}
</style>