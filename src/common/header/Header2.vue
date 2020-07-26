<template>
    <header>
        <div class="wrapper">
            <div class="header-top">
                <div class="header-logo">
                    <h1 class="logo"><a href="#"><img src="../../assets/images/logo.png" alt=""></a></h1>
                </div>
                <nav class="header-nav clearfix">
                    <div class="header-menu-wrapper clearfix">
                        <a href="#" class="header-menu">home</a>
                        <a href="#" class="header-menu">home</a>
                        <a href="#" class="header-menu">home</a>
                        <a href="#" class="header-menu">hddddome</a>
                        <a href="#" class="header-menu">home</a>
                    </div>
                    <div class="header-search">
                        <input class="header-input border" type="text">
                        <button class="header-search-btn">search</button>
                    </div>
                </nav>
            </div>
            <div class="header-bottom">
                <slot></slot>
            </div>
        </div>
        
    </header>
    <!-- <img src="../../assets/images/pic1.png" alt=""> -->
</template>
<script lang="ts">
export default {
    name:'CommonHeader'
}
</script>
<style lang="stylus" scoped>
header 
    .header-top
        display:flex
        justify-content: space-between
        align-items:center
        background:#fff
        padding:.35rem
        .header-logo
            max-width:2rem
            .logo
                width:1.89rem
                height:.37rem
                a
                    display:block
                    width:100%
                    height:100%
                    color:#354b77
        .header-nav
            // visibility:hidden
            flex:1
            display:none
            flex-wrap:wrap
            justify-content:flex-end
            align-items:center
            .header-menu-wrapper
                min-width :4.15rem
                .header-menu
                    display:inline-block
                    box-sizing:border-box
                    padding:.12rem
                    text-transform:uppercase
                    border-bottom:.02rem solid transparent;
                .header-menu:link,.header-menu:visited
                    color:#354b77
                .header-menu:hover,.header-menu:active
                    color:#f15f43
                    border-bottom:.02rem solid #f15f43
            .header-search
                .header-input
                    border:1px solid #e2e2e2
                    border-radius:.04rem
                    padding:.13rem
                .header-search-btn
                    background:#f15f43
                    color:#fff
                    text-transform uppercase
                    padding:.13rem .28rem
    .header-bottom
        background: black
</style>