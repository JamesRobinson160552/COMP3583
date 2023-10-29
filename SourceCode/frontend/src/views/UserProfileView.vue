<template>

<div class="header">
    <div class="header-center">
        <a><router-link to="/">Home</router-link></a>
        <a><router-link to="/login">Login</router-link></a>
        <a><router-link to="/signup">Signup</router-link></a>
        <a><router-link to="/profile" class="active">Profile</router-link></a>
    </div>
</div>

<h1>UserSettings</h1>

<div class="divContainer">
    <div class="divBodySub">
        <img src="../assets/profilepic.jpg" class="image" width="100" height="100">
        <button class="sign-up-button" type="submit">Change Profile Picture</button> 
    </div>
</div>

<div class="divContainer">
    <div class="divBody">
        <p class="label">First Name</p>
        <input type="text" name="firstName" placeholder="John">
        <p class="label">Last Name</p>
        <input type="text" name="lastName" placeholder="Doe">
        <p class="label">Username</p>
        <input type="text" name="username">
        <p class="label">Password</p>
        <input type="text" name="firstName">
        <p class="label">Email</p>
        <input type="text" name="email">
        <p class="label">Organization Name (if applicable)</p>
        <input type="text" name="organizationName">
        <button class="sign-up-button" type="submit">Save Changes</button> 
    </div>
</div>
</template>

<script>
</script>

<style scoped>
</style>