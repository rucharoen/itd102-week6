require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.APP_PORT || 5000;

// app.get('/', (req, res) => { 
//     res.send('Home');
// });

// app.get('/about', (req, res) => { 
//     res.send('About');
// });

require("./app/routes/user.controller")(app);

app.listen(PORT, () => console.log('Server is running ' + PORT));