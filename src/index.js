import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'


const __dirname = path.dirname(fileURLToPath(import.meta.url))
const port = 2727;

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'))
})

app.get('/balls', (req, res) => {
    res.sendFile(path.join(__dirname + '/projects_MDN/balls_canvas/home.html'))
});

app.listen(port, () => console.log(`running in http://localhost:${port}`));