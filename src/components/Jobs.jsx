import React, { Component } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

class Jobs extends Component {
  render() {
    return (
      <Container>
        <div className="row d-flex justify-content-center mt-4">
          {this.props.jobs.searchResults.map((job) => (
            <div className="col-sm-10 col-md-6 col-lg-5 mx-2">
              <div className="card mb-3" style={{ width: "400px" }}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={job.company_logo}
                      width="100%"
                      height="250"
                      alt="company-logo"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{job.title}</h5>
                      <p className="card-text">{job.company}</p>
                      <p className="card-text">
                        <Link to={"/details/" + job.id}>
                          <Button variant="secondary">More details</Button>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Jobs);
