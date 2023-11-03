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
            <br>
            <br>
            <button class="button" type="submit"><router-link to="/">Submit</router-link></button> 
        </div>
    </div>
</template>

<script>
export default {
    name: '/sign-up',
    data () {
        return {
            
        }
    },
    mounted() {
        document.title = 'Business Hours Buddy - Sign Up'; // Set the title when the component is mounted
    }
};
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
    margin: 0 5%;
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
    border: 1px solid #ddd;
    border-radius: 36px;
    box-sizing: border-box;
}

.button {
    transform: translate(100%, 20%);
    width: 150px; 
    height: 50px; 
    border-radius: 36px;
    font-size: 30px;
    padding: 10px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.button:hover{
    background-color: #0e5811;
    width: 150px; 
    height: 50px; 
}

</style>