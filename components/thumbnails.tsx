// ./componenets/thumbnails.tsx
'use client'

import { Lejlighed } from '../queries/lejlighed';
import { CardFooter, Image } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import Carousel from './carusel';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Flex,
    Heading,
    Text,
    Card,
    CardBody,
    Stack,
    Box,
    Wrap,
  } from '@chakra-ui/react'
  import { AspectRatio } from '@chakra-ui/react'


import { PiLayout } from "react-icons/pi";
import { SlSizeFullscreen } from "react-icons/sl";
import { IoPricetagOutline } from "react-icons/io5";


interface ThumbnailsProps {
    lejlighed: Lejlighed;
  }

export default function Thumbnails({ lejlighed }: ThumbnailsProps) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      
        <Card onClick = {onOpen} height='100%' bg={'black'} borderWidth={{ base:'2px', sm: '3px', md:'4px'}} borderRadius="lg" borderColor={'white'}> 
          <CardBody>
            <Image src = {lejlighed.billeder[0]?.url}  />
            <Heading size={['sm','sm','md']} mt={4} color={'white'}>{lejlighed.navn}</Heading>
          </CardBody>
            <CardFooter justify={'space-between'} flexWrap={'wrap'}>
                <Flex align="center" flexDirection="column"> {/* Flex container to align items vertically */}
                    <Flex align="center"> {/* Flex container to align items horizontally */}
                    <PiLayout color='white' />
                    <Text color='white' whiteSpace="pre-line" ml={2}>{lejlighed.vrelser}</Text> {/* Text */}
                    </Flex>
                    <Text color='white' textAlign="center">Værelser</Text> {/* Centered text */}
                </Flex>
                <Flex align="center" flexDirection="column"> {/* Flex container to align items vertically */}
                    <Flex align="center"> {/* Flex container to align items horizontally */}
                    <SlSizeFullscreen color='white'/>
                    <Text color='white' whiteSpace="pre-line" ml={2}>{lejlighed.kvadratmeter} m2</Text> {/* Text */}
                    </Flex>
                    <Text color='white' textAlign="center">Bolig areal</Text> {/* Centered text */}
                </Flex>
                <Flex align="center" flexDirection="column"> {/* Flex container to align items vertically */}
                    <Flex align="center"> {/* Flex container to align items horizontally */}
                    <IoPricetagOutline color='white'/>
                    <Text color='white' whiteSpace="pre-line" ml={2}>{lejlighed.mnedlig_leje} kr</Text> {/* Text */}
                    </Flex>
                    <Text color='white' textAlign="center">Pris</Text> {/* Centered text */}
                </Flex>
            </CardFooter>

            <Modal isOpen={isOpen} onClose={onClose} motionPreset='scale' size ={{ base:'sm', sm: 'xl', md:'3xl'}} scrollBehavior={'inside'}>
                
                <ModalOverlay       
                bg='blackAlpha.700'
                backdropFilter='auto'
                backdropInvert='20%'
                backdropBlur='2px'
                />
                <ModalContent >
                <ModalHeader>{lejlighed.navn}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <Carousel
                        cards={lejlighed.billeder.map((billede) => billede.url)}
                    />
                    <Wrap justify={'space-between'} flexWrap={'wrap'} mt={4}>
                        <Flex align="center" flexDirection="column"> {/* Flex container to align items vertically */}
                            <Flex align="center"> {/* Flex container to align items horizontally */}
                            <PiLayout color='black' />
                            <Text color='black' whiteSpace="pre-line" ml={2}>{lejlighed.vrelser}</Text> {/* Text */}
                            </Flex>
                            <Text color='black' textAlign="center">Værelser</Text> {/* Centered text */}
                        </Flex>
                        <Flex align="center" flexDirection="column"> {/* Flex container to align items vertically */}
                            <Flex align="center"> {/* Flex container to align items horizontally */}
                            <SlSizeFullscreen color='black'/>
                            <Text color='black' whiteSpace="pre-line" ml={2}>{lejlighed.kvadratmeter} m2</Text> {/* Text */}
                            </Flex>
                            <Text color='black' textAlign="center">Bolig areal</Text> {/* Centered text */}
                        </Flex>
                        <Flex align="center" flexDirection="column"> {/* Flex container to align items vertically */}
                            <Flex align="center"> {/* Flex container to align items horizontally */}
                            <IoPricetagOutline color='black'/>
                            <Text color='black' whiteSpace="pre-line" ml={2}>{lejlighed.mnedlig_leje} kr</Text> {/* Text */}
                            </Flex>
                            <Text color='black' textAlign="center">Pris</Text> {/* Centered text */}
                        </Flex>
                    </Wrap>
                    <Heading size ='lg' mt={4}>Beskrivelse</Heading>
                    <Text mt={4}>{lejlighed.beskrivelse}</Text>
                    <Heading size ='lg' mt={4}>Kort</Heading>
                    <AspectRatio ratio={16 / 9} mt={4} mb={4}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2255.5733072667017!2d9.746948777307264!3d55.574627573018795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c90e1c275712b%3A0x9aeb07b6685484dc!2sN%C3%B8rrebrogade%2073%2C%207000%20Fredericia!5e0!3m2!1sda!2sdk!4v1714403932830!5m2!1sda!2sdk"></iframe>
                    </AspectRatio>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </Card>
        
    );
}