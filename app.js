import express from 'express';

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}));

const orders = [];

const PORT = 3001;

app.get('/', (req, res) => {
    //res.send('Welcome to My Ice Cream Shop!');
    //res.sendFile(`${import.meta.dirname}/views/home.html`)
    res.render('home');
});

app.get('/confirm', (req, res) => {
    res.render('confirmation');
});

app.get('/admin', (req, res) => {
    
    res.render('admin', { orders });
});

app.post('/submit-order', (req, res) => {
    const order = {
    name: req.body.name,
    email: req.body.email,
    flavor: req.body.flavor,
    method: req.body.method,
    toppings: req.body.toppings,
    comment: req.body.comment
    };

    // Add order to array
    orders.push(order);
    console.log(orders);

    //res.sendFile(`${import.meta.dirname}/views/confirmation.html`)
    res.render('confirmation', { order });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});