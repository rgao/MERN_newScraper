const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.route("/")
    .get(articlesController.findAll)
    .post(articlesController.create);

router.route("/:id")
    .get(articlesController.findOne)
    .put(articlesController.save)
    .delete(articlesController.remove);

module.exports = router;