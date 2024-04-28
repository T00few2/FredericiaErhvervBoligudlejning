// ./app/page.tsx

import client from '../services/apollo-client';
import {GetLejligheder} from '../queries/get-lejligheder';

import { Image } from '@chakra-ui/react';

export const revalidate = 10;

async function getData() {
  const {data} = await client.query({
    query: GetLejligheder,
  });
  return data.Lejligheder.items;
}

export default async function Page() {
    const lejligheder = await getData();
  
    return (
      <div>
        <ul>
          {lejligheder.map((lejlighed) => (
            <li key={lejlighed._id}>
  
              {/* Add links to the artice title and use the article slug to open the new page */}
              {lejlighed.navn}
              {lejlighed.beskrivelse}
              {lejlighed.billeder.map((billede,index) => (
                <Image src = {billede.url}  alt={`Image ${index + 1}`} key = {index}></Image>
                
              ))}
            </li>
          ))}
        </ul>
      </div>
    );
  }
