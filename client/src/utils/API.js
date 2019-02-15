import axios from "axios";

export default {
    scrapeArticles: function (queryData) {
        return axios.get("/api/scrape", queryData);
    },

    getArticles: function (queryData) {
        return axios.get("/api/articles", queryData);
    },

    getArticle: function (id) {
        return axios.get("/api/articles/" + id);
    },

    saveArticle: function (id, saveData) {
        return axios.post("/api/articles/" + id, saveData);
    },

    deleteArticle: function (id) {
        return axios.delete("/api/articles/" + id);
    }
};