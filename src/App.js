import React, { PureComponent } from "react";
import {
  StreamCreate,
  StreamDelete,
  StreamEdit,
  StreamList,
  StreamShow
} from "containers";
import { Route } from "react-router-dom";

class App extends PureComponent {
  render() {
    return (
      <>
        <Route path='/' exact component={StreamList} />
        <Route path='/stream/new' exact component={StreamCreate} />
        <Route path='/stream/edit' exact component={StreamEdit} />
        <Route path='/stream/delete' exact component={StreamDelete} />
        <Route path='/stream/show' exact component={StreamShow} />
      </>
    );
  }
}

export default App;
