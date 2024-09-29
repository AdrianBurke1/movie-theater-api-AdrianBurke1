const express = require('express');
const app = express();
const port = 3000;
const seed = require('./db/seed')

app.use(express.json())

const show = require('./routes/shows')
const user = require('./routes/users')

app.use('/users', user)
app.show('/shows', show)

const startServer = async () => {
    await seed(); 
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  };
  startServer();