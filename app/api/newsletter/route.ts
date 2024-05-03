import axios from 'axios';
import { z } from "zod";

type Data = { message?: string; error?: string; };

const EmailSchema = z
  .string()
  .email({ message: "Please enter a valid email address" });

export async function POST(
    req: Request,
    res: Response)  {
    
    const body = await new Response(req.body).text()
    const email = JSON.parse(body).email;
    console.log(body)
    console.log(JSON.parse(body).last_name)
    console.log(email)
    const fname = JSON.parse(body).fname
    const lname = JSON.parse(body).lname
    const phone = JSON.parse(body).phone
    const emailValidation = EmailSchema.safeParse(email);

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const API_SERVER = process.env.MAILCHIMP_API_SERVER;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    

    const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    const data = {
      email_address: emailValidation.data,
      status: "pending",
      merge_fields: {
        FNAME: fname,
        LNAME: lname,
        PHONE: phone,
      }
    };

    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `api_key ${API_KEY}`,
      },
    };
    
    try {
      console.log(data)
      const response = await axios.post(url, data, options);
      if (response.status == 200) {
        return new Response("Awesome! You have successfully subscribed!",)
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
          return new Response("Oops! There was an error subscribing you to the newsletter. Please email me at ogbonnakell@gmail.com and I'll add you to the list.",)
    }
}