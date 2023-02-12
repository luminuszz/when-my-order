import React from "react";
import { AntDesign } from "@expo/vector-icons";

import LogoBrand from "../assets/logo-brand.png";

import { Button, Flex, Image, VStack } from "native-base";
import { loginService } from "@app/services";

function GoogleSignButton() {
  async function handleClick() {
    const response = await loginService.loginWithGoogle();

    console.log(response);
  }

  return (
    <Button
      bgColor="red.200"
      width="70px"
      height="70px"
      borderRadius="full"
      onPress={handleClick}
      leftIcon={<AntDesign name="google" size={24} color="white" />}
    ></Button>
  );
}

export default function LoginScreen() {
  return (
    <Flex flex="1" justifyContent="center" alignItems="center">
      <VStack alignItems="center" space="xl">
        <Image alt="logo img" source={LogoBrand} width="330px" height="330px" />
        <GoogleSignButton />
      </VStack>
    </Flex>
  );
}
