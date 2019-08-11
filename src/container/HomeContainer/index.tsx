import * as React from "react";
import request from "../../request";
import { connect } from "react-redux";
import { fetchCoin } from "./actions";
import Home from "../../stories/screens/Home";
import { Istate } from "./constants/state.Interface";

export interface Props {
  navigation: any;
  fetchCoin: Function;
  coins: Istate;
}
export interface State {}
class HomeContainer extends React.Component<Props, State> {
  componentDidMount() {
    this.handlefetchCoin();
  }
  handlefetchCoin = () => {
    this.props.fetchCoin(request);
  };
  render() {
    const { coins, fetching, fetched } = this.props.coins;
    return (
      <Home
        list={coins}
        fetched={fetched}
        fetching={fetching}
        fetchCoin={this.handlefetchCoin}
        navigation={this.props.navigation}
      />
    );
  }
}

function bindAction(dispatch) {
  return {
    fetchCoin: request => dispatch(fetchCoin(request))
  };
}

const mapStateToProps = ({ coins }) => ({
  coins
});
export default connect(
  mapStateToProps,
  bindAction
)(HomeContainer);
