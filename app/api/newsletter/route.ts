import axios from 'axios';
import { z } from "zod";
import md5 from 'md5'

type Data = { message?: string; error?: string; };

const EmailSchema = z
  .string()
  .email({ message: "Please enter a valid email address" });

export async function POST(
    req: Request,
    res: Response)  {
    
    const body = await new Response(req.body).text()
    const email = JSON.parse(body).email;
    const subscriberHash = md5(email.toLowerCase());
    const fname = JSON.parse(body).fname
    const lname = JSON.parse(body).lname
    const phone = JSON.parse(body).phone
    const wish = JSON.parse(body).wish
    const emailValidation = EmailSchema.safeParse(email);

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const API_SERVER = process.env.MAILCHIMP_API_SERVER;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    

    const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${subscriberHash}`;

    const data = {
      email_address: emailValidation.data,
      status: "subscribed",
      merge_fields: {
        FNAME: fname,
        LNAME: lname,
        PHONE: phone,
        WISH: wish,
      }
    };

    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `api_key ${API_KEY}`,
      },
    };
    
    try {
      
      const response = await axios.put(url, data, options);

      if (response.status == 200) {
        
        return new Response("Du er tilmeldt maillisten!",)
      }
    } catch (error) {
      
      if (axios.isAxiosError(error)) {
        console.error(
          `${error.response?.status}`,
          `${error.response?.data.title}`,
          `${error.response?.data.detail}`
        );
  
        if (error.response?.data.title == "Member Exists") {
          
          return new Response("Uh oh, it looks like this email's already subscribed🧐",)
        }
      }
          return new Response("Oops! There was an error subscribing you to the newsletter.",)
    }
}