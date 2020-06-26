<template>
  <section>
    <div class="menu-info u-flex u-flef-fd--r pt-sm">
      <div class="left__side">
        <div class="menu-info__left u-flex u-flex-fd--c">
          <div class="menu-info-left_inforestaurant">
            <div class="menu-info-left__img">
              <img class="fast-food" src="~/assets/img/fast-food.png" />
            </div>

            <div class="menu-info-left__info">
              <h1 class="restaurant-title">{{ restaurantData.title }}</h1>
              <p class="restaurant-adress">
                <span class="icon-home-icon"></span>{{ restaurantData.address }}
              </p>
              <p class="restaurant-number">
                <span class="icon-phone-icon"></span>+{{ restaurantData.phone }}
              </p>
            </div>
          </div>
        </div>
        <div class="categories">
          <div class="categories__title fs-md">
            <h1>Kategorije</h1>
          </div>
          <div
            v-for="(category, index) in restaurantData.products"
            :key="index"
          >
            <div class="categories__paragraf fs-base">
              <p>{{ index.toUpperCase() }}</p>
            </div>
          </div>

          <div
            class="categories__paragraf fs-base"
            v-show="restaurantData.pommes_price != null"
          >
            <p>POMMES</p>
          </div>
        </div>

        <div v-if="allCodemenets.length > 0">
          <div class="condements">
            <div class="condements__title fs-md">
              <h1>Dodaci</h1>
            </div>
            <div class="condements__paragraf fs-base">
              <p>
                {{ allCodemenets }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="menu-info__right u-flex u-flex-fd--r">
        <AllProducts
          v-if="restaurantData"
          :restaurant="restaurantData"
          :addProduct="false"
        />
      </div>
    </div>

    <div class="footer">
      <div class="footer-components  u-flex u-flex-jc--sb mlr-xxl mt-sm ">
        <div class="footer-components__left ptb-xs plr-xs">
          <nuxt-link to="/restaurants/">
            <button class="btn btn-menu btn-button">
              <span class="icon-back-icon"></span>Natrag na restorane
            </button>
          </nuxt-link>
        </div>
        <div class="footer-components__center ptb-xs">
          <p @click="openFooter">{{ ordersInfo }}</p>
        </div>
        <div class="footer-components__right ptb-xs plr-xs">
          <button
            type="button"
            @click="createOrder"
            class="btn btn-menu btn-button-new"
          >
            Nova narudžba
          </button>
          <!-- :to="`/restaurants/${restaurantData.slug}/order`" -->
        </div>
      </div>
      <collapse-transition>
        <div v-show="showFooter">
          <div
            class="hiddenOrders u-flex u-flex-fd--c u-flex-jc--c u-flex-ai--c "
          >
            <div
              class=" hiddenOtrders__singleRestaurant u-flex u-flex-fd--r u-flex-jc--sb"
              v-for="(order, i) in activeOrders"
              :key="i"
            >
              <div
                class="hiddenOtrders-singleRestaurant__restaurantTime u-flex u-flex-fd--r pl-xs "
              >
                <p
                  class="hiddenOtrders-singleRestaurant-restaurantTime__title font-normal-bold fs-md pt-xs"
                >
                  {{ order.restaurant.title }}&nbsp;
                </p>
                <p
                  class="hiddenOtrders-singleRestaurant-restaurantTime__paragraf pt-xs "
                >
                  &nbsp;(otvorio - {{ order.user_name.split(' ')[0] }}
                  {{ order.created_at | moment }})
                </p>
              </div>
              <div class="hiddenOtrders-singleRestaurant__join ">
                <button class="btn btn-join ptb-xs ">Pridruži se</button>
              </div>
            </div>
          </div>
        </div>
      </collapse-transition>
    </div>
    <Warning :redirectRoute="this.routeToOrder" />
  </section>
</template>

<script>
import { CollapseTransition } from 'vue2-transitions'
import moment from 'moment'
import Warning from '@/components/Warning'
import AllProducts from '@/components/EveryProduct'

export default {
  components: {
    CollapseTransition,
    Warning,
    AllProducts
  },

  data() {
    return {
      restaurantData: [],
      isLoading: true,
      showFooter: false,
      activeOrders: [],
      finalSlug: '',
      routeToOrder: ''
    }
  },
  methods: {
    openFooter() {
      this.showFooter = !this.showFooter
    },
    orderIsActive() {
      this.finalSlug =
        this.restaurantData.slug + '-' + moment(new Date()).format('DD-MM-YYYY')
      console.log('orderIsActive')
      let exists = false
      for (let i = 0; i < this.activeOrders.length; i++) {
        if (this.activeOrders[i].slug === this.finalSlug) {
          return true
        }
      }
      return false
    },
    postOrder() {
      this.$axios
        .post(process.env.baseApiUrl + 'orders/store', {
          user_id: this.$auth.user.id,
          restaurant_id: this.restaurantData.id
        })
        .then(() => {
          this.$router.push('/orders/' + this.finalSlug)
        })
        .catch(err => console.log(err))
    },
    createOrder() {
      if (this.orderIsActive() == false) {
        this.postOrder()
      } else {
        this.$store.commit('warningToggle')
        this.routeToOrder = '/orders/' + this.finalSlug
        //TODO: this.$router.push('/orders/' + this.finalSlug)
      }
    }
  },

  created() {
    if (!this.$auth.loggedIn) this.$router.push({ name: 'index' })
    this.$axios
      .get(process.env.baseApiUrl + 'restaurants/' + this.$route.params.slug)
      .then(res => {
        this.restaurantData = res.data.data
        this.isLoading = false
      })
      .catch(err => {
        this.$router.push({ name: 'index' })
      })

    this.$axios
      .get(process.env.baseApiUrl + 'orders/activeOrders')
      .then(res => {
        this.activeOrders = res.data.data
      })
      .catch(err => {
        this.$router.push({
          name: 'index'
        })
        console.log(err)
      })
  },
  watch: {
    $route(to, from) {
      this.$store.commit('closeWarning')
    }
  },
  mounted() {},
  computed: {
    allCodemenets() {
      let condamentsData = new Set()
      let products = this.restaurantData.products
      for (var categoryKey in products) {
        let category = products[categoryKey]
        for (var productKey in category) {
          let product = category[productKey]
          product.condaments.forEach(item =>
            condamentsData.add(item.name.toLowerCase())
          )
        }
      }
      return Array.from(condamentsData).join(', ')
    },
    ordersInfo() {
      return 'Aktivne narudžbe (' + this.activeOrders.length + ')'
    }
  },
  filters: {
    moment: function(date) {
      return moment(date).format('HH:mm')
    }
  }
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
  width: 1440px;
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
  width: 952px;
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
