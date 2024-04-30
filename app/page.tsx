// ./app/page.tsx

import client from '../services/apollo-client';
import {GetLejligheder} from '../queries/get-lejligheder';
import Thumbnails from '../components/thumbnails';
import { Lejlighed } from '../queries/lejlighed';
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

import {Box, Container, Flex, Heading, Stack, Text, Link, SimpleGrid, Wrap, Grid, Image} from '@chakra-ui/react'

export const revalidate = 10;

async function getData() {
  const {data} = await client.query({
    query: GetLejligheder,
    fetchPolicy: 'network-only'
  });
  return data.Lejligheder.items;
}

export default async function Page() {
  const lejligheder: Lejlighed[] = await getData();

  return (
    
    <Grid mt={8} alignContent={'center'} alignItems={'center'} justifyContent={'center'} alignSelf={'center'} justifySelf={'center'}>
      <Flex justifyContent={'center'}>
      <Heading textAlign={'center'}>Kjær Boligudlejning</Heading>
      <Image boxSize='40px'  src='Logo.svg'/>
      </Flex>
      <Wrap justify={'center'} flexWrap={'wrap'} mt={4}>
        <Flex align="center" flexDirection="column"> {/* Flex container to align items vertically */}
            <Flex align="center"> {/* Flex container to align items horizontally */}
            <FaMobileAlt />
            <Text color='black' whiteSpace="pre-line" ml={2}>xx xx xx xx</Text> {/* Text */}
            </Flex>
            
        </Flex>
        <Flex align="center" flexDirection="column"> {/* Flex container to align items vertically */}
            <Flex align="center"> {/* Flex container to align items horizontally */}
            <MdOutlineMail />
            <Link href='mailto:someone@some.where' color='black' whiteSpace="pre-line" ml={2}>someone@some.where</Link>
            </Flex>

        </Flex>
        </Wrap>
      <Stack  spacing={4} as={Container} maxW={'5xl'} mt={12} mb={20} align={'center'}>
        <SimpleGrid spacing={8} minChildWidth='290px'>
          <Thumbnails lejligheder={lejligheder} />
        </SimpleGrid>
      </Stack>
      
    </Grid>
  );
}
