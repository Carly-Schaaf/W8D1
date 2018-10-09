import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    let link;
    let visibleLink;

    if (this.props.formType === "Login") {
      link = "signup";
      visibleLink = "Sign Up";
    } else {
      link = "login";
      visibleLink = "Log In";
    }

    return(
      <div>
        <form>
          <h1>
            {this.props.formType}
          </h1>
          <label>Username
            <input onChange={(e) => this.setState({"username": e.target.value})} type="text" value={this.state.username}></input></label>
          <label>Password
            <input onChange={(e) => this.setState({"password": e.target.value})} type="password" value={this.state.password}></input>
          </label>
            <input type="submit" onClick={this.handleSubmit}></input>
        </form>
        <Link to={`/${link}`}>{visibleLink}</Link>
        {this.renderErrors()}
      </div>
    );

  }
}

export default withRouter(SessionForm);
