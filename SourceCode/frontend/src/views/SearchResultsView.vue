<template>
    <div class="searchresults">
        <h1 v-if="{ term }.length > 1">Results for "{{ term }}"</h1>
        <div v-for="result in searchresults" v-bind:key="result.id" class="search-result">
            <div :class="{ reliable: result.rating >= 4, okay: result.rating >= 3 && result.rating < 4, unreliable: result.rating < 3 }">
                <h3> {{ result.name }} </h3>
                <img v-bind:src="result.imagepath" width="150">
                <p> {{ result.opentime }} - {{ result.closetime }} </p>
                <p>Reliability Rating: {{ result.rating }}</p>
                <button class="details-button"><router-link :to="`/businessdetails/${result.id}`">Details</router-link></button>
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
    mounted() {
        document.title = 'Business Hours Buddy - Search Results'; // Set the title when the component is mounted
    }
};

function search(term = '') {
    return businesses.filter(business => business.description.toLowerCase().includes(term));
}
</script>

<style scoped>
    .reliable {
        background-color: lightgreen;
        border: 1px solid black;
        border-radius: 10px;
        padding: 10px;
    }

    .okay {
        background-color: lightyellow;
        border: 1px solid black;
        border-radius: 10px;
        padding: 10px;
    }

    .unreliable {
        background-color: lightsalmon;
        border: 1px solid black;
        border-radius: 10px;
        padding: 10px;
    }

    .searchresults {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        gap: 10px;
        padding: 100px;
        margin: auto;
        grid-template-rows: repeat(3, 1fr); /* Equal height rows */
    }

    .details-button {
        background-color: #f1f1f1;
        border: none;
        border-radius: 36px;
        color: black;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
</style>