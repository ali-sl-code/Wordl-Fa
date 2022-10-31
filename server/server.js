const express = require('express')
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose()
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

const db = new sqlite3.Database('./server/wordle-fa.db', err => {
  if (err) return console.log(err.message)
  console.log('Database connected')
})

const query = 'SELECT * FROM words ORDER BY RANDOM() LIMIT 1;'

app.get('/word', (_, res) => {
  db.serialize(() => {
    db.all(query, (err, val) => {
      if (err) return res.json({ status: 'ERROR', message: err.message })

      if (val) {
        let word = val[0]
        return res.json({ status: 'OK', ...word })
      }

      console.log('Database is empty or query is wrong')
    })
  })
})

app.listen(3001, () => console.log('Server is running'))
