<template>
<div class="header-container">
    <header class="header">
        <div class="logo">
           <nuxt-link to="/restaurants"> <img src="~/assets/img/llacan-navbar.svg" alt /></nuxt-link>
           
        </div>
         <div class="addition" :class="{'hidden': this.$route.name.includes('index')}">
            <div class="addition__left u-flex u-flex-fd--r">
                
                <div class="user"> <img class="addition-left__user"> </div>
            <p class="addition-left__paragraf">{{name}}</p>
            
            </div>
            <div class="addition__right">
                <button @click = "logOut"><p class="addition-right__paragraf">Odjavi se</p></button>
                 
            </div>
        </div>
    </header>
    </div>
</template>

<script>
export default {
    computed:{
        name() {
            if(this.$auth.loggedIn) return this.$auth.user.name;
            else return "User";
        }
    },
    methods:{
        logOut(){
            this.$auth.logout()
        }
    }
}
</script>

<style scoped>
button{
    background-color: #070707;
    box-shadow: 0;
}

.header-container{
    height:100px;
}

.header{
    background-color: #070707;
    position: absolute;
    width: 100%;
} 

.header{
    width: 100%;
  position: fixed;
  height: 100px;
  
  background-color: black;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo{
    /* position:absolute; */
    margin-top:31px;
    margin-left:106px;
}

.addition{
    position: absolute;
    color: 0;
    color: white;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    margin-right: 160px;
}

.addition__left{
    padding-top: 35.5px;
}
.header-title{
    padding-top: 4px;
    margin-right: 530px;
    font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 28px;
}

.user{
    padding-right: 14px;
}

.addition-left__user{
      border: 0.5px solid #FBDE07;
    width: 50;
    width: 35px;
    height: 35px;
    border-radius: 50px;
    background-color:#FBDE07;

}


.addition__right{
        padding-top: 39px;
    padding-left: 32px;
}

.addition-right__paragraf{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: #FBDE07;
}

.addition-left__paragraf{
    font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 28px;

color: #FFFFFF;
}

.hidden{
    display:none !important;
} 
</style>