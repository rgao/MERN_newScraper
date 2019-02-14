import React, { Component } from "react";
import "./results.css";
import API from "../../utils/API";

class Results extends Component {
    state = {
        articles: []
    }

    componentDidMount() {
        this.loadArticles();
    };

    loadArticles = () => {
        API.getArticles().then(response => {
            this.setState({ articles: response.data })
        }).catch(error => console.log(error));
    };

    handleSave(articleId) {
        API.saveArticle(articleId, { saved: true });
    };

    render() {
        return (
            <div>
                {this.state.articles.map(article => (
                    <div className="row">
                        <div className="col-3">{article.date}</div>

                        <a className="col" href={article.url}>
                            <header>{article.title}</header>
                        </a>

                        <div className="col-3">
                            <button className="btn btn-primary" onClick={this.handleSave(article._id)} />
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Results;