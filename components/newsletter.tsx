'use client'
import { FormEvent, useState } from "react";
import axios from "axios";
import { Button, Input, Wrap, useToast, VStack, Tooltip, Modal, ModalHeader, ModalBody,ModalOverlay, ModalContent, ModalCloseButton, IconButton, Text, Flex, SimpleGrid, Textarea } from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react';
import { FaRegNewspaper } from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";
import { MdList } from "react-icons/md";
import { MdPlaylistAddCheck } from "react-icons/md";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    GridItem,
  } from '@chakra-ui/react'

const Newsletter = () => {
  const [input, setInput] = useState('')
  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [email, setEmail] = useState<string>("");
  const [first_name, setFirstName] = useState<string>('');
  const [last_name, setLastName] = useState<string>('');
  const [wish, setWish] = useState<string>('');
  const [phone_number, setPhoneNumber] = useState<string>('');
  const [status, setStatus] = useState<
    "success" | "error" | "loading" | "idle"
  >("idle");
  const [responseMsg, setResponseMsg] = useState<string>("");
  const [statusCode, setStatusCode] = useState<number>();
  const toast = useToast()
   
  async function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await axios.post("api/newsletter", { 
        email: email,
        fname: first_name,
        lname: last_name,
        phone: phone_number,
        wish: wish ,
    });
      setStatus("success");
      setStatusCode(response.status);
      setEmail("");
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setWish("");
      toast({
        description: response.data,
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (err) {
      
      if (axios.isAxiosError(err)) {
        setStatus("error");
        setStatusCode(err.response?.status);
        setResponseMsg(err.response?.data.error);
        toast({
          description: err.response.data,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
    }
  }

  return (
    <div>
        <Flex align="center" flexDirection="column"> {/* Flex container to align items vertically */}
        <Flex align="center"> {/* Flex container to align items horizontally */}
        <Tooltip label='Tilmeld mailliste'>
            <IconButton aria-label='mail' onClick = {onOpen} color='rgb(27,52,90)' icon={<MdPlaylistAddCheck  fontSize={30}/>} ml={2}/>
          </Tooltip>
        </Flex>
        </Flex>
  
  
    <Modal isOpen={isOpen} onClose={onClose} motionPreset='scale' size ={{ base:'sm', sm: 'xl', md:'3xl'}} scrollBehavior={'inside'}>
              
              <ModalOverlay       
              bg='blackAlpha.700'
              backdropFilter='auto'
              backdropInvert='20%'
              backdropBlur='2px'
              />
              <ModalContent backgroundColor={'GhostWhite'} justifyContent={'center'}>
              <ModalHeader fontSize={'3xl'} fontWeight={'700'}>Mailliste</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text mb={4}>Tilmeld dig vores mail liste og få besked når der kommer ledige ledligheder</Text>
             
              <form onSubmit={handleSubscribe}>
                <SimpleGrid columns={{ base:1, sm: 1, md:2}} spacing={4}>
                    <GridItem>
                        <FormLabel>Fornavn</FormLabel>
                        <Input
                            type="text"
                            placeholder="Fornavn"
                            value={first_name}
                            onChange={(e) => setFirstName(e.target.value)}
                            disabled={status == "loading"}
                            size={'md'}
                        />
                        </GridItem>
                    <GridItem>
                    <FormLabel>Efternavn</FormLabel>
                    <Input
                        type="text"
                        placeholder="Efternavn"
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                        disabled={status == "loading"}
                        size={'md'}
                    />
                    </GridItem>
                    <GridItem>
                    <FormLabel>Telefon</FormLabel>
                    <Input
                        type="text"
                        placeholder="Telefon nummer"
                        value={phone_number}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        disabled={status == "loading"}
                        size={'md'}
                    />
                    </GridItem>
                    <FormControl isInvalid={isError} >          
                    <FormLabel>Email</FormLabel>
                    <Input 
                        type='email'
                        placeholder="E-mail"
                        onChange={(e) => {
                            handleInputChange(e);
                            setEmail(e.target.value);
                        }}
                        value={email}
                        disabled={status == "loading"}
                        size={'md'} />
                            {!isError ? (
                          <></>
                            ) : (
                                <FormErrorMessage>Email er nødvendig.</FormErrorMessage>
                            )}
                    </FormControl>
                    </SimpleGrid>
                    <Textarea
                        placeholder="Fortæl lidt om hvad du leder efter"
                        value={wish}
                        onChange={(e) => setWish(e.target.value)}
                        disabled={status == "loading"}
                        size={'lg'}
                        mt={4}
                        mb={4}
                        colorScheme={'WhiteAlpha'}
                    />
                    <Wrap justify='center'>
                    <Button
                        size={'lg'}
                        type="submit"
                        disabled={status == "loading"}
                        backgroundColor={'LightSteelBlue'}
                    >Tilmeld
                    </Button>
                    </Wrap>
        
            </form>



                
                  </ModalBody>

              </ModalContent>
          </Modal>
          </div>
        
  );
};

export default Newsletter;