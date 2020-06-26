<template>
  <section>

    <Loader v-if="isLoading" />

    <div class="new-order" v-else>
      <div class="hover">
        <div class="hover__img">
          <img class="hover-img__main" src="~/assets/img/cover.jpg" />
        </div>
        <div class="hover__text pt-xxl">
          <h1 class="hover-text__title fs-xl">{{order.restaurant.title}}</h1>
          <p class="hover-text__adress fs-base pb-xs"><span class="icon-home-icon "></span>{{order.restaurant.address}}
          </p>
          <p class="hover-text__number fs-base"><span class="icon-phone-icon "></span>{{order.restaurant.phone}}</p>
        </div>

      </div>
      
      <div class="choice u-flex u-flex-fd--c">
        <div class="my-choice u-flex u-flex-fd--c border-box">
          <div class="my_choice__information u-flex u-flex-fd-r u-flex-jc--sb  ptb-sm">
            <div class="my-choice__text pl-sm ">
              <h1 class="my-choice__title fs-md font-normal-bold">Moj odabir</h1>
            </div>
            <div class="my-choice__button pr-sm">

              <button class=" btn btn-button btn-select fs-base font-normal-sm-n" @click="modalOpened = true">Odaberi za
                sebe</button>

            </div>
          </div>


          <div class="my-choice__uniqueUser u-flex u-flex-fd--r u-flex-jc--sb border-box">
            <div class="my-choice-orders__user pb-sm pl-sm">
              <img>
              <p class="user-name fs-base font-normal-sm  ">{{this.$auth.user.name}}</p>
            </div>

            <div class="my-choice-orders__food pl-lg">
              <h1 class="food__name fs-base font-normal-medium">Hamburger</h1>
              <p class="food__condements fs-sm font-normal-small">kečap, majoneza, rajčica</p>
            </div>
            <div class="my-choice-information__price fs-base font-normal-medium">
              <p>22,00 kn</p>

            </div>
            <div class="my-choice-information__delete pr-sm">

              <button class="btn  "><img class="share" src="~/assets/img/Izbrisi.svg" /></button>

            </div>

          </div>

        </div>

        <div class="my-choice__orders u-flex-fd-c border-box">
          <div class="my-choice-orders__others ptb-sm pl-sm">
            <h1>Ostali ({{this.order.user_order.length}})</h1>
          </div>


            <div v-for="userorder in this.order.user_order" :key="userorder.id" class="my-choice-orders__allOrders u-flex u-flex-fd--r u-flex-jc--sb border-box">
              <div class="my-choice-orders__user pb-sm pl-sm w-300">

                <p class="user-name fs-base font-normal-sm">{{userorder.username}}</p>
                <!-- <p class="user-name fs-base font-normal-sm "> <span class="profile"><img class="imgUser"></span>Anthony</p> -->
              </div>

              <div class="my-choice-orders__food u-flex-1">
                <h1 class="food__name fs-base font-normal-medium">{{userorder.product.name}}</h1>
                <p class="food__condements fs-sm font-normal-small">
                  <span v-for="condament in userorder.condaments" :key="condament.id">{{condament.name}},&nbsp;</span>
                </p>
              </div>
              <div class="my-choice-information__price pr-sm fs-base font-normal-medium w-100">
                <p>{{userorder.product.price | null}} kn</p>
              </div>
            </div>
            
        
        </div>
        <div class="party u-flex u-flex-fd--c border-box">
          <div class="party__main u-flex u-flex-fd--r u-flex-jc--sb ptb-sm border-box">
            <div class="party-main__food  pl-sm fs-md font-normal-bold u-flex u-flex-fd--r">
              <img class="share" src="~/assets/img/pomes.jpg" />
              <p>Pomes party (0)</p> <img class="share" src="~/assets/img/pomes.jpg" />
            </div>

            <div class="party-main__button pr-sm font-normal-sm-n fs-base">
              <button class="btn btn-button btn-select">Kreiraj party!</button>
            </div>
          </div>

          <!-- <div class="party__user u-flex u-flex-fd--c border-box">
                        <div class="party-user__information u-flex u-flex-fd--r border-box">
                            <div class="party-user-information__name u-flex u-flex-fd--r">
                                <p>Luka </p>
                                <p>Luka</p>
                                <p>Luka</p>

                            </div>
                            <div class="party-user-information__food">
                                <p>Mješana</p>

                            </div>
                            <div class="party-user-information__scale">

                            </div>
                            <div class="party-user-information__peopleNumber">
                                <div class="party-user-information-peopleNumber__people">
                                    <h2>OSOBA</h2>
                                </div>
                                <div class="party-user-information-peopleNumber__number">
                                    <p>6</p>
                                </div>

                            </div>
                            <div class="party-user-information__price">
                                <p>26,00 kn</p>

                            </div>
                        </div>
                         <div class="party-user_specific u-flex u-flex-fd--r border-box">
                        <div class="party-user-specific__users">
                            <p>Luka</p>
                            <p>Luka</p>
                        </div>
                        <div class="party-user-specific__food">
                            <p>Mješana</p>
                        </div>
                        <div class="party-user-specific__scale">

                        </div>
                        <div class="party-user-specific__peoplePrice">
                            <h2>Kn po oosbi</h2>
                            <p>8,00 kn</p>
                        </div>
                        <div class="party-user-specific__price">
                            <p>26,00 kn</p>

                        </div>

                    </div>
                    </div> -->


        </div>
        <div class="price border-box ">
          <div class="price_total u-flex u-flex-f--r u-flex-jc--sb pt-sm fs-base font-normal-medium">
            <div class="price__totalTitle pl-sm">
              <p>Ukupno</p>
            </div>
            <div class="price_totalNumber pr-sm ">
              <p>{{totalPrice}}.00 kn</p>
            </div>
          </div>

          <div class="price__separetly u-flex u-flex-fd--r u-flex-jc--sb pb-sm fs-md font-normal-bold">
            <div class="price__separetlyTitle pl-sm ">
              <p>Moj dio za platit</p>
            </div>
            <div class="price__separetlyNumber pr-sm ">
              <p>22,00 kn</p>
            </div>
          </div>
        </div>


<!-- 
        <div class="sendOrder border-box u-flex u-flex-fd--r u-flex-jc--sb ptb-md">
          <div class="sendOrder__information u-flex  u-flex-fd--r u-flex-jc--sb">
            <div class="sendOrder-information__restaurant pl-sm">
              <h1>Fast Food Forever</h1>
            </div>
            <div class="sendOrder-information__number">
              <p class="hover-text__number fs-base font-normal-sm-n"><span class="icon-phone-icon "></span>092-246-0606
              </p>
            </div>
          </div>
          <div class="sendOrder__buttons u-flex  u-flex-fd--r u-flex-jc--sb border box pr-sm">
            <div class="sendOrder-buttons__cancel">
              <nuxt-link to="/restaurants/"> <button class="btn btn-button btn-cancel fs-base font-normal-sm-n">Otkaži
                  narudžbu</button> </nuxt-link>

            </div>
            <div class="sendOrder-buttons__send pl-sm">
              <button class="btn btn-button btn-send fs-base font-normal-sm-n" @click="modalSend = true">Pošalji
                narudžbu</button>
            </div>
          </div>
        </div> -->

        <div
          class="sendOrder border-box u-flex u-flex-fd--r u-flex-jc--sb ptb-md"
        >
          <div
            class="sendOrder__information u-flex  u-flex-fd--r u-flex-jc--sb"
          >
            <div class="sendOrder-information__restaurant pl-sm">
              <h1>Fast Food Forever</h1>
            </div>
            <div class="sendOrder-information__number">
              <p class="hover-text__number fs-base font-normal-sm-n">
                <span class="icon-phone-icon "></span>092-246-0606
              </p>
            </div>
          </div>
          <div
            class="sendOrder__buttons u-flex  u-flex-fd--r u-flex-jc--sb border box pr-sm"
          >
            <div class="sendOrder-buttons__cancel">
              <nuxt-link to="/restaurants/">
                <button
                  class="btn btn-button btn-cancel fs-base font-normal-sm-n"
                >
                  Otkaži narudžbu
                </button>
              </nuxt-link>
            </div>
            <div class="sendOrder-buttons__send pl-sm">
              <button
                class="btn btn-button btn-send fs-base font-normal-sm-n"
                @click="modalStep = 1"
              >
                Pošalji narudžbu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="footer">
      <div class="footer-components  u-flex u-flex-jc--sb mlr-xxl mt-sm ">
        <div class="footer-components__left fs-base">
          <nuxt-link to="/restaurants/"> <button class="btn "><span class="icon-back-icon"></span>Natrag na
              restorane</button></nuxt-link>

        </div>
        <div class="footer-components__center fs-md">
          <p>Narudžba za dan {{getDate}} </p>
        </div>
        <div class="footer-components__right fs-base">
          <button class="btn  "><img class="share" src="~/assets/img/share.svg" />Podijeli narudžbu</button>
        </div>
      </div>
    </div>

    <section class="modal" v-if="modalOpened">
      <div class="overlay__selectFood font-normaln-bold fs-lg pl-md u-flex u-flex-fd--r u-flex-jc--sb mt-sm mb-md">
        <h1>Odaberite glavno jelo</h1>
        <button class="close pr-sm" @click="modalOpened = false">X</button>
      </div>
          <AllProducts 
            v-if="restaurantData"
            :restaurant="restaurantData" 
            :addProduct="true"
            class ="px-40px"
          />
        </div>


        <div class="overlay-table__information u-flex u-flex-fd--r u-flex-jc--sb border-box pl-md  ptb-xs"
          @click="openChoice">
          <div class="overlay-table-information__food pl-xs ">
            <p class="overlay-table-information-food__main font-normal-medium fs-base ">Hamburger</p>
            <p class="overlay-table-information-food__condements font-normal-small fs-sm ">Juneća pljeskavica u pecivu,
              dodaci po želji</p>
          </div>
          <div class=" overlay-table-information__price font-normal-medium fs-base ptb-xs">
            <p> 22,00 kn</p>
          </div>

          <div class="overlay-table-information__button">
            <img class="share pl-xs pt-xs" src="~/assets/img/plus.svg" />

          </div>

        </div>



        <collapse-transition>
          <div v-show="showOpen">
            <div class="showWindow border-box pt-xs pl-md ">
              <p class="showWindow__paragraf ptb-xs font-normal-small fs-base">Odaberite datoteke</p>
              <div class="showwindow__select u-flex u-flex-fd--r u-flex-jc--sb">
                <div class="showwindow-select__condements">
                  <p class="button__condements fs-base font-normal-small">Kečap</p>
                  <!-- <button>Majoneza</button> -->
                </div>
                <div class="showwindow__button pb-sm pr-xs">
                  <button class=" btn btn-button btn-select  fs-base font-normal-sm-n">Dodaj u narudžbu</button>
                </div>

              </div>




            </div>

          </div>
        </collapse-transition>

        <!-- dodaj colapse showppen -->

        <!-- <div class="probaa">
                <input type="checkbox" >
                <h2 class="proba1">How many cans must I stack up?</h2>
                <p class="proba2">As many as you need to wash you out from my mind and out of my consciousness.</p>
                <p class="proba2">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            </div> -->
      </div>

      </div>


      <!-- <button @click="modalOpened = false">X</button> -->
    </section>

    <section class="modal-send border-box" v-if="modalStep ===1">
      <div class="modal-send__information">
        <div class="modal-send-information__close u-flex u-flex-jc--fe mt-sm mr-xs">
          <button class="close pr-sm" @click="modalStep  = 0">X</button>
        </div>
        <div class="modal-send-information__warn u-flex u-flex-jc--c u-flex-ai--c pb-xs">
          <img class="share pl-xs pt-xs" src="~/assets/img/yellowRectangle.jpg" />
        </div>
        <div class="modal-send-information__title u-flex u-flex-jc--c u-flex-ai--c ptb-xs">
          <h3>Potvrdi narudžbu?</h3>
        </div>
        <div class="modal-send-information__paragraf u-flex u-flex-jc--c u-flex-ai--c mlr-lg u-flex-fd--c">
          <p>Jeste li sigurni da želite potvrditi narudžbu? Dodatna izmjena </p>
          <p>narudžbe neće biti moguća!</p>
        </div>
      </div>

      </div>

      <hr class="line mt-sm">

      <div class="model-send__buttons u-flex u-flex-fd--r u-flex-jc--c">
        <div class="model-send-buttons__back">
          <button @click="modalStep--" class="btn pr-md fc-base font-normal-sm-n"><span class="icon-back-icon"></span>Natrag</button>

        </div>

        <div class="model-send-buttons__accept pl-md">
          <button class="btn btn-button btn-send btn-send-padding fs-base font-normal-sm-n"
            @click="modalStep = 2">Pošalji narudžbu</button>
      </div>
      </div>

    </section>

    <section class="modal-send border-box" v-if="modalStep === 2">
      <div class="modal-send__information">
        <div class="modal-send-information__close u-flex u-flex-jc--fe mt-sm mr-xs">
          <button class="close pr-sm" @click="modalStep = 0">X</button>
        </div>
        <div class="modal-send-information__warn u-flex u-flex-jc--c u-flex-ai--c pb-xs">
          <img class="share pl-xs pt-xs" src="~/assets/img/yellowRectangle.jpg" />
        </div>
        <div class="modal-send-information__title u-flex u-flex-jc--c u-flex-ai--c ptb-xs">
          <h3>Narudžba potvrđena</h3>
        </div>
        <div class="modal-send-information__paragraf u-flex u-flex-jc--c u-flex-ai--c mlr-lg ">
          <p>Na e-mailu ćete dobiti detaljne narudžbe</p>
        </div>
      </div>
      <hr class="line mt-sm">

      <div class="model-send__buttons u-flex u-flex-fd--r u-flex-jc--c">
        <div class="model-send-buttons__back">
          <button @click="modalStep--" class="btn pr-md fc-base font-normal-sm-n"><span class="icon-back-icon"></span>Natrag</button>

        </div>
        <div class="model-send-buttons__accept pl-md">
          <button class=" btn btn-button btn-select fs-base font-normal-sm-n">Pregled narudžbe</button>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  
  import {
    CollapseTransition
  } from 'vue2-transitions';
  
  import Loader from "@/components/Loader";
  import moment from 'moment';
  import axios from 'axios';
  import AllProducts from '@/components/EveryProduct'

  export default {
    components: {
      CollapseTransition,
      Loader,
      AllProducts
    },
    data() {
      return {
        modalOpened: false,
        showOpen: false,
        modalSend: false,
        modalAccept: false,
        modalStep:0,
        order: [],
        restaurantData: [],
        isLoading: true,
        totalPrice: 0,
      }
    },
    methods: {
      openChoice() {
        this.showOpen = !this.showOpen
      },
    },
    computed: {
      getDate() {
        return moment().format("DD.MM.YYYY")
      }
    },
    async beforeCreate() {
        const order = await this.$axios.$get(process.env.baseApiUrl + `orders/${this.$route.params.slug}`)
        this.order = order.data

        this.order.user_order.forEach((singleOrder) => {
          this.totalPrice += parseInt(singleOrder.product.price.split('.',1)[0])
        })
        
        this.$axios
        .get(process.env.baseApiUrl + 'restaurants/' + this.order.restaurant.slug)
        .then(res => {
          this.restaurantData = res.data.data
        })
        .catch(err => {
          this.$router.push({ name: 'index' })
        })

        this.isLoading = false
    }
  }
</script>

<style scoped lang="scss">
  
  .w-300{
    width: 300px;
  }

  .w-100{
    width: 100px;
  }

  .probaa {
    position: relative;
  }

  input[type="checkbox"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  // .proba1 {
  //   font-size: 30px;
  //   font-weight: 400;
  //   color: #4a19ff;
  //   margin: 20px 0 0;
  // }
  label {
    cursor: pointer;
  }

  label {
    position: relative;
    display: block;
    //   padding-left: 30px;
    font-family: "Spicy Rice", cursive;
  }

  label::before {
    content: "";
    position: absolute;
    //   width: 0;
    //   height: 0;
    //   top: 50%;
    //   left: 10px;
    //   border-left: 8px solid black;
    //   border-top: 8px solid transparent;
    //   border-bottom: 8px solid transparent;
    //   margin-top: -8px;
  }

  // input[type="checkbox"]:checked ~ h2 label::before {
  // //   border-left: 8px solid transparent;
  // //   border-top: 8px solid black;
  // //   border-right: 8px solid transparent;
  // //   margin-left: -4px;
  // //   margin-top: -4px;
  // }

  .proba2 {
    max-height: 0;
    overflow: hidden;
    padding-left: 30px;
    transition: max-height 0.4s ease;
    font-family: "Habibi", serif;
  }

  input[type="checkbox"]:checked~h2~p {
    max-height: 80px;
  }

  // body {
  //   background: #fbbe05;
  // }


  //do tu


  .hover-img__main {
    height: 293px;
    color: #070707;
    opacity: 0.4;
  }

  .hover__text {
    position: absolute;
    top: 0;
    color: $tertiary-color;
    padding-left: 260px;
  }

  .hover-text__title {
    padding-bottom: 16px;
    font-style: normal;
    font-weight: bold;
    line-height: 60px;
  }

  .hover-text__adress,
  .hover-text__number {
    font-style: normal;
    font-weight: normal;
    line-height: 28px;
  }

.hover-text__adress,
.hover-text__number {
  font-style: normal;
  font-weight: normal;
  line-height: 28px;
}



  .choice {
    width: 75%;
    border: 1px solid #eeeeee;
    box-sizing: border-box;
    margin-left: 260px;

  }

  .icon-home-icon {
    color: $tertiary-color;
  }

  .my-choice-orders__food {
    padding-top: 18px;
    padding-right: 500px;
  }

  .btn-button {
    padding: 12px 18.5px;
    font-style: normal;
    font-weight: normal;
    line-height: 24px;
    letter-spacing: 0.1px;
  }

  .btn-select {
    background: $secondary-color;


  }




  // .my-choice, .my-choice__orders, .my-choice-orders__others, .my-choice-orders__allOrders{
  //     background: $tertiary-color;
  //     border: 1px solid #eeeeee;
  //     box-sizing: border-box;

  // 

  .my-choice-information__price {
    padding-top: 18px;
  }

  .my-choice-information__delete {
    padding-top: 18px;
  }

  .my-choice-orders__food {
    padding-top: 18px;
  }

  .user-name {
    padding-top: 15px;
  }

  .imgUser {
    border: 0.5px solid #FBDE07;
    width: 50;
    width: 35px;
    height: 35px;
    border-radius: 50px;
    background-color: yellow;
  }


  .price__totalTitle {
    padding-bottom: 16px;

  }

  .sendOrder-information__number {
    padding-top: 6px;
    padding-left: 41px;
  }

  .btn-cancel {
    background: #f43319;
    color: #ffffff;
  }

  .btn-send {
    background: #2dcb48;
    color: #ffffff;

  }

  .footer-components__right {
    background-color: $tertiary-color;
  }

  .share {
    padding-right: 6px;
  }

  // ModalOpen

  .modal {
    position: absolute;
    top:  100px;
    left: 50%;
    transform: translateX(-50%);
  
    width: 50%;
    // height: 100%;
    background-color: #fff;
    z-index: 3333;
    padding: 50px 0;
 

  }

  .close {
    background-color: #ffffff;
    box-sizing: none;
    border: none;
  }

  .overly-table-title__foodName {
    padding-top: 19px;
    padding-bottom: 19px;
  }

  .overlay-table-information-food__condements {
    opacity: 0.6;
  }

  .button__condements {
    background: #FFEF7B;
    border-radius: 38px;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 20px;
    padding-right: 20px;
  }

  //modalSend

  .modal-send {
    position: absolute;
    left: 0;
    top: 0;
    width: 35%;
    height: 35%;
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

  // .modal-send-information__close{
  //     margin-left: 90%;
  //     margin-top: 27px;
  // }

  .model-send-buttons__back {
    padding-top: 30px;

  }

  .model-send-buttons__accept {
    padding-top: 20px;

  }

  .icon-back-icon {
    padding-right: 4px;
  }

  .px-40px{
    padding: 0 40px;
  }

</style>
