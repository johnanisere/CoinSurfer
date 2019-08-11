import * as React from "react";
import { Content, Text, List, ListItem, Body, Left, Right } from "native-base";
import { RefreshControl } from "react-native";
import styles from "./styles";

export interface Props {
  fetchCoin: () => void;
  list: any;
  fetching: boolean;
}
export interface State {}
export default class ListCoins extends React.Component<Props, State> {
  render() {
    const { list, fetching, fetchCoin } = this.props;

    return (
      <Content
        refreshControl={
          <RefreshControl refreshing={fetching} onRefresh={fetchCoin} />
        }
      >
        <List>
          {list.map((item, i) => {
            const price = Number(item.quote.USD.price).toLocaleString();
            const marketCap = Number(item.quote.USD.market_cap).toLocaleString(
              undefined,
              { maximumFractionDigits: 0 }
            );
            const volume_24h = Number(item.quote.USD.volume_24h).toLocaleString(
              undefined,
              { maximumFractionDigits: 0 }
            );
            const percentageChange_1h = `${Number(
              item.quote.USD.percent_change_1h
            ).toFixed(2)}%`;
            const percentageChangeStyle_1h = [
              styles.rise,
              item.quote.USD.percent_change_1h < 0 && styles.hoddle
            ];
            const percentageChange_24h = `${Number(
              item.quote.USD.percent_change_24h
            ).toFixed(2)}%`;
            const percentageChangeStyle_24h = [
              styles.rise,
              item.quote.USD.percent_change_24h < 0 && styles.hoddle
            ];
            const percentageChange_7d = `${Number(
              item.quote.USD.percent_change_7d
            ).toFixed(2)}%`;
            const percentageChangeStyle_7d = [
              styles.rise,
              item.quote.USD.percent_change_7d < 0 && styles.hoddle
            ];
            const time = new Date(
              item.quote.USD.last_updated
            ).toLocaleTimeString();

            return (
              <ListItem key={i} avatar>
                <Left>{/* <Thumbnail source={{ uri: 'Image URL' }} /> */}</Left>
                <Body style={styles.bn}>
                  <Text style={styles.leftText}>
                    Symbol: <Text>{item.symbol}</Text>
                  </Text>
                  <Text style={styles.leftText}>
                    Name: <Text>{item.name}</Text>
                  </Text>
                  <Text style={styles.leftText}>
                    Price: <Text>${price}</Text>
                  </Text>
                  <Text style={styles.leftText}>
                    Market Cap: <Text>${marketCap}</Text>
                  </Text>
                  <Text style={styles.leftText}>
                    Volume(24h): <Text>${volume_24h}</Text>
                  </Text>
                  <Text style={styles.leftText}>
                    Percentage Change(1h):{" "}
                    <Text style={percentageChangeStyle_1h}>
                      {percentageChange_1h}
                    </Text>
                  </Text>
                  <Text style={styles.leftText}>
                    Percentage Change(24h):{" "}
                    <Text style={percentageChangeStyle_24h}>
                      {percentageChange_24h}
                    </Text>
                  </Text>
                  <Text style={styles.leftText}>
                    Percentage Change(7d):{" "}
                    <Text style={percentageChangeStyle_7d}>
                      {percentageChange_7d}
                    </Text>
                  </Text>
                </Body>
                <Right style={styles.bn}>
                  <Text note>last updated</Text>
                  <Text note> {time}</Text>
                </Right>
              </ListItem>
            );
          })}
        </List>
      </Content>
    );
  }
}
