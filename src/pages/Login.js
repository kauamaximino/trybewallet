import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { emailUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  checkedForm = () => {
    const { email, password } = this.state;
    const six = 6;
    if ((password.length >= six) && (/\S+@\S+\.\S+/.test(email))) {
      return false;
    }
    return true;
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>

        <input
          type="text"
          data-testid="email-input"
          name="email"
          placeholder="insira seu e-mail"
          value={ email }
          onChange={ this.handleChange }
        />

        <input
          type="password"
          data-testid="password-input"
          name="password"
          placeholder="insira sua senha"
          value={ password }
          onChange={ this.handleChange }
        />

        <Link to="/carteira">
          <button
            type="submit"
            disabled={ this.checkedForm() }
            onClick={ () => this.myUserDispatch(email) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  myUserDispatch: (state) => dispatch(emailUser(state)),
});

Login.propTypes = {
  history: propTypes.props,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
