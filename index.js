const express  = require('express')
const db = require('./config/database')
const catRoute = require('./routers/category.routes')
const bodyParser = require('body-parser')
const subcatRoute = require('./routers/subcategory.router')
const port = 8000
const app = express()
app.set('view engine', 'ejs')
// parse body
app.use(bodyParser.urlencoded({extended : false}))
app.use(express.json());
app.get('/',(req,res)=>{
 res.render('pages/index')
})

app.use('/category', catRoute)
app.use('/subcategory', subcatRoute )
app.get('/addcat',(req,res)=>{
   res.render('pages/addCat')
  })
app.listen (port , (err)=>{
    db();
 if ( err ){
    console.log('server is not run')
    return false 
 }
 console.log('server start in http://localhost:'+port)

})