import React, { Component } from "react";
import { connect } from "react-redux";

import { history } from "../../helpers";
import { fetchStream } from "../../actions";
import { Modal } from "../../components/commons";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <>
        <button className='ui button negative'>Delete</button>
        <button className='ui button '>Cancel</button>
      </>
    );
  }

  render() {
    return (
      <>
        StreamDelete
        <Modal
          title='Delete Stream'
          content='Are you sure you want to delete this stream?'
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </>
    );
  }
}

export default connect(
  null,
  { fetchStream }
)(StreamDelete);
