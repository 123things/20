<template>
    <div>
        <common-header>
            <home-info></home-info>
        </common-header>
    </div>
</template>
<script>
import CommonHeader from '@common/header/Header.vue'
import HomeInfo from './components/Info'
export default {
    name:'Home',
    components:{
        CommonHeader,
        HomeInfo
    }
}
</script>
<style lang='stylus' scoped>
    
</style>