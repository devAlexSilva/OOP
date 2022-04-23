import express from 'express'
import { engine } from 'express-handlebars'
import path from 'path'
import { fileURLToPath } from 'url'


const __dirname = path.dirname(fileURLToPath(import.meta.url))
const port = 2727;

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', `${path.join(__dirname+'/MDN/balls_canvas/views')}`)

app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname+'/MDN/balls_canvas/home.html'))
    res.render('home');
});

app.listen(port, () => console.log(`running in port ${port}`));