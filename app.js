import express from 'express';

const app = express();

app.use(express.static('public'));

const PORT = 3001;

app.get('/', (req, res) => {
    //res.send('Welcome to My Ice Cream Shop!');
    res.sendFile(`${import.meta.dirname}/views/home.html`)
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});