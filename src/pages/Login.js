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
    const disabled = ((password.length >= six) && (/\S+@\S+\.\S+/.test(email)));
    // console.log(disabled);
    if (disabled) {
      return false;
    }
    return true;
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    const { myUserDispatch } = this.props;
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
            onClick={ () => myUserDispatch(email) }
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

// import React from 'react';
// // import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// // import { userAction } from '../actions';

// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//     };
//   }

// validation = () => {
//   const { email, password } = this.state;
//   const regex = /\S+@\S+\.\S+/; // regex https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
//   const sixValidation = 6;
//   if ((password.length >= sixValidation) && (regex.test(email))) {
//     return false;
//   }
//   return true;
// }

// handleChange = (event) => {
//   const { name, value } = event.target;
//   this.setState({ [name]: value });
// // this.validation();
// }

// render() {
//   const { email, password } = this.state;
//   const { user } = this.props;
//   return (
//     <div>
//       <h1>Login</h1>
//       <input
//         type="text"
//         onChange={ this.handleChange }
//         placeholder="E-mail"
//         data-testid="email-input"
//         value={ email }
//         name="email"
//       />
//       <input
//         type="password"
//         onChange={ this.handleChange }
//         placeholder="Senha"
//         data-testid="password-input"
//         value={ password }
//         name="password"
//       />
//       <Link to="/carteira">
//         <button
//           type="submit"
//           disabled={ this.validation() }
//           onClick={ () => user({ email }) }
//         >
//           Entrar

//         </button>
//       </Link>
//     </div>);
// }
// }

// // const mapDispatchToProps = (dispatch) => ({
// //   user: (elem) => dispatch(emailUser(elem)),
// // });

// Login.propTypes = {
//   user: PropTypes.object,
// }.isRequired;

// export default Login;
// // connect(null, mapDispatchToProps)(Login);
