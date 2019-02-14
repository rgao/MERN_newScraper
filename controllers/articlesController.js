const db = require("../models");

module.exports = {
    findAll: function(request, response) {
        db.Article
        .find(request.query)
        .sort({ _id: -1 })
        .then(dbArticle => response.json(dbArticle))
        .catch(error => response.status(422).json(error));
    },

    findOne: function(request, response) {
        db.Article
        .findById(request.params.id)
        .then(dbArticle => response.json(dbArticle))
        .catch(error => response.status(422).json(error));
    },

    create: function(request, response) {
        db.Article
        .create(request.body)
        .then(dbArticle => response.json(dbArticle))
        .catch(error => response.status(422).json(error));
    },

    save: function(request, response) {
        db.Article
        .findOneandUpdate({ _id: request.params.id }, request.body)
        .then(dbArticle => response.json(dbArticle))
        .catch(error => response.status(422).json(error));
    },

    remove: function(request, response) {
        db.Article
        .findById({ _id: request.params.id })
        .then(dbArticle => dbArticle.remove())
        .then(dbArticle => response.json(dbArticle))
        .catch(error => response.status(422).json(error));
    }
};