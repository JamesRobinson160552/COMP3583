<template>
    <div class="header">
        <div class="header-center">
            <a><router-link to="/">Home</router-link></a>
            <a><router-link to="/login">Login</router-link></a>
            <a><router-link to="/signup">Signup</router-link></a>
            <a><router-link to="/profile">Profile</router-link></a>
        </div>
    </div>
    <div class="searchresults">
        <h1>Results for "{{ term }}"</h1>
        <div v-for="result in searchresults" v-bind:key="result.id" :class="{ reliable: result.rating >= 4, okay: result.rating >= 3 && result.rating < 4, unreliable: result.rating < 3 }">
            <div class="search-result">
                <h3> {{ result.name }} </h3>
                <img v-bind:src="result.imagepath">
                <p> {{ result.opentime }} - {{ result.closetime }} </p>
                <p>Reliability Rating: {{ result.rating }}</p>
                <router-link :to="`/businessdetails/${result.id}`">Details</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { businesses } from '../fakedata.js'

export default {
    name: 'SearchResults',
    data() {
        return {
            term: this.$route.params.term.toLowerCase(),
            searchresults: search(this.$route.params.term.toLowerCase())
        };
    },
};

function search(term = '') {
    return businesses.filter(business => business.description.toLowerCase().includes(term));
}
</script>

<style scoped>
    .reliable {
        background-color: lightgreen;
    }
    .okay {
        background-color: lightyellow;
    }
    .unreliable {
        background-color: lightsalmon;
    }
</style>