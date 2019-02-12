const Product = require('../models/product_model')
const path = require('path');

exports.getAddProduct = (req,res,next) => {
    res.sendFile(path.join(__dirname,"../","views","add-product.html"));
}

exports.postAddProduct = (req,res,next) => {
    console.log('Inside postAddProduct');
    const product = new Product(req.body.title);
    product.saveProduct(product);
    //res.json(product);
    res.redirect('/shop/products');
}
