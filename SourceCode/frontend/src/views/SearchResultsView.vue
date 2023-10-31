<template>
    <div class="contents">
    <div class="searchresults">
        <h1 v-if="{ term }.length > 1">Results for "{{ term }}"</h1>
        <div v-for="result in searchresults" v-bind:key="result.id" class="search-result">
            <div :class="{ reliable: result.rating >= 4, okay: result.rating >= 3 && result.rating < 4, unreliable: result.rating < 3 }">
                <h3> {{ result.name }} </h3>
                <img class="business-image" :src=GetPhoto(result.imagepath)>
                <p> {{ result.opentime }} - {{ result.closetime }} </p>
                <p>Reliability Rating: {{ result.rating }}</p>
                <button class="details-button"><router-link :to="`/businessdetails/${result.id}`">Details</router-link></button>
            </div>
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

    methods: {
        GetPhoto: function(path) {
            return require('@/assets/' + path)
        }
    }
};

function search(term = '') {
    return businesses.filter(business => business.description.toLowerCase().includes(term));
}
</script>

<style scoped>

    .contents {
        text-align: center;
        margin-top: 2%;
        margin-bottom: 2%;
        margin-left: 20%;
        margin-right: 20%;
    }
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
        max-width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        gap: 5%;
        margin: auto;
        grid-template-rows: repeat(3, 1fr); /* Equal height rows */
    }

    .search-result {
        border-radius: 1vw; /* Rounded corners */
        box-shadow: 0 0.2vw 0.4vw rgba(0, 0, 0, 0.1); /* Subtle box shadow */
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 30px;
        cursor: pointer;
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

    .business-image {
    width: 50%;
    height: auto;
    border-radius: 1vw; /* Rounded corners */
    box-shadow: 0 0.2vw 0.4vw rgba(0, 0, 0, 0.1); /* Subtle box shadow */
    object-fit: cover; /* Ensure the image covers the container */
}
</style>