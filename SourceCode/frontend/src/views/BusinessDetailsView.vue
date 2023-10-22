<template>
    <div class="header">
        <div class="header-center">
            <router-link to="/">Home</router-link>
            <router-link to="/login">Login</router-link>
            <router-link to="/signup">Signup</router-link>
            <router-link to="/profile">Profile</router-link>
        </div>
    </div>
    <h1>Business Details for {{ business.name }}</h1>
    <img v-bind:src="business.image_url">
    <p> {{ business.opentime }} - {{ business.closetime }} </p>
    <p>Reliability Rating: {{ business.rating }}</p>
    
</template>

<script>
import { businesses } from '../fakedata'
export default {
    name: 'BusinessDetails',
    data() {
        return {
            business: businesses.find(business => business.id == this.$route.params.id)
        }
    }
}
</script>

<style scoped>
</style>