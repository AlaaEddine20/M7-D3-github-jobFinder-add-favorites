import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => state;

export class Favorites extends Component {
  render() {
    console.log("FAVORITES: ", this.props.favorites.jobs);
    return (
      <div>
        <h1>Favorites</h1>
        {/* {this.props.favorites.jobs.map((job, idx) => (
          <ul key={idx}>
            <li>{job.title}</li>
          </ul>
        ))} */}
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Favorites));
