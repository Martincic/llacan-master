<template>
    
    <footer class="footer">
        <div class="addition-footer u-flex u-flex-fd--r u-flex-jc--sb" :class="{'hidden': this.$route.name.includes('index')}" >
        <div class="addition-footer__left ">
            <button class="btn btn--primary" ><span class="icon-back-icon"></span>Natrag na restorane</button>
        </div>
        <div class="addition-footer__right">
            <button  class="btn btn--secondary">Nova narudžba</button>
        </div>
        </div>
        
    </footer>
    
</template>

<style scoped lang="scss">
.footer{
    height:100px;
    background-color: $primary_color;
    // position: absolute;
    position:relative; 
    // position:fixed;
    width: 100%;
    bottom: 0;
  
}
.addition-footer{
    margin-left: 50px;
    margin-right: 50px;
    // margin-top: 26px;
}


.addition-footer__left{
    background: #FFFFFF;
/* Dark */

border: 1px solid #070707;
box-sizing: border-box;
width: 201px;
    height: 48px;
}

.addition-footer__right{
    background: #FBDE07;
box-shadow: 0px 0px 6px rgba(251, 222, 7, 0.4)
}

.icon-back-icon{
    color:black;
}

.btn-button{
    font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.1px;
padding-top: 9.5px;
    padding-left: 13px;
}

.btn-button-new{
    font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.1px;
width:142px;
height:48px;

}



</style>