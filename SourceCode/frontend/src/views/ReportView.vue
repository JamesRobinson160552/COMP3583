<!--
    Accessed by clicking on the Report Inaccuracy Button on the Business Details Page
    Includes the Business Name, Location, and Hours along with form to report errors.
-->
<template>
    <div class="header">
    <div class="header-center">
        <p class="divBody">Report Inaccuracy for:</p>
    </div>
</div>

<div class="divContainer">
    <div class="divBody">
        <h1 class="business-name">{{business.name}}</h1><br>
        <p class="business-hours">{{business.opentime}} - {{business.closetime}}</p><br>
        <p class="business-location">{{business.location}}</p>
        <br>
        <br>
        <form name="inaccuracyReport">
            <h3>Reason for Reporting:</h3><br>
            <input type="checkbox" id="reason1" name="reason1" value="Wrong Open Time" v-on:clock="CorrectTime">
            <label for="Inaccuracy1">Wrong Opening Time</label><br>
            <input type="checkbox" id="reason2" name="reason2" value="Wrong Close Time" v-on:clock="CorrectTime">
            <label for="Inaccuracy2">Wrong Closing Time</label><br>
            <input type="checkbox" id="reason3" name="reason3" value="Incorrect Address" v-on:clock="CorrectAddress">
            <label for="Inaccuracy3">Incorrect Address</label><br>
            <input type="checkbox" id="reason4" name="reason4" value="Business is Closed" v-on:click="closureDur">
            <label for="Inaccuracy4">Business is Closed</label><br>

            <h3>Correct Info (if known):</h3><br>
            <label for="CorrectionOpen">Corrected Open Time:</label>
            <input type="time" id="correcttime" name="correcttime" value="Correct Open Time"><br>
            <label for="CorrectionClose">Corrected Close Time:</label>
            <input type="time" id="correcttime" name="correcttime" value="Correct Close Time"><br>
            <label for="CorrectionAddress">Corrected Address:</label><br>
            <input type="text" id="correctaddress" name="correctaddress" placeholder="123 Main Street"><br>
            <input type="radio" id="closed" name="closed" value="Closed Permanently">
            <label for="Closure1">Closed Permanently</label><br>
            <input type="radio" id="closed" name="closed" value="Closed Temporarily">
            <label for="Closure2">Closed Temporarily</label><br>
            <input type="radio" id="closed" name="closed" value="Closed Unknown">
            <label for="Closure3">Length of Closure Unknown</label><br>

            <label for="InaccuracyR">Additional Info</label><br>
            <input type="text" id="reasoninfo" name="reasoninfo" value="Additional Info"><br>
            <br>
            <input type="submit" value="Submit" name="submit1">
        </form>
    </div>
</div>
</template>

<script>
import { businesses } from '../fakedata'
    
export default {
    name: 'Report',
    data() {
        return {
            business: businesses.find(business => business.id == this.$route.params.id)
        }
    },

    methods:{
        CorrectTime: function() {
            var openChecked = document.getElementsByName("reason1");
            var closeChecked = document.getElementsByName("reason2");
            var correctTime = document.getElementsByName("correcttime");

            if(openChecked.checked){
                correctTime.show();
            }
            else if (closedChecked.checked) {
                correctTime.show();
            } else {
                correctTime.hide();
            }
        },
        CorrectAddress: function(){
            var addChecked = document.getElementsByName("reason3");
            var correctAddress = document.getElementsByName("correctaddress");

            if(addChecked.checked){
                correctAddress.show();
            } else {
                CorrectAddress.hide();
            }
        },
        ClosureDuration: function(){
            var busClosed = document.getElementsByName("reason4");
            var closureDur = document.getElementsByName("closed");

            if(busClosed.checked){
                closureDur.show();
            } else {
                closureDur.hide();
            }
        }
    }
}
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

.button:hover{
    background-color: #ddd;
    color: black;
    width: auto;
    height: 50px; 
}
</style>
