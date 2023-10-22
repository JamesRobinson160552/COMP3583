<template>
    <div class="header">
        <div class="header-center">
            <router-link to="/">Home</router-link>
            <router-link to="/login">Login</router-link>
            <router-link to="/signup">Signup</router-link>
            <router-link to="/profile">Profile</router-link>
        </div>
    </div>
    <h1>Results for {{ term }}</h1>
    <div v-for="business in businesses" class="search-result" v-bind:key="business.id">
        <h1> {{ business.name }} </h1>
    </div>
</template>

<script>
import { businesses } from '../fakedata'

export default {
    name: 'SearchResults',
    data() {
        return {
            businesses
        }
    }
};
</script>

<style scoped>
</style>