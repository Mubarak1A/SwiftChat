const express = required('express');

const app = express();

app.get('/', (req, res) => {
    console.log("It's Working");
})

app.listen(5000);