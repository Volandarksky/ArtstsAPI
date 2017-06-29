var express = require('express')
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID
var db = require('./db')
var artistsController = require('./controllers/artists')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function (req, res) {
  res.send('Hello API')
})

app.get('/artists',
// function (req, res) {
//   db.get().collection('artists').find().toArray(function (err, docs) {
//     if (err) {
//       console.log(err)
//       return res.sendStatus(500)
//     }
//     res.send(docs)
//   })
// }
artistsController.all)

app.get('/artists/:id',
// function (req, res) {
//   db.get().collection('artists').findOne({_id: ObjectID(req.params.id)},
//   function (err, doc) {
//     if (err) {
//       console.log(err)
//       return res.sendStatus(500)
//     }
//     res.send(doc)
//   })
// }
artistsController.findById)

app.post('/artists',
// function (req, res) {
//   var artist = {
//     // id: Date.now(),
//     name: req.body.name
//   }
//
//   db.get().collection('artists').insert(artist, function (err, result) {
//     if (err) {
//       console.log(err)
//       return res.send(500)
//     }
//     res.send(artist)
//   })
// }
artistsController.create)

app.put('/artists/:id',
// function (req, res) {
//   db.get().collection('artists').updateOne({_id: ObjectID(req.params.id)},
//   {name: req.body.name},
//   function (err, doc) {
//     if (err) {
//       console.log(err)
//       return res.sendStatus(500)
//     }
//     res.sendStatus(200)
//   })
//   // var artist = artists.find(function (artist) {
//   //   return artist.id === Number(req.params.id)
//   // })
//   // artist.name = req.body.name
//   // res.send(artist)
// }
artistsController.update)

app.delete('/artists/:id',
// function (req, res) {
//   db.get().collection('artists').deleteOne({_id: ObjectID(req.params.id)},
//   function (err, result) {
//     if (err) {
//       console.log(err)
//       return res.sendStatus(500)
//     }
//     res.sendStatus(200)
//   })
//   // artists = artists.filter(function (artist) {
//   //   return artist.id !== Number(req.params.id)
//   // })
//   // res.sendStatus(200) //OK
// }
artistsController.delete)

db.connect('mongodb://localhost:27017/myapi', function (err) {
  if (err) {
    return console.log(err)
  }
  app.listen(3000, function () {
    console.log('app started on port 3000')
  })
})
