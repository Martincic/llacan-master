<template>
    <article class="box">
      <div class="one-restaurant">
        <h1 class="restaurant-title">{{restaurantInfo.title}}</h1>
        <!-- <p class="tag">k <nuxt-lin:to="tag.link" v-for="tag in restaurantInfo.tags" :key="tag.id">{{tag.name}},</nuxt-link> </p> -->
        <p class="tag">{{restaurantInfo.tags.map(e => e.name).join(', ')}}</p>
        <p class="restaurant-adress"><span class="icon-home-icon"></span>{{restaurantInfo.address}}</p>
        <p class="restaurant-number"><span class="icon-phone-icon"></span>{{restaurantInfo.phone}}</p>
        <div class="buttons u-flex u-flex-fd--r u-flex-jc--sb">
            <!-- <AppButton @click="$router.push('/restaurants/_slug')">Menu i info</AppButton> -->
            <nuxt-link :to="`/restaurants/${restaurantInfo.slug}`" class="btn btn--primary">Menu i info</nuxt-link>

            <nuxt-link :to="`/restaurants/${restaurantInfo.slug}/order`" class="btn btn--secondary">Nova narudžba</nuxt-link>
        </div>
       
      </div>  
        
    </article>
</template>

<script>
export default {
    props:['restaurantInfo']
}
</script>

<style scoped>
.box{
    
    padding-top: 41px;
}
.one-restaurant{
    width:464px;
    height:313px;
    box-shadow: 0px 0px 4px #070707;
    padding-left: 32px;
}
.restaurant-title{
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    letter-spacing: -0.4px;
    color: #070707;
    padding-top: 42px;
}
.tag{
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: gray;
    padding-top: 2px;
    padding-top: 2px;
}

.restaurant-adress{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
    padding-top: 16px;
}

.restaurant-number{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
    padding-top: 12px;
}

.buttons{
    padding-top: 49px;
}

/* .btn-menu{
        background: #FFFFFF;
    border: 1px solid #070707;
    box-sizing: border-box;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    width: 153px;
    height: 44px;
    padding-top: 8px;
}  */

/* .btn-order{
        background: #FBDE07;
    box-shadow: 0px 0px 6px rgba(251, 222, 7, 0.4);
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    width: 186px;
    height: 44px;
    margin-right: 42px;
} */

</style>