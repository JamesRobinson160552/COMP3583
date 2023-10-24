<template>
    <div class="header">
        <div class="header-center">
            <a><router-link to="/">Home</router-link></a>
            <a><router-link to="/login">Login</router-link></a>
            <a><router-link to="/signup">Signup</router-link></a>
            <a><router-link to="/profile">Profile</router-link></a>
        </div>
    </div>
    <div class="search-result">
        <h3> {{ result.name }} </h3>
        <img v-bind:src="result.imagepath">
        <p> {{ result.opentime }} - {{ result.closetime }} </p>
        <p>Reliability Rating: {{ result.rating }}</p>
        <router-link :to="`/businessdetails/${result.id}`">Details</router-link>
    </div>
</template>

<script>
import { businesses } from '../fakedata'

export default {
    name: 'SearchResults',
    data() {
        return {
            term: this.$route.params.term,
            result: businesses.find(business => business.name == this.$route.params.term)
        }
    }
};
</script>

<style scoped>
</style>