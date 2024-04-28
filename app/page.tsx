// ./app/page.tsx

import client from '../services/apollo-client';
import {GetLejligheder} from '../queries/get-lejligheder';

import { Image } from '@chakra-ui/react';


async function getData() {
  const timestamp = Date.now(); // Get current timestamp
  console.log(`Fetching data at ${timestamp}`);
  const {data} = await client.query({
    query: GetLejligheder,
    fetchPolicy: 'no-cache'
  });
  return data.Lejligheder.items;
}

export default async function Page() {
  
  const timestamp = Date.now(); // Get current timestamp
  console.log(`Page data at ${timestamp}`);
  const lejligheder = await getData();
  
    return (
      <div>
        <ul>
          {timestamp}
          {lejligheder.map((lejlighed) => (
            <li key={lejlighed._id}>
  
              {/* Add links to the artice title and use the article slug to open the new page */}
              {lejlighed.navn}
              {lejlighed.beskrivelse}
              {lejlighed.billeder.map((billede: {url: string},index: number) => (
                <Image src = {billede.url}  alt={`Image ${index + 1}`} key = {index}></Image>
                
              ))}
            </li>
          ))}
        </ul>
      </div>
    );
  }
