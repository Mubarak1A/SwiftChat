const express = required('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors())

const database = {
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            chats: '',
            joined: new Date()
        },
        {
            id: '124',
            name: 'Sally',
            email: 'sally@gmail.com',
            chat: '',
            joined: new Date()
        }
    ],
    login: [
        {
            id: '987',
            email: 'sally@gmail.com',
            hash: '',
        }
    ]
}

app.get('/', (req, res) => {
    res.send("It's Working");
})

app.post('/signin', (req, res) => {
    if (req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password) {
        res.json('signin successful');
    } else {
        res.status(400).json('error loging in')
    }
})

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    database.push({
        id: '125',
            name: name,
            email: email,
            password: password,
            entries: 0,
            joined: new Date()
    })

    res.json(database.users[database.users.length-1]);
})


app.put('/chatbot/:id', (req, res) => {
    const { id } = params;
    let found = false;

    database.users.forEach((user) => {
        if (user.id === id){
            found = true
            user.chat = req.body
            return res.json(user);
        }
    })

    if (!found){
        res.status(400).json('user not found')
    }
})

app.get('/:id/profile', (req, res) => {
    const { id } = req.params;
    let found = false;

    database.users.forEach((user) => {
        if (user.id === id){
            found = true
            return res.json(user);
        }
    })

    if (!found){
        res.status(400).json('user not found')
    }
})

app.listen(5000);