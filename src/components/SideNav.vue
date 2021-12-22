<template>
    <div class="hidden lg:flex h-screen bg-white bg-opacity-20 w-52 p-5 flex-col justify-between">
            <h3 class="font-semibold bank text-xl">Bank</h3>
            <div id="nave" class="h-56 flex flex-col justify-around">
                <router-link to="/dashboard" class="flex items-center outline-none">
                    <i class="fas fa-home text-white dash"></i>
                    <p class="home text-xl ml-2">Home</p>
                </router-link>
                <router-link to="/balance" class="flex items-center outline-none">
                    <i class="fas fa-credit-card"></i>
                    <p class="home text-xl ml-2">Balance</p>
                </router-link>
                <router-link to="/" class="flex items-center outline-none">
                    <i class="fas fa-exchange-alt"></i>
                    <p class="home text-xl ml-2">Transfer</p>
                </router-link>
                <router-link to="/" class="flex items-center outline-none">
                    <i class="fas fa-chevron-up"></i>
                    <p class="home text-xl ml-2">Deposit</p>
                </router-link>
                <router-link to="/" class="flex items-center outline-none">
                    <i class="fas fa-chevron-down"></i>
                    <p class="home text-xl ml-2">withdraw</p>
                </router-link>
            </div>
            <router-link to="/" class="flex items-center outline-none">
                <i class="far fa-user"></i>
                <p class="home text-xl ml-2">Edit Profile</p>
            </router-link>
        </div>
</template>
<script>
export default {
    name: "SideNav"
}
</script>
<style>
     #nave a.router-link-exact-active {
         /* color: white; */
        background: -webkit-linear-gradient(30deg, #E08249, #EAA681);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .bank {
        color: #EE7F3C;
    }

    .home {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
</style>