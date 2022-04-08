import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { actionRequestCoins } from '../actions/index';
import Forms from '../components/Forms';
import Table from '../components/Table';

class Wallet extends React.Component {
  componentDidMount = () => {
    const { RequestCoins } = this.props;
    RequestCoins();
  };

  render() {
    return (
      <div>
        <Header />
        <Forms />
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  RequestCoins: () => dispatch(actionRequestCoins()),
});

Wallet.propTypes = {
  RequestCoins: PropTypes.function,
}.isRequired;

export default connect(null, mapDispatchToProps)(Wallet);
