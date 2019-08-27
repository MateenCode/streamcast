import React, { PureComponent } from "react";

import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

export class StreamList extends PureComponent {
  componentDidMount() {
    this.props.fetchStreams();
  }

  render() {
    return <div>steams</div>;
  }
}

export default connect(
  null,
  { fetchStreams }
)(StreamList);
