import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SavedArticles from "../components/SavedArticles/savedArticles.js";

function Saved() {
    return (
        <div>
            <SavedArticles />
            <Link to={"/"}>
                <strong>
                    Home
                </strong>
            </Link>
        </div>
    );
}

export default Saved;