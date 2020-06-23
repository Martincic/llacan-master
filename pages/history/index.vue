<template>

  <section>
    <div class="history u-flex u-flex-fd--c mlr-xxl">
    <div class="history__title  fs-lg ptb-xl font-normal-big">
      <p>Prošle narudžbe</p>
    </div>

    <div class="history__table u-flex u-flex-fd--c mb-xxl">
        
            <div class="history-table__restaurantSeeOrder u-flex u-flex-fd--r u-flex-jc--sb border-box pl-md ptb-sm">
                <div class="history-table-restaurantSeeOrder__restaurant font-normal font-normal-big-bold fs-md"> 
                    <p>Fast Food Forever</p>
                </div>
                <div class="history-table-restaurantSeeOrder__date font-normal fs-base">
                    <p>(05.06.2020.)</p>
                </div>
                <div class="history-table-restaurantSeeOrder__seeOrder pr-md fs-base">
                    <button class="btn btn-seeOrder ptb-xs ">Vidi narudžbu</button>

                </div>

            </div>

       
    </div>

    
     
    

  
    </div>

   

   <div class="footer">
    <div class="footer-components  u-flex u-flex-jc--sb mlr-xxl mt-sm ">
        <div class="footer-components__left ptb-xs plr-xs">
           <nuxt-link to="/restaurants/">  <button class="btn btn-menu btn-button"><span class="icon-back-icon"></span>Natrag na restorane</button></nuxt-link>
             
        </div>
        <div class="footer-components__center ptb-xs">
            <p @click="openFooter">Aktivne narudžbe (2)</p>
           
        </div>
        <!-- <div class="footer-components__right ptb-xs plr-xs">
            
        </div> -->
        
    </div>
    <collapse-transition>
			<div v-show="showFooter">
                <div class="hiddenOrders u-flex u-flex-fd--c u-flex-jc--c u-flex-ai--c ">
                <div class=" hiddenOtrders__singleRestaurant u-flex u-flex-fd--r u-flex-jc--sb">
                    <div class="hiddenOtrders-singleRestaurant__restaurantTime u-flex u-flex-fd--r pl-xs ">
                        <p class="hiddenOtrders-singleRestaurant-restaurantTime__title font-normal-bold fs-md pt-xs">Fast Food Forever</p>
                        <p  class="hiddenOtrders-singleRestaurant-restaurantTime__paragraf pt-xs ">(otvorio - User 09:42)</p>
                    </div>
                    <div class="hiddenOtrders-singleRestaurant__join ">
                        <button class="btn btn-join ptb-xs ">Pridruži se</button>
                    </div>
                </div>

                
                

                </div>
				
			</div>
		</collapse-transition>

 


      
    </div>
    
  </section>
</template>

<script>
import { CollapseTransition } from 'vue2-transitions';
export default {
     components:{
         CollapseTransition 
    },
    
    data(){
        return{
            showFooter: false
        }
    },

    methods:{
        openFooter(){
            console.log(this.showFooter)
            this.showFooter = !this.showFooter
        }
    },
    
}
</script>

<style scoped lang="scss"   >

.history-table-restaurantSeeOrder__date{
    padding-right: 68%;
    padding-top: 6px;
}

.btn-seeOrder{
    background-color: $secondary-color;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 16px;
    padding-right: 16px;
}

//fotter

.hiddenOrders{
    width:100%;
    background-color:black;
    padding: 10px 10%;
    
}

.hiddenOtrders__singleRestaurant{
    width:100%;
    padding:30px;
    background-color:white;
    margin-top:2px;
}

.hiddenOtrders-singleRestaurant__join{
    background-color: $secondary-color;
}

.btn-join{
    padding-left: 16px;
    padding-right:16px;
}

.footer-components__center{
    margin-right:49%;
}




</style>