const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../models");

module.exports = {
    scrape: function (request, response) {
        var topic = request.query.topic;
        var start = request.query.startDate;
        var end = request.query.endDate;

        var queryURL = "https://www.nytimes.com/search?endDate="
            + end + "&query=" + topic + "&sort=best&startDate=" + start;

        axios.get(queryURL).then(data => {
            var $ = cheerio.load(data.data);
            var articleArray = [];

            $(".css-138we14").each((i, element) => {
                var article = {};

                article.title = $(element).children("a").children("h4").text();
                article.date = $(element).children("time").attr("aria-label");
                article.url = "https://www.nytimes.com/" + $(element).children("a").attr("href");

                db.Article.create(article)
                    .then(dbArticle => {
                        console.log(dbArticle);
                    }).catch(error => {
                        console.log(error)
                    });
                    
                if (articleArray.length <= 5) {
                    articleArray.push(article);
                }
            });

            console.log(articleArray);
            response.json(articleArray);
        });
    }
}