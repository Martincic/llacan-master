<template>

  <section>
    <div class="restaurants u-flex u-flex-fd--c mlr-xxl">
      <div class="restaurants__user  fs-lg pb-lg u-flex u-flex-fd--r u-flex-jc--sb size1of1">
        <div class="first__left">
          {{name}}, odaberite željeni restoran
        </div>
        <div class="first__right u-flex u-flex-jc-fe">
          <nuxt-link to="/history/"> <button class="btn order btn_last"> <span class="icon-new-history"></span>Prošle
              narudžbe</button></nuxt-link>
        </div>
      </div>

      <Loader v-if="isLoading" />

      <div class="restaurants__list u-flex u-flex-jc--sb u-flex-fw--w" v-else>
        <SingleRestaurant v-for="restaurant in restaurants" :key="restaurant.id" :restaurantInfo="restaurant" />
      </div>

    </div>

    <div class="footer">
      <div class="footer-components  u-flex u-flex-jc--c u-flex-ai--c mlr-xxl mt-sm ">

        <div class="footer-components__center ptb-xs">
          <p class="pb-xs" @click="openFooter">{{ordersInfo}}</p>
        </div>

      </div>
      <collapse-transition>
        <div v-show="showFooter">
          <div class="hiddenOrders u-flex u-flex-fd--c u-flex-jc--c u-flex-ai--c ">
            <div class=" hiddenOtrders__singleRestaurant u-flex u-flex-fd--r u-flex-jc--sb" v-for="(order, i) in activeOrders" :key="i">
              <div class="hiddenOtrders-singleRestaurant__restaurantTime u-flex u-flex-fd--r pl-xs ">
                <p class="hiddenOtrders-singleRestaurant-restaurantTime__title font-normal-bold fs-md pt-xs">
                  {{order.restaurant.title}}&nbsp;
                  </p>
                <p class="hiddenOtrders-singleRestaurant-restaurantTime__paragraf pt-xs mt-5px">
                  (otvorio - {{order.user_name.split(' ')[0]}}
                  {{ order.created_at | moment }})
                </p>
              </div>
              <div class="hiddenOtrders-singleRestaurant__join ">
                <!-- <nuxt-link :to="'orders/' + order.slug" class="btn btn-join ptb-xs ">Pridruži se</nuxt-link> -->
                <nuxt-link :to="`orders/${order.slug}`" class="btn btn-join ptb-xs ">Pridruži se</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </collapse-transition>
    </div>

  </section>
</template>
<script>
  import SingleRestaurant from '@/components/SingleRestaurant'
  import BottomNavToggle from "@/components/BottomNavToggle";
  import Loader from "@/components/Loader";
  import {
    CollapseTransition
  } from 'vue2-transitions';
  import moment from 'moment'
  
  export default {

    data() {
      return {
        restaurants: [],
        activeOrders: [],
        isLoading: true,
        showFooter: false,
        loading1: true,
        loading2: true,
      }
    },
    components: {
      SingleRestaurant,
      BottomNavToggle,
      CollapseTransition,
      Loader
    },
    created() {
      // Restorani
      this.$axios.get(process.env.baseApiUrl + 'restaurants').then(res => {
        this.restaurants = res.data.data
        this.loading1 = false
        if(!this.loading1 && !this.loading2) this.isLoading = false;
      }).catch(err => {
        this.$router.push({
          name: 'index'
        })
        console.log(err)
      })

    // Aktivne narudzbe
    this.$axios.get(process.env.baseApiUrl + 'orders/activeOrders').then(res => {
        this.activeOrders = res.data.data
        this.loading2 = false
        if(!this.loading1 && !this.loading2) this.isLoading = false;
      }).catch(err => {
        this.$router.push({
          name: 'index'
        })
        console.log(err)
      })

      if(!this.loading1 && !this.loading2) this.isLoading = false;
    },
    methods: {
      openFooter() {
        console.log(this.showFooter)
        this.showFooter = !this.showFooter
      }
    },
    computed: {
      name() {
          if(this.$auth.loggedIn) return this.$auth.user.name;
          else return "User";
        },
      ordersInfo() {
        return "Aktivne narudžbe ("+ this.activeOrders.length +")";
      },
    },
    filters: {
      moment: function (date) {
        return moment(date).format('HH:mm');
      }
    }
  }

</script>

<style scoped lang="scss">
  .mt-5px{
    margin-top:5px;
  }
  .restaurants {
    position: relative;
    padding-top: 180px;
  }

  .restaurants__user {
    // padding-right: 240px;
    //  font-size: 40px;
    line-height: 48px;
    font-style: bold;
    font-weight: bold;
    font-style: normal;
    letter-spacing: -0.5px;
    // padding-bottom: 80px;
  }

  // .first__left{
  //         font-size: 40px;
  // line-height: 48px;
  // font-style: bold;
  // font-weight: bold;
  // font-style: normal;
  // letter-spacing: -0.5px;
  // padding-bottom: 80px;
  // }

  .restaurants__list {
    padding-bottom: 96px;
  }


  .restaurants__list{
    padding-bottom: 96px;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:24px;
  }
  .btn_last{
    margin-left:54%;
  }

  button.btn.order {
    border: 1px solid #070707;
    box-sizing: border-box;
    background: $tertiary-color;
    width: 220px;
    height: 44px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;

  }

  /* spiner */


  .footer {
    box-sizing: border-box;
    border: 1px solid $primary-color;
    background-color: $primary-color;
    bottom: 0px;
  }

  .footer-components__center {
    color: $tertiary-color;
  }

  @media screen and (max-width: 1504px) {

    .second {
      display: flex;
      /* flex-direction: column;  */
      flex-wrap: wrap;

      justify-content: center;
      align-items: center;
      width: 100%;
      margin-left: 100px;
      margin-right: 100px;

    }

    article {
      width: 50%
    }

    .first {
      margin-left: 100px;
    }
  }

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
