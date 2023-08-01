import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { joinroom_api } from "../allApi";

export default function JoinRoom() {
  const [roomId, setRoomId] = useState("");
  const [roomPassword, setRoomPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();

    const body = {
      roomId,
      roomPassword,
    };
    console.log(body);
    const user = await joinroom_api(body);

    if (user.error) {
      alert(user.error);
    }

    if (user.token) {
      localStorage.setItem("token", user.token);
      localStorage.setItem("userId", user.user._id);
      setRoomId("");
      setRoomPassword("");
      alert("Login successfull!!");
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <Flex
      minH={"80vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Join Room</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Room Id</FormLabel>
              <Input
                type="text"
                placeholder="Enter Room Id"
                onChange={(e) => setRoomId(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Room Password</FormLabel>
              <Input
                type="password"
                placeholder="******"
                onChange={(e) => setRoomPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Text>Want to create another Room ?</Text>
                <Link color={"blue.400"} href="/createroom">
                  Click
                </Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={submitHandler}
              >
                Join Room
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
