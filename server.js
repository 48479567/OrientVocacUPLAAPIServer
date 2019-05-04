const express = require('express'),
  mongoose = require('mongoose'),
  path = require('path'),
  bodyParser = require('body-parser'),

  app = express(),
  c = console.log,
  ce = console.error
 

// setters
app
  .set('port', process.env.PORT || 3000)
  .set('connecturi', 'mongodb://localhost/ov_upla')
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')

// middleware

app
  .use((req, res, next) => { 
    res.header('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    
    next()
  })
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, 'public')))

// https methods and connections

  .get('/', (req, res) => {
    res.render('index')
  })

// all routes

app.use(require('./routes'))

mongoose.Promise = global.Promise
mongoose.set('useFindAndModify', false)

// Marca para usar el nuevo analizador de cadenas de URL en lugar del actual (en desuso)
mongoose.connect(app.get('connecturi'), { useCreateIndex: true, useNewUrlParser: true})
  .then(db => c(`Conectado a la Base de Datos version: ${db.version}` ))
  .catch(err => ce(err))

app.listen(app.get('port'), () => c(`API ejecutandose en el puerto ${app.get('port')}`))


//const
//set
//middlewares
//endpoints
//connect database, manejadores de mongoose en este caso, al final el connect
//listen