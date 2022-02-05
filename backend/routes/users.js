const router = require('express').Router();
let User = require('../models/user.model');

// first end-point that handles incoming HTTP GET requests on /users URL path
router.route('/').get((req, res) => {
	// get all the list of users from the MONGO Db datbase (returns a promise)
	User.find()
		.then((users) => res.json(users))
		.catch((err) => res.status(400).json('Error: ' + err));
});

// handles incoming HTTP POST request.
router.route('/add').post((req, res) => {
	const username = req.body.username;

	const newUser = new User({ username });

	newUser
		.save()
		.then(() => res.json('User added!'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
