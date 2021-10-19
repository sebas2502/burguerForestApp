const express = require('express');
const router = express.Router();
const ventasController = require('../controllers/ventas');



router.get('/',ventasController.showSales);
router.post('/',ventasController.insertSale);
router.get('/eliminar/:id',ventasController.eliminarVenta);
router.get('/editarVenta/:id',ventasController.editarVentaForm);
router.post('/editarVentaConfirm/:id',ventasController.editarVenta);

module.exports = router;