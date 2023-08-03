const express = require('express');
const app = express();

app.get('/', ( req, res ) => {
    res.send('노드서버화면')
})

app.listen(8080, ()=>{
    console.log('localhost:8080 서버구동 완료')
})