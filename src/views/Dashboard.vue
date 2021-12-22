<template>
    <div class="w-full h-full bg-black bg-opacity-90 text-white flex lg:flex-row flex-col">
        <SideNav class="md:hidden"/>
        <div class="p-5 lg:pl-20 lg:pr-20 lg:pt-10 lg:pb-10 md:p-16 flex flex-col w-full h-screen overflow-hidden overflow-y-scroll">
            <div>
                <h3 class="font-semibold text-xl mb-4">Welcome <br/>Kelvin</h3>
                <div class="w-full h-80 bg-yellow-600 rounded-lg"></div>
                <!-- mainbody -->
                <div class="flex flex-col lg:flex-row lg:justify-between">
                <!-- <Chartbar/> -->
                    <div class="bg-black bg-opacity-30 shadow w-full mt-5 md:mt-10 lg:mt-5 h-64 rounded-lg lg:mr-5 p-7 flex flex-col justify-between">
                        <h3 class="text-4xl font-semibold cardLogo">Bank</h3>
                        <div class="flex justify-between items-center">
                            <h3 class="text-2xl text-white text-opacity-50 cardNum">{{this.accountNo.accountNo}}</h3>
                            <i class="fas fa-sim-card text-white text-opacity-30 text-3xl cardChip"></i>
                        </div>
                        <h3 class="text-2xl text-white text-opacity-50 text-right cardNum">Visa</h3>
                    </div>
                    <!-- transaction details -->
                    <div class="bg-yellow-600 w-full mt-5 md:mt-10 lg:mt-5 h-64 rounded-lg lg:p-7 p-5 flex flex-col">
                        <div class="flex justify-between">
                            <h3>Recent Transaction</h3>
                            <h3 class="cursor-pointer">See All ></h3>
                        </div>
                        <div class="tansactionMainDiv overflow-hidden overflow-y-scroll p-2" >
                            <div class="flex justify-between w-full items-center mt-5 font-semibol lg:text-lg">
                                <div id="trans" class="bg-white rounded-full"></div>
                                <h3>Kelvin</h3>
                                <h3>$3,000,000</h3>
                            </div>
                            <div class="flex justify-between w-full items-center mt-5 font-semibol lg:text-lg">
                                <div id="trans" class="bg-white rounded-full"></div>
                                <h3>Dev Fola</h3>
                                <h3>$3,000,000</h3>
                            </div> 
                            <div class="flex justify-between w-full items-center mt-5 font-semibol lg:text-lg">
                                <div id="trans" class="bg-white rounded-full"></div>
                                <h3>Dev Seyi</h3>
                                <h3>$3,000,000</h3>
                            </div> 
                            <div class="flex justify-between w-full items-center mt-5 font-semibol lg:text-lg">
                                <div id="trans" class="bg-white rounded-full"></div>
                                <h3>Dev Peace</h3>
                                <h3>$3,000,000</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BottomNav class="lg:hidden"/>
    </div>
</template>

<script>
import BottomNav from '../components/BottomNav.vue'
import SideNav from '../components/SideNav.vue'
import axios from 'axios'
// import Chartbar from '../components/Chartbar.vue'
export default {
    data(){
        return{
            accountNo: ''
        }
    },
    mounted() {
        console.log(this.$route.params.id);
        axios.get('https://banking-app-5f7cb-default-rtdb.firebaseio.com/register.json').then(res=> {
            console.log(res.data);
        })
        axios.get('https://banking-app-5f7cb-default-rtdb.firebaseio.com/register/-MrYB1SA6uZGNe1d4YU0.json').then(res=>{
            localStorage.setItem('BankingUserInfo', JSON.stringify(res.data))
        })
        this.accountNo = JSON.parse(localStorage.getItem("BankingUserInfo"))
        console.log(JSON.parse(localStorage.getItem("BankingUserInfo")));
    },
    components:{
        BottomNav,
        SideNav,
        // Chartbar
    }
}
</script>

<style >
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track{
        border-radius: 5px;
        box-shadow: inset 0 0 10px #EAA681;

    }
    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #E08249;
    }

    .cardChip {
        text-shadow: 0 0 4px #EAA681;
        transform: rotate(90deg);
    }

    .cardNum {
        text-transform: uppercase;
        letter-spacing: 5px;
        text-shadow: 0 0 10px #EAA681,
                     /* 0 0 20px #e2f6ff, */
                     /* 0 0 40px #e2f6ff,
                     0 0 80px #e2f6ff, */
                     0 0 400px #EAA681;
    }

    .cardLogo {
        text-transform: uppercase;
        letter-spacing: 5px;
        text-shadow: 0 0 10px #EAA681,
                     /* 0 0 20px #00b3ff,
                     0 0 40px #00b3ff,
                     0 0 80px #00b3ff, */
                     0 0 160px #EAA681;
    }

    #trans {
        width: 40px;
        height: 40px;
        border: 100%;
    }

    /* .tansactionMainDiv {

    } */
</style>