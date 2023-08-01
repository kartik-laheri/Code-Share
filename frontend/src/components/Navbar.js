import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";

// const isLogin = false;

const Links = [
  ["Home", "/"],
  ["Create Room", "/createroom"],
  ["Join Room", "/joinroom"],
  // !isLogin && ["Register", "/register"],
  // !isLogin && ["Login", "/login"],
  // ["Room", "/room"],
];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={children[1]}
  >
    {children[0]}
  </Link>
);

export default function Navbar() {
  let isDarkTheme = true;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLogin, setIsLogin] = useState(false);

  let token = null;
  useEffect(() => {
    token = localStorage.getItem("token");
    if (token != null) {
      setIsLogin(true);
    }
  }, []);

  return (
    <Flex>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        style={{ width: "100%" }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>CodeShare</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link[1]}>{link}</NavLink>
              ))}
              {!isLogin && (
                <NavLink key={"Login"}>{["Login", "/login"]}</NavLink>
              )}
              {!isLogin && (
                <NavLink key={"Register"}>{["Register", "/register"]}</NavLink>
              )}
              {isLogin && (
                <NavLink key={"Logout"}>{["Logout", "/logout"]}</NavLink>
              )}
            </HStack>
            <Box>
              <DarkModeSwitch />
            </Box>
          </HStack>

          {/* <ChatDrawer /> */}
        </Flex>
      </Box>
    </Flex>
  );
}
