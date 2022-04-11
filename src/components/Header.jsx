import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { initialValue } from '../actions';

class Header extends React.Component {
  componentDidMount() {
    const { initial } = this.props;
    initial();
  }

  render() {
    const { email, total } = this.props;
    return (
      <div>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">{total > 0 ? total : 0}</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.total,
  expense: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  initial: (expense) => dispatch(initialValue(expense)),
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
