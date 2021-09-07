import express from 'express';

const app = express();

let number = 0;
app.get('/', (req, res) => {
    res.send(`${number}`);
});

app.post('/inc', (req, res) => {
    number++;
    res.send(`${number}`);
});

app.post('/dec', (req, res) => {
    number--;
    res.send(`${number}`);
});

app.post('/die', (req, res) => {
    res.send("Server will be closing down")
    process.exit();
})

const port = 3315;
app.listen(port, () => {
    console.log("Listening on http://localhost:" + port)
});