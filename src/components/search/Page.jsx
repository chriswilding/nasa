import React, { Component } from "react";

import APIClient from "../../APIClient";
import Search from "./Search";
import Results from "./results/Results";

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };

    this.search = this.search.bind(this);
  }

  search(params) {
    APIClient.search(params).then(results => {
      this.setState({ results });
    });
  }

  render() {
    return (
      <div className="search-page">
        <h1 className="search-page__title">Search</h1>
        <Search search={this.search} />
        {this.state.results.length > 0 && <Results results={this.state.results} />}
      </div>
    );
  }
}

export default Page;
