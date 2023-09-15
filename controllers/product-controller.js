const ProductRepository = require("../repositories/productRepository");
const UserRepository = require("../repositories/userRepository");
const sendMail = require('../repositories/sendMail');
const ValidateAdmin = require('../middleware/ValidateAdmin');

// Obtiene todos los productos y los devuelve como respuesta en formato JSON
let getProducts = (req, res) => {
  ProductRepository.getAllProducts((products) => {
    res.status(200).json(products);
  });
};


let addProduct = (req, res) => {
  
  ValidateAdmin.njwtAuth(req,res, null)
  ProductRepository.addProduct(req.body, () => {
    res.status(200).json({
      message: "Producto registrado correctamente",
    });
  });
};

let updateAProduct = (req, res) => {
  ValidateAdmin.njwtAuth(req,res, null)
  ProductRepository.updateProduct(req.body, () => {
    res.status(200).json({
      message: "Producto actualizado correctamente",
    });
  });
};


let deleteAProduct = (req, res) => {
  ValidateAdmin.njwtAuth(req,res, null)
  ProductRepository.deleteProduct(req.query.id, () => {
    res.status(200).json({
      message: "Producto eliminado correctamente",
    });
  });
};


let comprarProducto = (req, res) => {
  const usuarioId = req.body.usuarioId;
  const productoId = req.body.productoId; 
  const cantidad = req.body.cantidad;

  UserRepository.comprarProducto(usuarioId, productoId, cantidad, () => {
   
    const asuntoCorreo = 'Compra realizada';
    const contenidoCorreo = 'Gracias por tu compra. Detalles de la compra: ...'; 

    //sendMail.enviarCorreo(usuarioId, asuntoCorreo, contenidoCorreo);

    res.status(200).json({
      message: "Compra realizada con éxito",
    });
  });
};

module.exports = {
  getProducts,
  addProduct,
  updateAProduct,
  deleteAProduct,
  comprarProducto
};
