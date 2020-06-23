<template>
    <section class="menu-info u-flex u-flef-fd--r">
        <div class="menu-info__left u-flex u-flex-fd--c">
            <div class="menu-info-left_inforestaurant">
                <div class="menu-info-left__img">
                    <img class="fast-food" src="~/assets/img/fast-food.png" />
                </div>
                    
                <div class="menu-info-left__info">
                    <h1 class="restaurant-title">Fast food Forever</h1>
        
                    <p class="restaurant-adress"><span class="icon-home-icon"></span>Prilaz Kikova 5, 52220, Labin</p>
                    <p class="restaurant-number"><span class="icon-phone-icon"></span>092-246-0606</p>
                    
                    

                </div>

                 <div class="menu-info-left__condements">
                <div class="condements__title">
                    <h1>Dodaci</h1>
                </div>

                <div class="condements u-flex u-flex-fd-r">
                
                <div class="condements__left">
                    <div class="condements-left__single">
                        <p>Kečap</p>
                    </div>

                </div>
                <div class="condements__right">
                    <div class="condements-right__single">
                        <p>Majoneza</p>
                    </div>
                </div>

            </div>

            </div>
                
                


            </div>
            
        </diV>
        <div class="menu-info__right u-flex u-flex-fd--c">
            <div class="menu-info-right__food">
                <h1 class="title-restaurant">Glavna jela</h1>
            </div>   
            <div class="menu-info-right__food1">
                <div class="ingredients">
                    <p class="title-food">Hamburger</p>
                <p class="ingredients-food">Juneća pljeskavica u pecivu, dodaci po želji</p>
                </div>
                
            </div>

            <div class="menu-info-right__food1">
                <div class="ingredients">
                    <p class="title-food">Hamburger</p>
                <p class="ingredients-food">Juneća pljeskavica u pecivu, dodaci po želji</p>
                </div>
                
            </div>
            <div class="menu-info-right__food1">
                <div class="ingredients">
                    <p class="title-food">Hamburger</p>
                <p class="ingredients-food">Juneća pljeskavica u pecivu, dodaci po želji</p>
                </div>
                
            </div>
            <div class="menu-info-right__food1">
                <div class="ingredients">
                    <p class="title-food">Hamburger</p>
                <p class="ingredients-food">Juneća pljeskavica u pecivu, dodaci po želji</p>
                </div>
                
            </div>

           
            
        </div>

    </section>
</template>

<style scoped>

.menu-info{
    padding-top:150px;
   position: relative;
    margin: 0 auto;
    width: 1020px;
    padding-bottom: 104px
}
.menu-info__left{
    border: 1px solid #EEEEEE;
    width: 33%;
    /* padding-left: 32px; */
}

.fast-food{
    width:100%;
}

.menu-info-left__info{
    padding-left: 32px;
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

.menu-info-left__condements{
    border: 1px solid #EEEEEE;
    box-sizing:border-box;
   
}

.menu-info__right{
    width: 67%;
}

.menu-info__right{
    margin-left:24px;
}
.tag{
    padding-top:46px;
}

.tag2{
    padding-left:40px;
    
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

.menu-info__right{
    background: #FFFFFF;
/* Backgrounds / Light Gray */

border: 1px solid #EEEEEE;
box-sizing: border-box;
}

.menu-info-right__food1{
    background: #FFFFFF;
/* Backgrounds / Light Gray */
width: 952px;
    height: 100px;
  

border: 1px solid #EEEEEE;
box-sizing: border-box;
}

.ingredients{
    padding-top: 31px;
    padding-left: 47px;
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


</style>