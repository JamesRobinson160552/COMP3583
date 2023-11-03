<template>
    <br>
    <br>
    <div class="login-container">
        <h1>Login</h1>
        <form @submit.prevent="login">
            <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" v-model="username" required>
            </div>
            <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required>
            </div>
            <button type="submit" v-on:click="login">Login</button>
        </form>
        <div>
            <br>
            <br>
            <button class = "signupbutton"><router-link to="/sign-up">Sign up</router-link></button>
        </div>
        </div>
  </template>
  
  <script>
  import { users } from '../fakeusers.js';

  export default {
    methods: {
      login() {
        const user = login();
        alert("Logged in as " + user);
        if (user !== '') {
          this.$router.push({ path: '/' });
        }
      }
    },
  };

  function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (users.filter(user => user.username === username && user.password === password)) {
      return username;
    }
    else {
      return '';
    }
  }
  </script>

<style scoped>
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  h1 {
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>