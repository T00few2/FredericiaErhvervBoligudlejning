'use client'
import { FormEvent, useState } from "react";
import axios from "axios";
import { Button, Input, Wrap, VStack, Tooltip, Modal, ModalHeader, ModalBody,ModalOverlay, ModalContent, ModalCloseButton, Icon, Text, Flex } from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react';
import { FaRegNewspaper } from "react-icons/fa";

const Newsletter = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>('');
  const [status, setStatus] = useState<
    "success" | "error" | "loading" | "idle"
  >("idle");
  const [responseMsg, setResponseMsg] = useState<string>("");
  const [statusCode, setStatusCode] = useState<number>();
    
  async function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await axios.post("api/newsletter", { 
        email: email,
        name: name });
      setStatus("success");
      setStatusCode(response.status);
      setEmail("");
      setResponseMsg(response.data.message);
    } catch (err) {
      
      if (axios.isAxiosError(err)) {
        setStatus("error");
        setStatusCode(err.response?.status);
        setResponseMsg(err.response?.data.error);
      }
    }
  }

  return (
    <div>
        <Flex  align="center" flexDirection="column"> {/* Flex container to align items vertically */}
        <Flex align="center"> {/* Flex container to align items horizontally */}
            <Icon onClick = {onOpen} as={FaRegNewspaper} />
            <Text onClick = {onOpen} color='black' whiteSpace="pre-line" ml={2}>Nyhedsbrev</Text> {/* Text */}
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
              <ModalHeader fontSize={'3xl'} fontWeight={'700'}>Nyhedsbrev</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Tilmeld dig vores mail liste og få besked når der kommer ledige ledligheder</Text>
              <Wrap justify={'left'} flexWrap={'wrap'} mt={4}>
      <form
        
        onSubmit={handleSubscribe}
      >
        
         
         <Input
            type="text"
            placeholder="Navn"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={status == "loading"}
            size={'md'}
          />
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status == "loading"}
            size={'md'}
          />
          
            <Button
                size={'md'}
                type="submit"
                disabled={status == "loading"}
                backgroundColor={'WhiteSmoke'}
            >Tilmeld
            </Button>
          
        
          
        <div className="server-message pt-4 text-green-600">
          {status === "success" ? (
            <p className="text-green-600">{responseMsg}</p>
          ) : null}
          {status === "error" ? (
            <p className="text-orange-600">{responseMsg}</p>
          ) : null}
        </div>
      </form>
    </Wrap>
                
                  </ModalBody>

              </ModalContent>
          </Modal>
          </div>
        
  );
};

export default Newsletter;