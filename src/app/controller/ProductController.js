const Product = require('../model/ProductModel');

class ProductController {

    async store(req, res) {
        const data = await Product.create(req.body);
        return res.json(data);
    }

    async all(req, res) {
        const data = await Product.find({});
        return res.json(data);
    }

    async byId(req, res) {
        var data = await Product.findOne({
            productId: req.params.id
        });
        return res.json(data);
    }

    async update(req, res) {
        const data =  await Product.findOneAndUpdate({
            productId: req.params.id
        }, req.body)
        return res.json(data);
    }

    async delete(req, res) {
        const data = await Product.remove(req.body);
        return res.json(data);
    }
}

module.exports = new ProductController();