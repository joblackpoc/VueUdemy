const express = require('express');
const server = express();
const PORT = 3000;

server.get('*', (req, res)=>{
    res.json({message: 'Backend Server is started'});
});

server.listen(PORT, ()=> console.log(`Server is started Port ${PORT}.`))