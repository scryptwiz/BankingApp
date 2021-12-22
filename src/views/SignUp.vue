<template>
  <div class="bg-black bg-opacity-90 h-screen p-7 w-100">
   <div class="glowingBall rounded-full w-36 h-36"></div>
   <div class="glowingBall2 rounded-full w-20 h-20"></div>
   <div class="w-full flex justify-center items-center mt-20 flex-col">
    <h3 class="text-white font-bold text-2xl">Signup</h3>
    <button class="text-white border-gray-500 border pt-2 pb-2 text-sm w-72 mt-9 text-opacity-75 rounded-lg hover:border-yellow-500 transition duration-400 hover:border-opacity-40">
      <span class="font-bold mr-2">G</span>
        Continue with Google
    </button>
     <button class="text-white border-gray-500 border pt-2 pb-2 w-72 text-sm mt-5 text-opacity-75 rounded-lg hover:border-yellow-500 transition duration-400 hover:border-opacity-40">
      <span class="font-bold mr-2">F</span>
        Continue with Facebook
    </button>
    <div class="flex flex-row items-center mt-4 text-white text-opacity-75">
      <!-- <hr class="h-1 w-20 mr-2"/> -->
      <p>or</p>
      <!-- <hr class="h-1 w-20 ml-2"/> -->
    </div>
    <input type="email" placeholder="Email" class="outline-none border border-gray-500 w-72 h-9 p-2 pl-3 text-white text-opacity-50 bg-transparent mt-4 rounded focus:border-yellow-500 focus:text-white transition duration-200 focus:border-opacity-40" v-model="email">
    <input type="name" placeholder="Username" class="outline-none border border-gray-500 w-72 h-9 p-2 pl-3 text-white text-opacity-50 bg-transparent mt-5 rounded focus:border-yellow-500 focus:text-white transition duration-200 focus:border-opacity-40" v-model="username">
    <input type="password" placeholder="Password" class="outline-none border border-gray-500 w-72 h-9 p-2 pl-3 text-white text-opacity-50 bg-transparent mt-5 rounded focus:border-yellow-500 focus:text-white transition duration-200 focus:border-opacity-40" v-model="password">
    <button class="outline-none w-72 h-9 text-white text-opacity-50 mt-6 rounded btn font-semibold" @click="register">Sign Up</button>
    <h3 class="text-white text-opacity-70 mt-3">Already have an account? <span class="font-semibold text-white cursor-pointer" @click="login()">Login</span></h3>
   </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      accountNo: '',
      accountBal: '',
      uId: '',
      userInfo: []
    }
  },
    methods: {
        login() {
            this.$router.push(`/`)
        },
        register(){
          let {username, email, password, accountNo, accountBal} = this;
          for (let i = 0; i < 10; i++) {
            let getNo = Math.round(Math.random()*10);
            accountNo +=getNo;
          }
          axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA-xbeVgis0M4jhfDDNcTBfAg7_tMzkTf8', {
            username, email, password
          }). then (res=>{
            localStorage.setItem('BankingUserToken', res.data.idToken)
            console.log(res.data)
            this.$router.push(`/`)
            // this.username = '',
            // this.email = '',
            // this.password = ''
          }).catch(err=>{
            alert(err.message)
          })
          accountBal = '$50,000'
          axios.post('https://banking-app-5f7cb-default-rtdb.firebaseio.com/register.json', {email, username, accountNo, accountBal}).then(res=> {
            this.userInfo = res.data
            console.log(this.userInfo);
            console.log(res.data);
          })
        }
    }
}
</script>

<style>
  .glowingBall {
    position: absolute;
    top: -4%;
    left: 20%;
    background-image: linear-gradient(45deg, purple, pink);
  }
  .glowingBall2 {
    position: absolute;
    left: 70%;
    background-image: linear-gradient(45deg, black, #686363);
  }
  .btn {
    background-image: linear-gradient(30deg, rgb(155, 9, 155), pink);
  }
  @media screen and (max-width: 426px) {
    .glowingBall {
      position: absolute;
      top: -7%;
      left: -10%;
      background-image: linear-gradient(45deg, purple, pink);
    }
    .glowingBall2 {
      position: absolute;
      left: 70%;
      background-image: linear-gradient(45deg, black, #686363);
    }
  }
</style>