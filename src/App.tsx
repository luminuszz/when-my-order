import React, { useEffect } from "react";
import { Flex, NativeBaseProvider } from "native-base";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
  RobotoSlab_600SemiBold,
} from "@expo-google-fonts/roboto-slab";

import LoginScreen from "./screens/login.screen";
import theme from "@infra/themes";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <Flex w="full" h="full" flex="1" bgColor="gray.50">
      {children}
    </Flex>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_600SemiBold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      void SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <NativeBaseProvider theme={theme}>
      <Layout>
        <LoginScreen />
      </Layout>
    </NativeBaseProvider>
  );
}
