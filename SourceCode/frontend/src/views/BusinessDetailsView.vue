<template>
    <div class="header">
        <div class="header-center">
            <a><router-link to="/">Home</router-link></a>
            <a><router-link to="/login">Login</router-link></a>
            <a><router-link to="/signup">Signup</router-link></a>
            <a><router-link to="/profile">Profile</router-link></a>
        </div>
    </div>
    <h1>Business Details for {{ business.name }}</h1>
    <img v-bind:src="business.imagepath">
    <p> {{ business.opentime }} - {{ business.closetime }} </p>
    <p>Reliability Rating: {{ business.rating }}</p>
    <p> {{ business.description }} </p>

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