<template>
    <header>
        <div class="wrapper">
            <div class="header-top clearfix">
                <div class="header-logo"><h1><a href="#"><img  :src="logo" alt=""></a></h1></div>
                <div class="header-nav">
                    <nav class="clearfix">
                        <a href="#">home</a>
                        <a href="#">home</a>
                        <a href="#">home</a>
                        <a href="#">home</a>
                        <a href="#">home</a>
                    </nav>
                    <div class="search">
                        <input type="text">
                        <input type="button">
                    </div>
                </div>
            </div>
            <div class="header-bottom">
                <slot></slot>
            </div>
        </div>
    </header>
</template>
<script>
import logo from '@images/logo.png'
export default {
    props:{},
    name: 'CommonHeader1',
    data(){
        return{
            logo
        }
    }
}
</script>
<style lang='stylus' scoped>
@import '~@styles/variable.styl'
header  
    background:transparent url(../../assets/images/header_bg.jpg) no-repeat;
    background-size:cover
    .header-top
        box-sizing:border-box;
        background:#fff
        padding:.3rem .35rem
        .header-logo
            float:left
            h1 
                height:100%
                position:relative
                a 
                   img
                        width:1.39rem
                        height: .37rem
        .header-nav
            float: right
            display:flex
            justify-content :center
            nav 
                flex:1
                a   
                    box-sizing:border-box
                    padding:.15rem
                    display:block
                    float:left
                
    .header-bottom
        height:200px
</style>