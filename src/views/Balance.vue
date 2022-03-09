<template>
<!-- eslint-disable -->
     <div class="w-full h-full bg-black bg-opacity-90 text-white flex lg:flex-row flex-col">
        <SideNav class="md:hidden"/>
            <div class="p-5 lg:pl-20 lg:pr-20 lg:pt-10 lg:pb-10 md:p-16 flex flex-col w-full h-screen overflow-hidden overflow-y-scroll">
                <div>
                    Hello world
                </div>
            </div>
        <BottomNav class="lg:hidden"/>
    </div>
</template>
<script>
import BottomNav from '../components/BottomNav.vue'
import SideNav from '../components/SideNav.vue'
export default {
    name: "Balance",
    components: {
        BottomNav,
        SideNav
    }
}
</script>
<style>
    
</style>