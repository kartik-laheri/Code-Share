import { Button, Container, Heading, Center, Stack, HStack, Text, Link } from "@chakra-ui/react";
import MiddleCard from "./MiddleCard";

export default function Landing() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Code Sharing{" "}
          <Text as={"span"} color={"orange.400"}>
            made easy
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"} fontSize="xl" px="5">
          Now you don't need to be on discord and share your screen anymore with
          your fellow coders. Code collaboration with voice and chat rooms.
          <br />
          Connect with{" "}
          <p style={{ color: "orange", display: "inline" }}>Chatcode</p>.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Link href="/joinroom">
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"orange"}
              bg={"orange.400"}
              _hover={{ bg: "orange.500" }}
            >
              Join New Room
            </Button>
          </Link>
          <Link href="/createroom">
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"orange"}
              bg={"orange.400"}
              _hover={{ bg: "orange.500" }}
            >
              Create Room
            </Button>
          </Link>
        </Stack>
      </Stack>
      <Stack>
      <Heading as='h2' size='2xl'>
        <Center>What is Code Share ?</Center>
      </Heading>
        <HStack>
          <MiddleCard title="Collaborate Coding" text="Realtime code sharing among all the fellow programmers who are present in the room. Run code, share code and download code , get indulged in this wondeful environment."/>
          <MiddleCard title="Seamless Communication" text="Realtime voice call, chat to appreciate seamless communication among the fellow programmers. Smooth voice call to communicate , discuss codes through chat."/>
          <MiddleCard title="Code assist & Draft" text="Get help from our optimized search engine to find coding articles for you. Discuss and plan the algorithmic approaches with others , do rough work through realtime whiteboard." />
        </HStack>
      </Stack>
    </Container>
  );
}