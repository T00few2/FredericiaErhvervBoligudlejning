// ./app/page.tsx

import client from '../services/apollo-client';
import {GetLejligheder} from '../queries/get-lejligheder';
import {GetEjendomme} from '../queries/get-ejendomme';
import Thumbnails from '../components/thumbnails';
import { Lejlighed } from '../queries/lejlighed';
import { Ejendom } from '../queries/ejendom';
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";
import { FaSms } from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";
import Newsletter from '../components/newsletter';
import { IoIosCall } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { Metadata } from "next";
import Footer from '../components/footer';

import {Box, Container, Flex, Heading, Stack, Text, Link, SimpleGrid, Wrap, Grid, Image, Tooltip, IconButton, HStack} from '@chakra-ui/react'

export const metadata: Metadata = {
  title: 'Fredericia Erhverv Boligudlejning',
  description: 'Find din næste lejlighed til leje i Fredericia hos Fredericia Erhverv Boligudlejning. Gennemse vores lejligheder, hver med oplysninger om antal værelser, kvadratmeter og lejepriser. Find lejligheden der passer til dine behov!',

  metadataBase: new URL('https://www.fredericiabolig.com/'),

  openGraph: {
    title: 'Din næste leje lejlighed i Fredericia | Fredericia Erhverv Boligudlejning',
    description: 'Find din næste lejlighed til leje i Fredericia hos Fredericia Erhverv Boligudlejning. Gennemse vores lejligheder, hver med oplysninger om antal værelser, kvadratmeter og lejepriser. Find lejligheden der passer til dine behov!',
    url: 'https://www.fredericiabolig.com/',
    siteName: 'Fredericia Erhverv Boligudlejning',
    images: [
      {
        url: 'https://www.fredericiabolig.com/logo.jpg',
        width: 2456,
        height: 1026,
        alt: 'Fredericia Boligudlejning Logo'
      },
    ],
    type: 'website',
    locale: 'da_DK',
  }
}

export const revalidate = 10;

async function getDataLejligheder() {
  const {data} = await client.query({
    query: GetLejligheder,
    fetchPolicy: 'network-only'
  });
  return data.Lejligheder.items;
}

async function getDataEjendomme() {
  const {data} = await client.query({
    query: GetEjendomme,
    fetchPolicy: 'network-only'
  });
  return data.Ejendomme.items;
}


export default async function Page() {
  const lejligheder: Lejlighed[] = await getDataLejligheder();
  const ejendomme: Ejendom[] = await getDataEjendomme();
  console.log(ejendomme)

  return (
    
    <Grid mt={8} alignContent={'center'} alignItems={'center'} justifyContent={'center'} alignSelf={'center'} justifySelf={'center'}>
      <Flex justifyContent={'center'}>
      
      <Image objectFit={'contain'} maxW={{base:'95vw', sm:'80vw', md:'60vw'}} mb={{base:1, sm:2, md:4}} src='logo.jpg'/>
      </Flex>
      
        <HStack spacing={5} justify={'center'}>
  
  <Box textAlign="center" alignItems="center">
    <Tooltip label='Ring 22 99 64 21'>
      <Link href='tel:+4522996421' color='black' whiteSpace="pre-line">
        <IconButton aria-label='Ring' color='rgb(27,52,90)' icon={<MdCall fontSize={30} />} />
        <Text mt={2} fontWeight="bold">Ring</Text>
      </Link>
    </Tooltip>
    </Box>
  
    <Box textAlign="center" alignItems="center">
    <Tooltip label='SMS 22 99 64 21'>
      <Link href='sms:+4522996421' color='black' whiteSpace="pre-line">
        <IconButton aria-label='SMS' color='rgb(27,52,90)' icon={<FaSms fontSize={30}/>} />
        <Text mt={2} fontWeight="bold">SMS</Text>
      </Link>
    </Tooltip>
  </Box>
  <Box textAlign="center" alignItems="center">
    <Tooltip label='Email udlejning@fredericiabolig.com'>
      <Link href='mailto:udlejning@fredericiabolig.com' color='black' whiteSpace="pre-line">
        <IconButton aria-label='Mail' color='rgb(27,52,90)' icon={<MdEmail fontSize={30}/>} />
        <Text mt={2} fontWeight="bold">E-mail</Text>
      </Link>
    </Tooltip>
  </Box>
  
    <Newsletter />
  
  </HStack>

        <Stack  spacing={4} as={Container} maxW={'5xl'} mt={12} mb={20} align={'center'}>
        <SimpleGrid spacing={8} minChildWidth='290px'>
          <Thumbnails lejligheder={lejligheder} ejendomme={ejendomme}/>
        </SimpleGrid>
      </Stack>
      <Footer/>
    </Grid>
  );
}
