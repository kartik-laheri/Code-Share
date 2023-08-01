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

import { createroom_api } from "../allApi";

export default function CreateRoom() {
  const [roomName, setRoomName] = useState("");
  const [roomPassword, setRoomPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();

    const body = {
      roomName,
      roomPassword,
    };
    console.log(body);
    const user = await createroom_api(body);

    if (user.error) {
      alert(user.error);
    }

    if (user.token) {
      localStorage.setItem("token", user.token);
      localStorage.setItem("userId", user.user._id);
      setRoomName("");
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
          <Heading fontSize={"4xl"}>Create Room</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Room Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter Room Name"
                onChange={(e) => setRoomName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Room Password (Default: 123)</FormLabel>
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
                <Text>Want to join another Room ?</Text>
                <Link color={"blue.400"} href="/joinroom">
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
                Create Room
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
