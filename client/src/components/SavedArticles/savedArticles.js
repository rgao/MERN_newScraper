import React, { Component } from "react";
import "./savedArticles.css";
import API from "../../utils/API";

class SavedArticles extends Component {
    state = {
        articles: []
    };

    componentDidMount() {
        this.loadArticles();
    };

    loadArticles = () => {
        API.getArticles({ saved: true }).then(response => {
            this.setState({ articles: response.data })
                .catch(error => console.log(error));
        });
    };

    handleDelete(articleId) {
        API.deleteArticle(articleId);
    };

    handleInputChange = (event, articleId) => {
        event.preventDefault();

        this.handleNote(articleId, event.target.value);
    };

    handleNote(articleId, message) {
        API.saveArticle(articleId, { message: message }).then(response => {
            this.setState({ articles: response.data })
                .catch(error => console.log(error));
        });
    }

    render() {
        return (
            <div>
                {this.state.articles.map(article => (
                    <div>
                        <div className="row">
                            <div className="col-3">{article.date}</div>

                            <a className="col" href={article.url}>
                                <header>{article.title}</header>
                            </a>

                            <div className="col-3">
                                <button className="btn btn-danger" onClick={this.handleDelete(article._id)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <textarea onChange={this.handleInputChange(article._id)} className="form-control" rows="2" />
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default SavedArticles;