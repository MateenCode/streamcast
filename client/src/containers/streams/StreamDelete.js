import React from "react";
import { Modal } from "../../components/commons";
import { history } from "../../helpers";

function StreamDelete() {
  const actions = (
    <>
      <button className='ui button negative'>Delete</button>
      <button className='ui button'>Cancel</button>
    </>
  );

  return (
    <>
      StreamDelete
      <Modal
        title='Delete Stream'
        content='Are you sure you want to delete this stream?'
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </>
  );
}

export default StreamDelete;
