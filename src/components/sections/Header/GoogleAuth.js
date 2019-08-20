import React, { PureComponent } from "react";

export class GoogleAuth extends PureComponent {
  state = {
    isSignedIn: null
  };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "744161652450-u23gbgidk50jktnj4ekpfkdd0tcqu36l.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({
      isSignedIn: this.auth.isSignedIn.get()
    });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className='ui red google button'>
          <i className='google icon' />
          Sign out
        </button>
      );
    } else {
      return (
        <button className='ui red google button'>
          <i className='google icon' />
          Sign In with google
        </button>
      );
    }
  }

  render() {
    return <>{this.renderAuthButton()}</>;
  }
}

export default GoogleAuth;
