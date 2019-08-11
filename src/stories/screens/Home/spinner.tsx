import * as React from "react";
import { Container, Spinner } from "native-base";
import styles from "./styles";

export interface Props {}
export interface State {}

class App extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.row}>
        <Spinner color="blue" />
      </Container>
    );
  }
}
export default App;
