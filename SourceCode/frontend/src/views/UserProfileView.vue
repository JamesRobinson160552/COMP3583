<template>
    <div class="header">
        <div class="header-center">
            <a><router-link to="/">Home</router-link></a>
            <a><router-link to="/login">Login</router-link></a>
            <a><router-link to="/signup">Signup</router-link></a>
            <a><router-link to="/profile" class="active">Profile</router-link></a>
        </div>
    </div>

    <div class="grid-center">
        <div class="grid-container-user-profile">
            <div class="subheader">John Doe</div>
            <div class="paragraph">
                Bio??
            </div>
            <img src="../assets/profilepic.jpg" class="profile-picture">
        </div>
    </div>

<h1>UserSettings</h1>
</template>

<script>
</script>

<style scoped>
</style>