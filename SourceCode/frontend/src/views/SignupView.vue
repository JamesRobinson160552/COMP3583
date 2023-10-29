<template>
    <div class="divContainer">
    <div class="divBody">
        <p class="label">Username</p>
        <input type="text" name="username">
        <p class="label">Password</p>
        <input type="text" name="password">
        <p class="label">Email</p>
        <input type="text" name="email">
        <p class="label">Organization Name (if applicable)</p>
        <input type="text" name="organizationName">
        <button class="button" type="submit">Submit</button> 
    </div>
</div>
</template>

<script>
</script>

<style scoped>
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
    display: inline-block;
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
    display: inline-block;
}

.button {
    width: 150px; 
    height: 50px; 
    border-radius: 36px;
    border-color: #ddd;
    font-size: 30px;
}

.button:hover{
    background-color: #ddd;
    color: black;
    width: 150px; 
    height: 50px; 
}

</style>