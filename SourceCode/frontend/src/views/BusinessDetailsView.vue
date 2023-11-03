<!-- 
    Accessed by clicking on the deatils button in the search results
    Contains details of a business and buttons to like or dislike its hours rating
-->

<template>
    <div class="contents">
        <h1 class="business-name">{{ business.name }}</h1>
        <img class="business-image" v-bind:src="business.imagepath" width="200">
        <p class="business-hours"> {{ business.opentime }} - {{ business.closetime }} </p>
        <p class="business-rating" :class="{ highreliability: business.rating >= 4, mediumreliability: business.rating >= 3 && business.rating < 4, lowreliability: business.rating < 3 }">Reliability Rating: {{ business.rating }}</p>
        <div class="business-rating-buttons">
            <button v-on:click="Dislike"><image class='icon' src="/assets/thumbsdown.png"></image></button>    <button v-on:click="Like"><image class='icon' src="/assets/thumbsup.png"></image></button>
        </div>
        <div class="description-container">
            <p class="business-description"> {{ business.description }} </p>
        </div>
    </div>

</template>

<script>
import { businesses } from '../fakedata'
export default {
    name: 'BusinessDetails',
    data() {
        return {
            business: businesses.find(business => business.id == this.$route.params.id)
        }
    },

    methods: {
        Like: function() {
            if (Math.floor(Math.random()*10) >= 7) //This is random for demonstration purposes
            {
                this.business.rating+=0.1;
            }
            alert('Thank you for your feedback!');
        },

        Dislike: function() {
            if (Math.floor(Math.random()*10) >= 7)
            {
                this.business.rating-=0.1;
            }
            alert('Thank you for your feedback!');
        },
    }
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

.business-name {
    text-align: center;
    font-size: 4vw;
    font-weight: bold;
    margin-top: 2%;
    margin-bottom: 2%;
    text-transform: uppercase;
    text-shadow: 0.5vw 0.5vw 1vw rgba(0, 0, 0, 0.3); /* Text shadow for contrast */
    letter-spacing: 0.2vw; /* Spacing between letters */
}

.business-image {
    max-width: 100%;
    max-height: 100%;
    border-radius: 1vw; /* Rounded corners */
    box-shadow: 0 0.2vw 0.4vw rgba(0, 0, 0, 0.1); /* Subtle box shadow */
    object-fit: cover; /* Ensure the image covers the container */
}

.description-container {
    border: 1px solid black;
    border-radius: 1vw; /* Rounded corners */
    box-shadow: 0 0.2vw 0.4vw rgba(0, 0, 0, 0.1); /* Subtle box shadow */
    padding: 1%;
    margin-top: 2%;
    margin-bottom: 2%; 
}

.business-description {
    text-align: center;
    font-size: 1.8vw;
    margin-top: 1%;
    text-shadow: 0.1vw 0.1vw 0.2vw rgba(0, 0, 0, 0.2); /* Text shadow for contrast */
    line-height: 1.5; /* Adjust line height for readability */
}

.business-rating {
    text-align: center;
    font-size: 2vw;
    font-weight: bold;
    margin-top: 2%;
    margin-bottom: 2%;
    color: #ff9900; /* Orange color */
    text-shadow: 0.5vw 0.5vw 1vw rgba(0, 0, 0, 0.3); /* Text shadow for contrast */
}

.business-hours {
    text-align: center;
    font-size: 1.8vw;
    color: #666; /* Gray color */
    margin-bottom: 1%;
    text-transform: uppercase;
}

.highreliability {
    color: green;
}

.mediumreliability {
    color: orange;
}

.lowreliability {
    color: red;
}

.review-button {
    font-size: 1.8vw;
    font-weight: bold;
    margin-top: 2%;
    margin-bottom: 2%;
    text-shadow: 0.5vw 0.5vw 1vw rgba(0, 0, 0, 0.3);
}
</style>