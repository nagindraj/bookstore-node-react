const express = require('express');
const Axios = require('axios')
const app = express();
const port = 5000;

app.get('/home', (req, res) => {
    const url = 'https://api.myjson.com/bins/udbm5';

    Axios.get(url)
    .then((response) => {
        // handle success
        res.json({books: response.data.books})
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});