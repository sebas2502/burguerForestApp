const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const indexRouter = require('./routes/index');
const ventasRouter = require('./routes/sales');




app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:false}));
app.use(express.json());




app.use('/',indexRouter);
app.use('/ventas',ventasRouter);





app.listen(port,(err,conection)=>{
    if(err){
        console.log('Error al intentar conectarse al servidor...');
    }else{
        console.log(`Servidor listo en puerto ${port}...`);
    }
});

