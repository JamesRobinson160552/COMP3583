<template>
    <div class="header">
        <div class="header-center">
            <a><router-link to="/" class="active">Home</router-link></a>
            <a><router-link to="/login">Login</router-link></a>
            <a><router-link to="/signup">Signup</router-link></a>
            <a><router-link to="/profile">Profile</router-link></a>
        </div>
    </div>

    <h1 style = "text-align:center">Business Hours Buddy</h1>

    <div class="grid-center">
        <div class="grid-container-home">
            <div class="subheader">Welcome to Buddy Base Hours</div>
                <div class="paragraph">
                We here at BHB hope to provide you with an accurate report of local business hours in your area. To search for a specific business, enter the name
                into the search bar then press Search. If your are looking for businesses in your area press Browse. If any inaccuracies are found please let us
                know so that we may update their Accuracy Rating.
                </div>
            <input class="search" type="text" name="search"/>
            <button class="search-button button" type="submit">Search</button>  
            <button class="browse button" type="submit">Browse</button>  
            <button class="business button" type="submit">Validate Business</button>  
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3870.1373147062895!2d-64.36835334073848!3d45.09007515976487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1697656705099!5m2!1sen!2sca" width="90%" height="100%" style="border:10;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="blank"></div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>

</style>