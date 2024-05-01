'use client'
import { FormEvent, useState } from "react";
import axios from "axios";
import { Button, Input, Wrap, HStack, Tooltip } from "@chakra-ui/react";

const Newsletter = () => {
  const [email, setEmail] = useState<string>("");
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
        email: email });
        console.log(email)
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
    <Wrap justify={'center'} flexWrap={'wrap'} mt={4}>
      <form
        
        onSubmit={handleSubscribe}
      >
        <Tooltip label='Tilmeld dig vores mail liste og få besked når der kommer ledige ledligheder'>
         <HStack align={'center'}>
         
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status == "loading"}
            size={'sm'}
          />
          
            <Button
                size={'sm'}
                type="submit"
                disabled={status == "loading"}
                backgroundColor={'WhiteSmoke'}
            >Tilmeld
            </Button>
          
          </HStack>
          </Tooltip>
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
  );
};

export default Newsletter;