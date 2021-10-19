const conexion = require('../db/conexion');

const ventas = {

   showSales : async(req,res)=>{
       await conexion.query('SELECT * FROM ventas',(err,sales)=>{
            if(err){
                console.log(err);
            }else{
                res.render('ventas',{ventas:sales});
            }
        });
   },

   insertSale : async(req,res)=>{

   

    await conexion.query('SELECT * FROM productos WHERE descripcion = ?',[req.body.seleccion],(err,result)=>{
        if(err){
            console.log(err);
        }else{
          
            let venta = {
                descripcion : req.body.seleccion,
                fecha : req.body.fecha,
                cantidad : req.body.cantidad,
                monto : 0 
                
            }
            venta.monto = result[0].precio * venta.cantidad

            conexion.query('INSERT INTO ventas set ?',[venta],(err,result)=>{
                if(err){
                    console.log(err);
                }else{
                    res.redirect('/ventas');
                }
            });
           
           
           

        }


    });


     

    // switch(venta.descripcion){
    //     case 'Hamburguesa Comun' : venta.monto = venta.cantidad * 130
    //     break;

    //     case 'Hamburguesa Especial' : venta.monto = venta.cantidad * 150
    //     break;

    //     case 'Hamburguesa Super' : venta.monto = venta.cantidad * 200
    //     break;

    //     case 'Hamburguesa Con Chedar' : venta.monto = venta.cantidad * 250
    //     break;

    //     case 'Com x 3' : venta.monto = venta.cantidad * 300
    //     break;

    //     case 'Esp x 3' : venta.monto = venta.cantidad * 400
    //     break;

    //     case 'Sup x 3' : venta.monto = venta.cantidad * 550
    //     break;

    //     case 'Sandwich De Milanesa' : venta.monto = venta.cantidad * 200
    //     break;

    //     case 'Carlito' : venta.monto = venta.cantidad * 150
    //     break;

    //     case 'Papas Fritas' : venta.monto = venta.cantidad * 200
    //     break;
    // }



 
     

    
      
   


       
       

      
      
   },

   eliminarVenta : async(req,res)=>{
       let id = req.params.id;
      
        await conexion.query('DELETE  FROM ventas WHERE id = ?',[id],(err,result)=>{
            if(err){
                console.log('Ha ocurrido un error al intentar borrar el registro...');
               
            }else{
                res.redirect('/ventas');
            }
        });
   },


   editarVentaForm : async(req,res)=>{


        const idVenta = req.params.id
        await conexion.query('SELECT * FROM ventas WHERE id = ?',[idVenta],(err,row)=>{
            if(err){
                console.log(err);
            }else{

                res.render('editarVenta',{venta : row[0]});
            }
        });

        
   },
   
   editarVenta : async(req,res)=>{
       const {id} = req.params;
       
       
      

       
   }
   
   



   

}

module.exports = ventas;