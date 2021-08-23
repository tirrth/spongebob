import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Firebase, { FirebaseContext } from "../database";

export default class Wrapper extends React.Component {
  render() {
    return (
      <ChakraProvider>
        <FirebaseContext.Provider value={new Firebase()}>
          {React.Children.map(this.props.children, (element, idx) => {
            return React.cloneElement(element, { ref: idx });
          })}
        </FirebaseContext.Provider>
        {/* <FirebaseProvider>
          {React.Children.map(this.props.children, (element, idx) => {
            return React.cloneElement(element, { ref: idx });
          })}
        </FirebaseProvider> */}
      </ChakraProvider>
    );
  }
}
