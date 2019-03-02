import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from "../utils/API";
import Form from "../components/Form/form.js";
import Results from "../components/Results/results.js";

function Home() {
  return (
    <div>
      <Form />
      {/* <Results /> */}
      <Link to={"/Saved"}>
        <strong>
          Saved Articles
          </strong>
      </Link>
    </div>
  );
}

export default Home;
