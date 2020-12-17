const express = require("express")
const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/test', (req, res) => {
    const arr = [
        { name: '海静', age: 38 },
        { name: '呸华', age: 8 },
        { name: 'zs', age: 27 }
    ]
    res.render('test', { arr })
})

app.listen(5000, err => {
    if (!err) return console.log("http://localhost:5000");
})