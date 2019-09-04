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

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
  }

  render() {
    return (
      <Modal
        title='Delete Stream'
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamDelete);
