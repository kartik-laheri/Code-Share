// import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  // Heading,
  Stack,
  Avatar,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import { ArrowForwardIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

export default function MiddleCard(props) {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            layout={'fill'}
          />
          <ChevronLeftIcon /><ChevronRightIcon />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {props.title}
          </Heading>
          <Text color={'gray.500'}>
            {props.text}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Text>Explore More <ArrowForwardIcon /></Text>
        </Stack>
      </Box>
    </Center>
  );
}