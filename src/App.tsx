import React from "react";

import LoginScreen from "@app/screens/login.screen";
import { NativeBaseProvider } from "native-base";
import theme from "@infra/themes";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <LoginScreen />
    </NativeBaseProvider>
  );
}
