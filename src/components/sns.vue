<template>
<div>
    <sui-message info>🥺Follow me!🥺</sui-message>
    <a is="sui-label" href="https://twitter.com/harunon_system" target="_blank">
    <span><i class="fab fa-twitter"></i></span> Twitter
    </a>
    <a is="sui-label" href="https://github.com/harunonsystem" target="_blank" >
    <span><i class="fab fa-github"></i></span> GitHub
    </a>
    <a is="sui-label" href="https://www.amazon.co.jp/gp/registry/wishlist/15H9T1D76B386/ref=nav_wishlist_lists_1" target="_blank" > 
    <span><i class="fab fa-amazon"></i></span> wishlist
    </a>
    <a is="sui-label" href="https://keybase.io/harunon" target="_blank">
    <span><i class="fab fa-keybase"></i></span> Keybase
    </a>
    
</div>
        
</template>

<script>
export default {

}
</script>

<style scoped>

li{
    list-style: none;
}
span{
    margin-bottom: 20px;
}
a{
    background-color: transparent;
    margin:10px;
}
a:hover{
 top: -4px;
 box-shadow: 0 7px 0 #fbc2eb;
 }
a:active{
    top:3px;
    box-shadow: none;
}
a.ui.label{
    margin-bottom: 10px;
}
@media screen and (max-width:480px){
    a.ui.label{
    display:inline-grid;
    }
}
</style>
