const express = require('express');
const app = express();
const methodOverride = require('method-override')
const scientist = [
    {name: 'Cameron', description: 'coder'},
    {name: 'Pierre', description: 'coder'},
    {name: 'Nick', description: 'coder'},
    {name: 'Elijah', description: 'coder'}
]
app.use(methodOverride('_method'))

app.use(express.urlencoded({extended:false}))
// Index Route
app.get('/scientist', (req, res)=>{
       res.render('index.ejs', {
           scientist: scientist
       })
    })

//New Route
app.get('/scientist/new', (req, res)=>{
    res.render('new.ejs')
})

// Show route
app.get('/scientist/:id/', (req, res) => {
    res.render('show.ejs', {
        scientist: scientist[req.params.id],
        index: req.params.id
    })
})

//Create Route
app.post('/scientist', (req, res)=>{
    scientist.push(req.body)
    res.redirect('/scientist')
})

// Edit Route
app.get('/scientist/:id/edit', (req, res)=> [
    res.render('edit.ejs', {
        scientist: scientist[req.params.id],
        index: req.params.id
    })
])

// Update
app.put('/scientist/:id', (req, res) => {
    scientist[req.params.id] = req.body;
    res.redirect(`/scientist/${req.params.id}`)
})

// Delete route
app.delete('/scientist/:id', (req, res) => {
    scientist.splice(req.params.id, 1);
    res.redirect('/scientist')
}) 

app.listen(3000, ()=> {
  console.log('running')
})