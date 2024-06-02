// ./app/page.tsx

import client from '../services/apollo-client';
import {GetLejligheder} from '../queries/get-lejligheder';
import {GetEjendomme} from '../queries/get-ejendomme';
import Thumbnails from '../components/thumbnails';
import { Lejlighed } from '../queries/lejlighed';
import { Ejendom } from '../queries/ejendom';
import { FaMobileAlt } from "react-icons/fa";
import { FaFacebook } from 'react-icons/fa';
import { MdEmail, MdCall } from "react-icons/md";
import { FaSms } from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";
import Newsletter from '../components/newsletter';
import { IoIosCall } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { Metadata } from "next";
import Footer from '../components/footer';

import {Highlight, Popover,PopoverTrigger, PopoverCloseButton, PopoverBody, PopoverArrow, Portal, PopoverContent, Button, Box, Container, Flex, Heading, Stack, Text, Link, SimpleGrid, Wrap, Grid, Image, Tooltip, IconButton, HStack} from '@chakra-ui/react'

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
  

  return (
    
    <Grid mt={8} alignContent={'center'} alignItems={'center'} justifyContent={'center'} alignSelf={'center'} justifySelf={'center'}>
      <Flex justifyContent={'center'}>
      
      <Image objectFit={'contain'} maxW={{base:'95vw', sm:'80vw', md:'60vw'}} mb={{base:1, sm:2, md:4}} src='logo.jpg'/>
      </Flex>
      
      <Wrap spacingY={2} justify='center' mt={2}>
        
  
  <Box textAlign="center" alignItems="center">
    <Tooltip label='Ring 22 99 64 21'>
      <Link href='tel:+4522996421' color='black' whiteSpace="pre-line">
        <IconButton aria-label='Ring' color='rgb(27,52,90)' icon={<MdCall fontSize={30} />} />
        <Text mt={2} fontWeight="bold" width={'100px'}>Ring</Text>
      </Link>
    </Tooltip>
    </Box>
  
    <Box textAlign="center" alignItems="center">
    <Tooltip label='SMS 22 99 64 21'>
      <Link href='sms:+4522996421' color='black' whiteSpace="pre-line">
        <IconButton aria-label='SMS' color='rgb(27,52,90)' icon={<FaSms fontSize={30}/>} />
        <Text mt={2} fontWeight="bold" width={'100px'}>SMS</Text>
      </Link>
    </Tooltip>
  </Box>
  <Box textAlign="center" alignItems="center">
    <Tooltip label='Email udlejning@fredericiabolig.com'>
      <Link href='mailto:udlejning@fredericiabolig.com' color='black' whiteSpace="pre-line">
        <IconButton aria-label='Mail' color='rgb(27,52,90)' icon={<MdEmail fontSize={30}/>} />
        <Text mt={2} fontWeight="bold" width={'100px'}>E-mail</Text>
      </Link>
    </Tooltip>
  </Box>
  
    <Newsletter />
    <Box textAlign="center" alignItems="center">
    <Tooltip label='Facebook'>
      <Link href='https://www.facebook.com/share/Kg8pKAhod4BdmFP2/' color='black' whiteSpace="pre-line" target="_blank">
        <IconButton aria-label='Mail' color='rgb(27,52,90)' icon={<FaFacebook fontSize={30}/>} />
        <Text mt={2} fontWeight="bold" width={'100px'}>Facebook</Text>
      </Link>
    </Tooltip>
  </Box>
  
</Wrap>
<Flex justifyContent="center" alignItems="center" mt={2}>

  <Box maxW={{ base:'90vw', sm:'80vw', md:'60vw' }}>

    <Wrap spacingY={2}>
      <Text mt={4} whiteSpace="pre-line" textAlign={'center'} fontWeight="bold" lineHeight={2.2}>
       
          Velkommen til Fredericia Erhverv Boligudlejning – et 
        <Popover>
            <PopoverTrigger>
              <Button ml='1' mr='1' verticalAlign={'center'} backgroundColor={'#CBD5E0'}  rounded='full' fontWeight={'bold'} px='2' py='1' size={'md'} height={'30px'} _hover={{ bg: 'rgb(27,52,90)', textColor: 'White' }} display={'inline-flex'}>familieejet boligselskab</Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent borderWidth={0}>
                <PopoverArrow />
                <PopoverBody lineHeight={2} backgroundColor={'rgb(27,52,90)'} textColor={'White'} fontWeight={'bold'} rounded={'10'}>
                <Highlight
                  query={['ordentlig udlejer','velholdte lejligheder','fair priser','kontakt os for en fremvisning']}
                  styles={{ px: '2', py: '1', rounded: 'full', bg: '#CBD5E0' }}>
                  Vi stræber efter at være en ordentlig udlejer med velholdte lejligheder og en fair leje. Med en portefølje på mere end 80 lejligheder i Fredericia kan vi imødekomme de fleste behov og har løbende ledige lejligheder.
                </Highlight>
                 
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
          med rødder i Fredericia. <br/>Se hvad vi har ledigt nedenfor og 
        
        <Popover>
            <PopoverTrigger>
            <Button ml='1' mr='1' verticalAlign={'center'} backgroundColor={'#CBD5E0'}  rounded='full' fontWeight={'bold'} px='2' py='1' size={'md'} height={'30px'} _hover={{ bg: 'rgb(27,52,90)', textColor: 'White' }} display={'inline-flex'}>kontakt os for en fremvisning</Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent width="fit-content" minWidth="200px">
                <PopoverArrow />
                
                <PopoverBody backgroundColor={'blue.50'} display='flex' alignItems='center' justifyContent='space-between'>
                  <Wrap spacingY={2} justify='center' mt={2}>
                  <Box textAlign="center" alignItems="center">
                  <Tooltip label='Ring 22 99 64 21'>
                    <Link href='tel:+4522996421' color='black' whiteSpace="pre-line">
                      <IconButton aria-label='Ring' color='rgb(27,52,90)' icon={<MdCall fontSize={30} />} />
                      <Text mt={2} fontWeight="bold" width={'100px'}>Ring</Text>
                    </Link>
                  </Tooltip>
                  </Box>
                  <Box textAlign="center" alignItems="center">
                    <Tooltip label='SMS 22 99 64 21'>
                      <Link href='sms:+4522996421' color='black' whiteSpace="pre-line">
                        <IconButton aria-label='SMS' color='rgb(27,52,90)' icon={<FaSms fontSize={30}/>} />
                        <Text mt={2} fontWeight="bold" width={'100px'}>SMS</Text>
                      </Link>
                    </Tooltip>
                  </Box>
                  <Box textAlign="center" alignItems="center">
                    <Tooltip label='Email udlejning@fredericiabolig.com'>
                      <Link href='mailto:udlejning@fredericiabolig.com' color='black' whiteSpace="pre-line">
                        <IconButton aria-label='Mail' color='rgb(27,52,90)' icon={<MdEmail fontSize={30}/>} />
                        <Text mt={2} fontWeight="bold" width={'100px'}>E-mail</Text>
                      </Link>
                    </Tooltip>
                  </Box>
                  </Wrap>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        <br/>
        <Highlight
          query={['tilmeld dig vores nyhedsmail']}
          styles={{ px: '2', py: '1', rounded: 'full', bg: 'blue.100' }}>
          Kan vi ikke opfylde dine ønsker lige nu, så
        </Highlight>
        <Popover>
            <PopoverTrigger>
            <Button ml='1' mr='1' verticalAlign={'center'} backgroundColor={'#CBD5E0'}  rounded='full' fontWeight={'bold'} px='2' py='1' size={'md'} height={'30px'} _hover={{ bg: 'rgb(27,52,90)', textColor: 'White' }} display={'inline-flex'}>tilmeld dig vores nyhedsmail eller Facebook side</Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent width="fit-content">
                <PopoverArrow />
                
                <PopoverBody backgroundColor={'blue.50'} display='flex' alignItems='center' justifyContent='space-between'>
                  <Newsletter />
                    <Box textAlign="center" alignItems="center">
                    <Tooltip label='Facebook'>
                      <Link href='https://www.facebook.com/share/Kg8pKAhod4BdmFP2/' color='black' whiteSpace="pre-line" target="_blank">
                        <IconButton aria-label='Mail' color='rgb(27,52,90)' icon={<FaFacebook fontSize={30}/>} />
                        <Text mt={2} fontWeight="bold" width={'100px'}>Facebook</Text>
                      </Link>
                    </Tooltip>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
          og få direkte besked, når der er nye ledige lejligheder.
        <br/>
        
          Velkommen hjem – hos Fredericia Erhverv Boligudlejning!
        
      </Text>
    </Wrap>

  </Box>

</Flex>



        <Stack  spacing={4} as={Container} maxW={'5xl'} mt={12} mb={20} align={'center'}>
        <SimpleGrid spacing={8} minChildWidth='290px'>
          <Thumbnails lejligheder={lejligheder} ejendomme={ejendomme}/>
        </SimpleGrid>
      </Stack>
      <Footer/>
    </Grid>
  );
}
