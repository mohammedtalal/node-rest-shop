const express = require('express');
const router = express.Router();

//List products
router.get('/', (req, res, next) => {
	res.status(200).json({
		message: "Handling GET request to /products"
	});
});

//add product
router.post('/', (req, res, next) => {
	res.status(201).json({
		message: "Handling POST request to /products"
	});
});

//find specific product
router.get('/:productId', (req, res, next) => {
	const id = req.params.productId;
	if (id === 'special') {
		res.status(200).json({
			message: 'you discoered the speical ID!',
			id: id
		});
	} else {
		res.status(200).json({
			message: 'You passed an ID'
		});
	}
});

//update product
router.patch('/:productId', (req, res, next) => {
	res.status(200).json({
		message: 'Updated product!'
	});
});

//delete product
router.delete('/:productId', (req, res, next) => {
	res.status(200).json({
		message: 'Deleted product!'
	});
});

module.exports = router;