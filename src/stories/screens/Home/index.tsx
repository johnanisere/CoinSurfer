import * as React from "react";
import { Container, Header, Title, Left, Body, Right } from "native-base";
import Spinner from "./spinner";
import styles from "./styles";
import ListCoin from "./list-coin";
export interface Props {
  list: any;
  fetchCoin: () => void;
  navigation: any;
  fetching: boolean;
  fetched: boolean;
}
export interface State {}
class Home extends React.Component<Props, State> {
  render() {
    const { list, fetching, fetched, fetchCoin } = this.props;

    return (
      <Container style={styles.container}>
        <Header>
          <Left />
          <Body>
            <Title>Coins</Title>
          </Body>
          <Right />
        </Header>
        {fetching && <Spinner />}
        {fetched && (
          <ListCoin list={list} fetching={fetching} fetchCoin={fetchCoin} />
        )}
      </Container>
    );
  }
}

export default Home;
