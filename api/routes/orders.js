const express = require('express');
const router = express.Router();

//Handle incoming GET requests to /oreder
router.get('/', (req, res, next) => {
	res.status(200).json({
		message: "order were fetched"
	});
});

//Handle POST requests to /oreder
router.post('/', (req, res, next) => {
	res.status(201).json({
		message: "order was created"
	});
});

//Handle incoming requests to /oreder/{id}
router.get('/:orderId', (req, res, next) => {
	const id = req.params.orderId;
	res.status(200).json({
		message: "order Details",
		orderId: id
	});
});

//Handle incoming Delete requests to /oreder/{id}
router.delete('/:orderId', (req, res, next) => {
	res.status(200).json({
		message: "delete order",
	});
});

module.exports = router;