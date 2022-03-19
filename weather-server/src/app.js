const path = require('path')
const express = require('express');
const hbs = require('hbs')
const app = express();

// define paths for express config
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPaths = path.join(__dirname, '../templates/partials')

//set up handelers engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPaths);
// app.set('views', partialPaths);

// set up static directory to serve
   app.use(express.static(publicDirectory));
 
app.get('', (req, res)=>{
    res.render('index', {
        title: "Weather",
        name:"dipankar"
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
         src: "https://wallpaperaccess.com/thumb/7673262.jpg",
        title:"About"
    })
})
app.get('/help', (req,res)=> {
    res.render('help', {
        title: "Help",
        name:"dipankar"
    })
})

// setting up the error msg if user enter something wrong url
app.get('/help/*', (req, res) => {
    res.render('404', {
        errorMessage: "no article found",
        title:"error"
       
    })
})
app.get('/about/*', (req, res) => {
    res.render('404', {
        errorMessage: "no article found",
        title:"error"
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: "page not found",
        title:404
    })
})

app.listen(3000, () => {
    console.log(`server is running on port ${3000}`)
})