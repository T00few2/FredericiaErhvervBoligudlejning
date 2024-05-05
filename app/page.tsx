// ./app/page.tsx

import client from '../services/apollo-client';
import {GetLejligheder} from '../queries/get-lejligheder';
import Thumbnails from '../components/thumbnails';
import { Lejlighed } from '../queries/lejlighed';
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";
import { FaSms } from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";
import Newsletter from '../components/newsletter';
import { IoIosCall } from "react-icons/io";
import { IoCall } from "react-icons/io5";

import {Box, Container, Flex, Heading, Stack, Text, Link, SimpleGrid, Wrap, Grid, Image, Tooltip, IconButton} from '@chakra-ui/react'

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
      
      <Image objectFit={'contain'} maxW={{base:'90vw', sm:'80vw', md:'60vw'}} mb={{base:1, sm:2, md:4}} src='Logo.svg'/>
      </Flex>
      <Wrap justify={'center'} flexWrap={'wrap'} mt={4}>
        <Tooltip label='Ring 22 99 64 21'>
          <Link href='tel:+4522996421' color='black' whiteSpace="pre-line" ml={2}><IconButton aria-label='Ring' icon={<MdCall  fontSize={30} />}></IconButton></Link>
        </Tooltip>
        <Tooltip label='SMS 22 99 64 21'>
          <Link href='sms:+4522996421' color='black' whiteSpace="pre-line" ml={2}><IconButton aria-label='SMS' icon={<FaSms fontSize={30}/>} /></Link> 
        </Tooltip>
        <Tooltip label='Email annettekjaer2@yahoo.dk'>
          <Link href='mailto:annettekjaer2@yahoo.dk' color='black' whiteSpace="pre-line" ml={2}><IconButton aria-label='Mail' icon={<MdEmail fontSize={30}/>} /></Link>
        </Tooltip>
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
