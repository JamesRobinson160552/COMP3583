<template>
<div class ="header">
    <div class="header-center">
        <p class="divBody">Business Hours Buddy Owner Verification</p>
    </div>
</div>
<div class="divContainer">
    <div clas="divBody">
        <p>As a part of our commitment to ensuring only the most accurate business hours are published<br>
            we offer Business Owners like you to publish your own verified hours! To join our growing <br>
            roster of verified businesses, please fill out the form below so we can get in touch and <br>
            verify you and your business! Once verified we will convert you current account to a verified<br>
            account! If you haven't already, head on over the <a href="SignUpScreen.html">Sign Up</a> to get started!
        </p>

        <form>
            <label for="bName">Business Name:</label><br>
            <input type="text" id="bName" name="bName" required><br>
            <label for="fName">First Name:</label><br>
            <input type="text" id="fName" name="fName" required><br>
            <label for="lName">Last Name:</label><br>
            <input type="text" id="lName" name="lName" required><br>
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" 
            placeholder="johndoe@business.com" required><br>
            <label for="phoneNum">Phone Number:</label><br>
            <input type="tel" id="phoneNum" name="phoneNum" 
            placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required><br>
            <label for="addInfo">Additional Info:</label><br>
            <input type="text" id="addInfo" name="addInfo"><br><br>
            <input type="submit" value="Submit">
        </form>
        <a href="HomeScreen.html">To Home Page</a>
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

.image{
    display: block;
    margin: 0 auto;
}

.button {
    width: auto; 
    height: 50px; 
    border-radius: 36px;
    border-color: #ddd;
    font-size: 30px;
}

.button:hover{
    background-color: #ddd;
    color: black;
    width: auto;
    height: 50px; 
}
</style>
