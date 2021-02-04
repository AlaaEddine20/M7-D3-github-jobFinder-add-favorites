import React, { Component } from "react";
import JobCard from "./Jobs";
import { Spinner, Form, Button, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch, ownProps) => ({
  searchJob: async (position, location, isLoanding) => {
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${position}&location=${location}`
      );
      const data = await response.json();
      if (response.ok) {
        dispatch({
          type: "SEARCH_RESULTS",
          payload: data,
          isLoading: true,
        });
        dispatch({
          type: "GOT_RESULTS",
          payload: data,
          isLoading: false,
        });
      }
    } catch (error) {
      console.log(error);
      return dispatch({ type: "SEARCH_RESULTS", payload: [] });
    }
  },
});

export class SearchJobs extends Component {
  state = {
    position: "",
    location: "",
    // isLoading: false,
  };

  onKeywordChange = (e) => {
    this.setState({ position: e.target.value });
  };

  onLocationChange = (e) => {
    this.setState({ location: e.target.value });
  };

  clearFields = () => {
    this.setState({ location: "", position: "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.searchJob(
      this.state.position,
      this.state.location
      // this.setState({ isLoading: true })
    );
  };

  render() {
    const { position, location, isLoading } = this.state;
    return (
      <>
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <Form
            className="container-lg d-flex flex-column"
            onSubmit={this.handleSubmit}
          >
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Job Position</Form.Label>
                  <Form.Control
                    value={position}
                    onChange={this.onKeywordChange}
                    type="text"
                    required
                  />
                  <Form.Text className="text-muted">
                    For example: Web developer..
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control
                value={location}
                onChange={this.onLocationChange}
                type="text"
                required
              />
            </Form.Group>
            <Row className="mx-auto">
              <Col md={6}>
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Col>
              <Col md={6}>
                <Button
                  onClick={this.clearFields}
                  variant="secondary"
                  type="submit"
                >
                  Clear
                </Button>
              </Col>
            </Row>
          </Form>
        )}
        <JobCard />
      </>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchJobs)
);
