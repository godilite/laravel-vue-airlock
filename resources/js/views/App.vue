<template>
 <div>
    <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
        <div class="container">
            <router-link :to="{name: 'home'}" class="navbar-brand">AirLock</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto"></ul>
                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                <!-- Authentication Links -->
                    <router-link :to="{ name: 'login' }" class="nav-link" v-if="!isLoggedIn">Login</router-link>
                    <router-link :to="{ name: 'register' }" class="nav-link" v-if="!isLoggedIn">Register</router-link>
                    <li class="nav-link" v-if="isLoggedIn"> Hi, {{name}}</li>
                    <router-link :to="{ name: 'dashboard' }" class="nav-link" v-if="isLoggedIn">Board</router-link>
                    <a class="nav-link" v-if="isLoggedIn" @click="logout"> Logout</a>
                </ul>

            </div>
        </div>
    </nav>
    <main class="py-4">
        <router-view></router-view>
    </main>
</div>
</template>
<script>
    export default {
          data(){
            return {
                isLoggedIn : true,
                name : null
            }
        },
        methods: {
            logout(){
                axios.get('api/logout')
            }
        },
        mounted(){
            //Check if the user is Authenticated
            this.isLoggedIn = window.Laravel.isLoggedin
            this.isLoggedIn ? this.name = window.Laravel.user['name'] : this.name = null
        }
    }
</script>
