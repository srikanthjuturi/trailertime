const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const pool = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'user'
});

const poolmovie = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'movie_db'
});



app.get('/', (req, res) => {
  res.send('Hello darling');
});

app.post('/register', (req, res) => {
  const { email, passwords } = req.body;
 
  pool.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, passwords], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error inserting data');
    } else {
      res.status(200).send('Sent success');
    }
  });
});


app.post('/login',(req,res)=>{
  const {email,passwords}=req.body;
  pool.query(`select * from users where email='${email}' and password='${passwords}'`,(error,result)=>{
  if(error){
    console.log(error)
    res.status(500).send('server error')
  }else if(result.length===0){
    res.status(404).send("user is not registered")
  }
  else{
    res.status(200).send('user is valid')
  }
 })
})

app.get('/moviedata', (req,res)=>{
  poolmovie.query('select * from telugu_movies' ,(error,result)=>{
    if(error){
      res.status(500).send('server not running')
    }
    else{
      res.status(200).json(result)
    
    }
  } )
})
app.get('/moviedata/:id', (req,res)=>{
 
  poolmovie.query(`select * from telugu_movies where id=${req.params.id}`,(error,result)=>{
    if(error){
      res.status(500).send('server not running')
    }
    else{
      res.status(200).json(result)
  }
  })
})

app.post('/sentdata',(req,res)=>{
  const {Title,Rating,Year,Genre,Duration,Story,Certificate,Votes,Images,Videos}=req.body
  poolmovie.query('insert into telugu_movies(Title,Rating,Year,Genre,Duration,Story,Certificate,Votes,Images,Videos) values(?,?,?,?,?,?,?,?,?,?)',[Title,Rating,Year,Genre,Duration,Story,Certificate,Votes,Images,Videos], (error,result)=>{
    if(error){
      res.status(500).send('server not running')
      console.log(error)
    }else{
      res.status(200).send('trailer added successfully')
    } 
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
