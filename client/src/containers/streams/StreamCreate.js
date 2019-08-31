import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "../../components/commons/StreamForm";

export class StreamCreate extends PureComponent {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  {
    createStream
  }
)(StreamCreate);
