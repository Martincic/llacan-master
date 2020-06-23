<template>
    <section class="order u-flex u-flef-fd--r">
        <div class="left__side">
        <div class="order__left u-flex u-flex-fd--c">
            <div class="order-left_inforestaurant">
                <div class="order-left__img">
                    <img class="fast-food" src="~/assets/img/fast-food.png" />
                </div>
                    
                <div class="order-left__info">
                    <h1 class="restaurant-title">Fast food Forever</h1>
        
                    <p class="restaurant-adress"><span class="icon-home-icon"></span>Prilaz Kikova 5, 52220, Labin</p>
                    <p class="restaurant-number"><span class="icon-phone-icon"></span>092-246-0606</p>

                </div>
                

               
                
                


            </div>
            
        </diV>
        



        </div>
        <div class="order__right u-flex u-flex-fd--c">
            <div class="order-right__food">
                <h1 class="title-restaurant">Burger</h1>
            </div>   
            <div class="order-right__food1 u-flex u-flex-fd-r u-flex-jc--sb">
                <div class="ingredients">
                    <p class="title-food">Hamburger</p>
                <p class="ingredients-food">Juneća pljeskavica u pecivu, dodaci po želji</p>
                </div>
                <div class="price fs-base">
                    <p>22,00 kn</p>
                </div>
                
            </div>

            <div class="order-right__food1">
                <div class="ingredients">
                    <p class="title-food">Hamburger</p>
                <p class="ingredients-food">Juneća pljeskavica u pecivu, dodaci po želji</p>
                </div>
                
            </div>
            <div class="order-right__food1">
                <div class="ingredients">
                    <p class="title-food">Hamburger</p>
                <p class="ingredients-food">Juneća pljeskavica u pecivu, dodaci po želji</p>
                </div>
                
            </div>
            <div class="order-right__food1">
                <div class="ingredients">
                    <p class="title-food">Hamburger</p>
                <p class="ingredients-food">Juneća pljeskavica u pecivu, dodaci po želji</p>
                </div>
                
            </div>

           
            
        </div>

    </section>
</template>

<style scoped>

.order{
    padding-top:150px;
   position: relative;
    margin: 0 auto;
    width: 1440px;
    padding-bottom: 104px
}

.left__side{
    width: 33%;
}
.order__left{
    border: 1px solid #EEEEEE;
    
    /* padding-left: 32px; */
}

.fast-food{
    width:100%;
}

.order-left__info{
    padding-left: 32px;
    padding-bottom: 38.8px;
} 


.restaurant-title{
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 48px;
letter-spacing: -0.5px;
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

.order-left__condements{
    border: 1px solid #EEEEEE;
    box-sizing:border-box;
   
}

.order__right{
    width: 67%;
}

.order__right{
    margin-left:24px;
}
.tag{
    padding-top:46px;
}

.tag2{
    padding-left:40px;
    
}

.categories, .condements{
    margin-top:30px;
    border: 1px solid #EEEEEE;
box-sizing: border-box;

}

.categories__title, .condements__title{
    border: 1px solid #EEEEEE;
box-sizing: border-box;
padding-bottom: 24px;
padding-top:24px;
padding-bottom: 24px;
padding-left:32px;
}

.categories__paragraf, .condements__paragraf{
    border: 1px solid #EEEEEE;
box-sizing: border-box;
padding-top: 24px;
    padding-bottom: 33px;
    padding-left: 32px;
}

.single-categories{
    padding-bottom: 20px;
}




/* RIGHT */
.title-restaurant{
    font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 38px;
letter-spacing: -0.4px;
width: 952px;
height: 100px;
}

.order__right{
    background: #FFFFFF;
/* Backgrounds / Light Gray */

border: 1px solid #EEEEEE;
box-sizing: border-box;
 width: 80%;
}

.order-right__food1{
    background: #FFFFFF;
/* Backgrounds / Light Gray */

    
   
  

border: 1px solid #EEEEEE;
box-sizing: border-box;
}

.ingredients{
    padding-top: 11px;
    padding-bottom: 10.5px;
    padding-left: 49px;
}

.title-restaurant{
    padding-top: 31px;
    padding-left: 47px;
}

.title-food{
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #070707;
   
}

.ingredients-food{
    font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
color: #070707;

}

.price{
    padding-top: 24.6px;
   
    padding-bottom: 24.9px;
    padding-right: 40px;
}


</style>