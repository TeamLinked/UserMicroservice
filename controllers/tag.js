const models = require('../models');

// GET../tags/
exports.gets = function(req, res, next) {
	return models.Tag.findAll().then(tags => {
		res.json(tags);
	}).catch(function(err) {
		res.status(500).send('Something broke!');
	});
};

// GET../tag/:tag_id
exports.get = function(req, res, next) {
	return models.Tag.findOne({
		where: {
			id: req.params.tag_id
		}
	}).then(tag => {
		res.json({
			"tag": tag
		});
	}).catch(function(err) {
		res.status(500).send('Something broke!');
	});
};

// DELETE../tag/:tag_id
exports.delete = function(req, res, next) {
	return models.Tag.destroy({
		where: {
			id: req.params.tag_id
		}
	}).then(result => {
		console.log(result);
		res.status(200).json();
	}).catch(function(err) {
		res.status(500).send('Something broke!');
	});
};

// POST../tags/
exports.post = function(req, res, next) {
	return models.Tag.create({
		name: req.body.name,
		createdAt: new Date(),
		updatedAt: new Date()
	}).then(tag => {
		res.status(201).json(tag);
	}).catch(function(err) {
		res.status(500).send('Something broke!');
	});
};

// PUT../tag/:tag_id
exports.put = function(req, res, next) {
	return models.Tag.update({
		name: req.body.name,
		updatedAt: new Date()
	},{
	    returning: true, where: {id: req.params.tag_id}
	}).then(tag => {
		res.status(201).json(tag);
	}).catch(function(err) {
		res.status(500).send('Something broke!');
	});
};