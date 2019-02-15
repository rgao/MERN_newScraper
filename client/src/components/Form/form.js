import React, { Component } from "react";
import API from "../../utils/API";

class Form extends Component {
    state = {
        topic: "",
        startDate: "",
        endDate: ""
    }

    // handleInputValidation() {

    // };

    // componentDidMount() {
    //     fetch("api/scrape")
    // }

    handleInputChange = event => {
        const name = event.target.name;

        this.setState({
            [name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        // this.setState({
        //     startDate: this.state.startDate.replace("-", ""),
        //     endDate: this.state.endDate.replace("-", "")
        // });

        API.scrapeArticles(this.state).then(data => console.log(data));
    }

    render() {
        return (
            <form>
                <header>Search</header>
                <div className="form-group">
                    <label>Topic</label>
                    <input name="topic" value={this.state.topic} className="form-control" onChange={this.handleInputChange} type="text" placeholder="Collusion" />
                </div>

                <div className="form-group">
                    <label>Start at:</label>
                    <input name="startDate" value={this.state.startDate} className="form-control" onChange={this.handleInputChange} type="date" placeholder="11/04/2016" />
                </div>

                <div className="form-group">
                    <label>End at:</label>
                    <input name="endDate" value={this.state.endDate} className="form-control" onChange={this.handleInputChange} type="date" placeholder="02/08/2019" />
                </div>

                <button className="btn btn-info" onClick={(event) => this.handleSubmit(event)}>Search!</button>
                {/* <input type="submit" value="Submit" /> */}
            </form>
        );
    }
}

export default Form;