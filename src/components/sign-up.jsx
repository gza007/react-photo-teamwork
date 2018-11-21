import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        email: '',
        password: '',
      },
    };
  }

  handleFieldChange = (event) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
    console.log(event.target.value);
  };

  render() {
    return (
      <React.Fragment>
        <div className="sign-up">
          <h1>Sign Up</h1>
          <form>
            <div className="sign-up_input">
              <label
                htmlFor="email"
              >
                email:
              </label>
              <input
                name="email"
                type="email"
                value={this.state.fields.email}
                onChange={this.handleFieldChange}
              />
            </div>
            <div className="sign-up_input">
              <label
                htmlFor="password"
              >
                password:
              </label>
              <input
                name="password"
                type="password"
                value={this.state.fields.password}
                onChange={this.handleFieldChange}
              />
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
