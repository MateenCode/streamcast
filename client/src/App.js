import React, { PureComponent } from "react";
import { Route } from "react-router-dom";
import {
  StreamCreate,
  StreamDelete,
  StreamEdit,
  StreamList,
  StreamShow
} from "containers";
import { Header } from "components/sections";

class App extends PureComponent {
  render() {
    return (
      <div className='ui container'>
        <Header />
        <Route path='/' exact component={StreamList} />
        <Route path='/stream/new' exact component={StreamCreate} />
        <Route path='/stream/edit' exact component={StreamEdit} />
        <Route path='/stream/delete' exact component={StreamDelete} />
        <Route path='/stream/show' exact component={StreamShow} />
      </div>
    );
  }
}

export default App;