const express = required('express');

const app = express();

app.get('/', (req, res) => {
    console.log("It's Working");
})

app.post('/auth', (req, res) => {
    console.log('signin');
})

app.get('/user_page', (req, res) => {
    console.log('userPage');
})

app.get('/profile', (req, res) => {
    console.log('profile');
})

app.listen(5000);