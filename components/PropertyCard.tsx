// ./components/AppartmentCard.tsx
'use client'
import React from 'react';
import { Ejendom } from '../queries/ejendom';
import Carousel from './carusel';
import './css/ribbonProperty.css'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Heading,
  Text,
  Card,
  CardBody,
  Image,
  useDisclosure,
  AspectRatio,
} from '@chakra-ui/react'

// Ribbon component
const Ribbon = ({ text }) => {
    return (
      <div className="ribbon">
        <span>{text}</span>
      </div>
    );
  };

interface PropertyProps {
  ejendom: Ejendom;
}

const PropertyCard: React.FC<PropertyProps>=({ejendom}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const encodedLatitude = encodeURIComponent(ejendom.beliggenhed.latitude);
  const encodedLongitude = encodeURIComponent(ejendom.beliggenhed.longitude);
  
  return (
    
      <Card onClick = {onOpen} variant={'elevated'} borderWidth={{ base:'2px', sm: '3px', md:'4px'}} borderRadius="lg" backgroundColor='#EDF2F7' borderColor={'#E2E8F0'} _hover={{ cursor: 'pointer' }}> 
       {ejendom.status == true && (
            <Ribbon text="Ingen ledige lejligheder" />
        )}
      <CardBody>
          <Image objectFit='cover' aspectRatio={4/3} src = {ejendom.billeder[0]?.url} style={{ width: '100%', height: 'auto' }} />
          <Heading size={['sm','sm','md']} mt={4}>{ejendom.navn}</Heading>
      </CardBody>
          <Modal isOpen={isOpen} onClose={onClose} motionPreset='scale' size ={{ base:'sm', sm: 'xl', md:'3xl'}} scrollBehavior={'inside'}>
            <ModalOverlay       
            bg='blackAlpha.700'
            backdropFilter='auto'
            backdropInvert='20%'
            backdropBlur='2px'
            />
            <ModalContent backgroundColor={'GhostWhite'} justifyContent={'center'}>
              <ModalHeader fontSize={'3xl'} fontWeight={'700'}>{ejendom.navn}</ModalHeader>
              <ModalCloseButton />
                <ModalBody>
                  <Carousel cards={ejendom.billeder.map((billede) => billede.url)}/>
                  <Heading size ='lg' mt={4}>Beskrivelse</Heading>
                  <Text mt={4}>{ejendom.beskrivelse}</Text>
                  <Heading size ='lg' mt={4}>Kort</Heading>
                  <AspectRatio ratio={16 / 9} mt={4} mb={4}>
                  <iframe src={`https://www.google.com/maps?q=${encodedLatitude},${encodedLongitude}&z=15&output=embed`}></iframe>
                  </AspectRatio>
                </ModalBody>
            </ModalContent>
          </Modal>
      </Card>
  );
}
export default PropertyCard;