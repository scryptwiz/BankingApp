<template>
    <div class="w-full bg-gray-700 h-10 sticky bottom-0 flex flex-row justify-evenly items-center md:h-16" id="nav">
        <router-link to="/dashboard" class="fas fa-home text-white dash text-xl md:text-2xl"></router-link>
        <router-link to="/balance" class="fas fa-credit-card text-white dash text-xl md:text-2xl"></router-link>
        <i class="fas fa-exchange-alt text-xl md:text-2xl"></i>
        <i class="fas fa-chevron-up text-xl md:text-2xl"></i>
        <i class="fas fa-chevron-down text-xl md:text-2xl"></i>
        <i class="far fa-user text-xl md:text-2xl"></i>
    </div>
</template>
<script>
export default {
    name: "BottomNav",
}
</script>
<style>
    #nav a.router-link-exact-active {
        background: -webkit-linear-gradient(45deg, #E08249, #EAA681);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>