<!--This page is currently mostly empty and unreachable-->

<template>
<div class="divContainer">
    <div class="divBodySub">
        <img src="/assets/profilepic.jpg" class="image" width="100" height="100">
        <br>
        <button class="button" type="submit">Change Profile Picture</button> 
    </div>
</div>

<div class="divContainer">
    <div class="divBody">
        <p class="label">First Name</p>
        <input class="search" type="text" name="firstName" placeholder="John">
        <p class="label">Last Name</p>
        <input class="search" type="text" name="lastName" placeholder="Doe">
        <p class="label">Username</p>
        <input class="search" type="text" name="username">
        <p class="label">Password</p>
        <input class="search" type="text" name="firstName">
        <p class="label">Email</p>
        <input class="search" type="text" name="email">
        <p class="label">Organization Name (if applicable)</p>
        <input class="search" type="text" name="organizationName">
        <br>
        <button class="button" type="submit">Save Changes</button> 
    </div>
</div>
</template>

<script>
export default {
  mounted() {
    document.title = 'Business Hours Buddy - User Profile'; // Set the title when the component is mounted
  }
};
</script>

<style scoped>
.button {
    width: 10%;
    margin: 10px;
    padding: 10px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.button:hover{
    background-color: #0e5811;
}

label{
    display: block; 
    margin-bottom: 3px; 
}

</style>