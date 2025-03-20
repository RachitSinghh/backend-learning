import express from 'express';

const app = express(); 
const PORT = 3000; 

app.get('/', (req,res) =>{
  res.send("Hello world! by my own ")
})

app.post('/', (req, res) =>{
  res.send("Got a POST Request")
})

app.put('/user', (req,res) =>{
  res.send('Got a put request at /user')
})

app.get("/api/jokes", (req,res) => {
  const jokes = [
    {
      id: 1,
      title: "Programming",
      content:
        "Why do programmers prefer dark mode? Because light attracts bugs!",
    },
    {
      id: 2,
      title: "JavaScript",
      content:
        "Why did the JavaScript developer wear glasses? Because he couldn't C#!",
    },
    {
      id: 3,
      title: "Database",
      content:
        "Why did the database administrator leave his wife? She had too many relationships!",
    },
    {
      id: 4,
      title: "HTML",
      content: "Why don't web developers like nature? Too many nested trees!",
    },
    {
      id: 5,
      title: "Git",
      content: "Why did the git commit feel lonely? It had no parents!",
    },
  ]

  res.send(jokes)
})


app.listen(PORT, () =>{
  console.log(`Server is running on ${PORT}`);
  
})