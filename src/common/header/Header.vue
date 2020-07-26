<template>
    <header>
        <div class="wrapper">
            <div class="header-top row">
                <div class="header-logo col-6 col-lg-3">
                    <h1 class="logo"><a href="#"><img src="../../assets/images/logo.png" alt=""></a></h1>
                </div>
                <div class="header-nav col-hide col-lg-9 col-lg-show">
                    <div class="header-nav-menu">
                          <a href="#" class="menu">home</a>
                          <a href="#" class="menu">home</a>
                          <a href="#" class="menu">home</a>
                          <a href="#" class="menu">home</a>
                          <a href="#" class="menu">home</a>
                    </div>
                    <div class="header-nav-search">
                        <input class="search-input" type="text" placeholder="请输入">
                        <a class="search-btn" href="#">search</a>
                    </div>
                </div>
                <div class="col-6 col-show col-lg-hide">
                    <div>隐藏项</div>
                </div>
            </div>
            <div class="header-bottom"></div>
        </div>
    </header>
    <!-- <img src="" alt=""> -->
</template>
<script>
export default {
    name:'CommonHeader'
}
</script>
<style lang="stylus" scoped>
*
    box-sizing : border-box

// div[class*='col-']
    // border:1px solid red
*{
    box-sizing:border-box
}
header
    height:400px
    background:transparent url('../../assets/images/header_bg.jpg') no-repeat
    background-size:cover
    .header-top 
        background:#fff
        padding:1.3rem 2.1rem
        .header-logo
            padding:0
            .logo
                width:189px
                height:37px
                a
                    display:block
                    width:100%
                    height:100%
        .header-nav
            height:100%
            .header-nav-menu
                float:left
                height:100%
                margin-top:-2px
                display:flex
                justify-content:flex-end
                align-items:center
                .menu
                    display:block
                    border-bottom:2px solid transparent
                    text-transform:uppercase
                    font-weight:700
                    padding:15px
                    margin-right:5px
                .menu:link,.menu:visited
                    color:#354b77
                .menu:hover,.menu:active
                    color:#f15f43
                    border-bottom-color:#f15f43
            .header-nav-search
                height:100%
                float:right
                .search-input  
                    width:186px
                    border:1px solid #eeeeee
                    border-radius:5px
                    color:#999
                    padding:12px
                .search-input::--webkit-input-placeholder
                    color:#999
                .search-input::--moz-input-placeholder
                    color:#999
                .search-input::--ms-input-placeholder
                    color:#999
                .search-btn
                    background:#f15f43
                    border-radius :5px
                    padding:15px 25px
                    color:#fff
                    font-weight:700
                    text-transform:uppercase
                    

</style>