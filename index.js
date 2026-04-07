import express from 'express';
import path from 'path';
import menuData from './data/menu.json' with { type: 'json' };

const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(import.meta.dirname, 'views'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/menu', (req, res) => {
    res.render('menu.ejs', { menu: menuData });
})

app.get('/menu/:detail', (req, res) => {
    res.render('detail.ejs', { menu: menuData });
})

app.get('/order', (req, res) => {
    res.render('order.ejs');
})

app.get('/random', (req, res) => {
    const menuLength = Object.keys(menuData).length;
    const randCategory = Math.floor(Math.random() * menuLength);
    const category = Object.values(menuData);
    const randItems = [...category[randCategory]];
    res.render('random.ejs', { menuLength: menuLength, randCategory: randCategory, 
                                category: category, randItems: randItems });
})

app.listen(PORT, (req, res) => {
    console.log(`LISTENING ON PORT ${PORT}`);
})
