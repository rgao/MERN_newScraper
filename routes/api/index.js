const router = require("express").Router();
const articleRoutes = require("./articles");
const scrapeRoute = require("./scrape");

router.use("/articles", articleRoutes);
router.use("/scrape", scrapeRoute);

module.exports = router;