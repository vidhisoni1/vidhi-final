const express = require('express')
const db = require('./config/database')
const catRoute = require('./routers/category.routes')
const bodyParser = require('body-parser')
const subcatRoute = require('./routers/subcategory.routes')
const extraCatRoute = require('./routers/extra.routes')
const productRoute = require('./routers/product.routes')
const cookieParser = require('cookie-parser')
const userRouter = require('./routers/user.routes')
const port = 8000
const app = express()
app.set('view engine', 'ejs')
// parse body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
   res.locals.user = req.user;
   next();
});

app.get('/', (req, res) => {
   res.render('pages/index')
})
app.use('/category', catRoute)
app.use('/subcategory', subcatRoute)
app.use('/extracategory', extraCatRoute)
app.use('/product', productRoute)
app.use('/user', userRouter)

app.listen(port, (err) => {
   db();
   if (err) {
      console.log('server is not run')
      return false
   }
   console.log('server start in http://localhost:' + port)

})