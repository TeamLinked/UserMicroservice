const models = require('../models');

// GET../users/
exports.gets = function(req, res, next) {
	return models.User.findAll({
		include: [{model: models.Tag, as: 'tags'}]
		//include: [{ all: true }]
	}).then(users => {
		res.json(users);
	}).catch(function(err) {
		res.status(500).send('Something broke!');
	});
};

// GET../user/:user_id
exports.get = function(req, res, next) {
	return models.User.findOne({
		where: {
			id: req.params.user_id
		}
	}).then(user => {
		res.json({
			"user": user
		});
	}).catch(function(err) {
		res.status(500).send('Something broke!');
	});
};

// DELETE../user/:user_id
exports.delete = function(req, res, next) {
	return models.User.destroy({
		where: {
			id: req.params.user_id
		}
	}).then(result => {
		console.log(result);
		res.status(200).json();
	}).catch(function(err) {
		res.status(500).send('Something broke!');
	});
};

// POST../users/
exports.post = function(req, res, next) {
	return models.User.create({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		password: req.body.password,
		createdAt: new Date(),
		updatedAt: new Date(),
		email: req.body.email,
		nationality: req.body.nationality,
		identification: req.body.identification,
		birthDate: req.body.birthDate,
		personalProf: req.body.personalProf,
		professionalProf: req.body.professionalProf
	}).then(user => {
		res.status(201).json({});
	}).catch(function(err) {
		res.status(500).send('Something broke!');
	});
};

// PUT../user/:user_id
exports.put = function(req, res, next) {
	return models.User.update({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		password: req.body.password,
		updatedAt: new Date(),
		email: req.body.email,
		nationality: req.body.nationality,
		identification: req.body.identification,
		birthDate: req.body.birthDate,
		personalProf: req.body.personalProf,
		professionalProf: req.body.professionalProf,
	},{
	    returning: true, where: {id: req.params.user_id}
	}).then(user => {
		res.status(201).json(user);
	}).catch(function(err) {
		res.status(500).send('Something broke!');
	});
};

//POST../user/tags/:used_id	
exports.add_tag = function(req, res, next){
	return models.TagUsers.create({
		createdAt: new Date(),
		updatedAt: new Date(),
		UserId: req.params.user_id,
		TagId: req.body.tag
	}).then(user => {
		res.status(201).json(user);
	}).catch(function(err) {
		res.status(500).send('Something broke!');
	});
};

exports.delete_tag = function(req, res, next){
	return models.TagUsers.destroy({
		where: {
			UserId: req.params.user_id,
			TagId: req.body.tag
		}
	}).then(result => {
		console.log(result);
		res.status(200).json();
	}).catch(function(err) {
		res.status(500).send('Something broke!');
	});
};