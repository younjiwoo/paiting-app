import React, { Component } from 'react';
import { Link } from 'react-router'

class BlogHome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: true
    };
  }

//   componentWillMount() {
//     let page = this.props.params.page || 1;

//   }

  render() {
    if (this.state.loaded) {

      return (
        <div>
          <h1></h1>
        </div>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }
  }
}

export default BlogHome;