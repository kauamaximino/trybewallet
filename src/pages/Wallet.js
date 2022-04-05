import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { actionRequestCoins } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount = async () => {
    const { RequestCoins } = this.props;
    RequestCoins();
  };

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  RequestCoins: () => dispatch(actionRequestCoins()),
});

Wallet.propTypes = {
  RequestCoins: PropTypes.function,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
