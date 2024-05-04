// ./app/page.tsx

import client from '../services/apollo-client';
import {GetLejligheder} from '../queries/get-lejligheder';
import Thumbnails from '../components/thumbnails';
import { Lejlighed } from '../queries/lejlighed';
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Newsletter from '../components/newsletter';

import {Box, Container, Flex, Heading, Stack, Text, Link, SimpleGrid, Wrap, Grid, Image, Tooltip} from '@chakra-ui/react'

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
            <Link href='tel:+4522996421' color='black' whiteSpace="pre-line" ml={2}>22 99 64 21</Link> {/* Text */}
            </Flex>
            
        </Flex>
        <Flex align="center" flexDirection="column"> {/* Flex container to align items vertically */}
            <Flex align="center"> {/* Flex container to align items horizontally */}
            <MdOutlineMail />
            <Link href='mailto:annettekjaer2@yahoo.dk' color='black' whiteSpace="pre-line" ml={2}>Annette Kjær Djernum</Link>
            </Flex>
        </Flex>
        <Newsletter/>
        </Wrap>
        <Stack  spacing={4} as={Container} maxW={'5xl'} mt={12} mb={20} align={'center'}>
        <SimpleGrid spacing={8} minChildWidth='290px'>
          <Thumbnails lejligheder={lejligheder} />
        </SimpleGrid>
      </Stack>
      
    </Grid>
  );
}
