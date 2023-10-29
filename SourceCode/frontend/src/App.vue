<template>

  <router-view/>
</template>

<style> /**This is unscoped and therefore applies to all views */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
/************************************************************** Header */
/* Style the header with a grey background and some padding */
.header {
    overflow: hidden;
    background-color: #f1f1f1;
    padding: 20px 10px;
  }
  
  /* Style the header links */
  .header a {
    float: left;
    color: black;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;
  }
  
  /* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
  .header a.logo {
    font-size: 25px;
    font-weight: bold;
  }
  
  /* Change the background color on mouse-over */
  .header a:hover {
    background-color: #ddd;
    color: black;
  }
  
  /* Style the active/current link*/
  .header a.active {
    background-color: black;
    color: white;
  }
  
  /* Float the link section to the right */
  .header-right {
    float: right;
  }

  .header-center{
    display: flex; /* Use flexbox for centering */
    justify-content: center; /* Center horizontally */
  }

/*************************************************************** Grid */
.grid-center{
  text-align: center;
}

.grid-container-home {
  display: grid;
  grid-template-areas:
    'subheader subheader subheader subheader search searchButton'
    'paragraph paragraph paragraph paragraph browse browse'
    'paragraph paragraph paragraph paragraph business business'
    'blank blank blank blank blank blank'
    'map map map map map map'
    'map map map map map map'
    'map map map map map map'
    'map map map map map map'
    'map map map map map map';
  gap: 10px;
  padding: 100px;
  grid-template-columns: repeat(6, 1fr); /* Equal width columns */
  grid-template-rows: repeat(9, 1fr); /* Equal height rows */
}

.grid-container-user-profile {
  display: grid;
  grid-template-areas:
    'subheader subheader subheader subheader profilePicture profilePicture'
    'paragraph paragraph paragraph paragraph profilePicture profilePicture'
    'paragraph paragraph paragraph paragraph profilePicture profilePicture';
  gap: 10px;
  padding: 100px;
  grid-template-columns: repeat(6, 1fr); /* Equal width columns */
  grid-template-rows: repeat(3, 1fr); /* Equal height rows */
}

.grid-container > div {
  text-align: center;
  padding: 20px 0;
  border: none;
}

.subheader {
  grid-area: subheader;
  font-size: 30px;
}

.paragraph {
  grid-area: paragraph;
  font-size: 20px;
}

.search {
  font-size: 30px;
  grid-area: search;
  background-color: #f1f1f1;
  border-radius: 36px;
  border-color: #ddd;
}

.browse {
  font-size: 30px;
  grid-area: browse;
  background-color: #f1f1f1;
  padding: 10px;
}

.business {
  font-size: 30px;
  grid-area: business;
  background-color: #f1f1f1;
  padding: 10px;
}

.map {
  font-size: 30px;
  grid-area: map;
  background-color: #f1f1f1;
}

.blank{
  grid-area: blank;
}

.search-button{
  font-size: 30px;
  grid-area: searchButton;
  background-color: #f1f1f1;
}

.profile-picture{
  font-size: 30px;
  grid-area: profilePicture;
  background-color: #f1f1f1;
}

.button {
  border-radius: 36px;
  border-color: #ddd;
}

.button:hover{
  background-color: #ddd;
  color: black;
}

/*************************************************************** SignUpPage */
input {
  width: 80%;
  padding: 12px 20px;
  margin: 4px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  border-radius: 36px;
}

label{
  display: block; 
  margin-bottom: 3px; 
}

.divContainer{
  margin: 0 35%;
  padding: 10px;
  justify-content: center;
  align-items: center;
}

.divBody{
  float: none;
  margin: 0 auto;
  color: black;
  text-align: left;
  padding: 15px;
  font-size: 30px;
  line-height: 25px;
  border-radius: 4px;
  background-color: #f1f1f1;
  display: block;
}


.divBodySub{
  margin: 0 auto;
  color: black;
  text-align: left;
  padding: 15px;
  font-size: 30px;
  line-height: 25px;
  border-radius: 4px;
  background-color: #f1f1f1;
  display: block;
}

.image{
    display: block;
    margin: 0 auto;
}

.sign-up-button {
  width: auto; 
  height: 50px; 
  border-radius: 36px;
  border-color: #ddd;
  font-size: 30px;
}

.sign-up-button:hover{
  background-color: #ddd;
  color: black;
  width: auto;
  height: 50px; 
}
</style>
