const fs = require('fs');
const path = require('path');

const file = path.join(__dirname,'../','data','products.json');

const readFromFile = (value) => {
    fs.readFile(file, (err, data) => {
        if(err)
            value([]);
        else
            value(JSON.parse(data));    
    })
}

module.exports = class Product{
    constructor(title){
        this.title = title;
    }
    saveProduct(){
        readFromFile(products => {
            products.push(this);
            fs.writeFile(file, JSON.stringify(products), err => {
              console.log(err);
            });
        });
    }
}