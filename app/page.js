// ./app/page.js

import { GetLejligheder } from '@/queries/get-lejligheder';

import client from '@/services/apollo-client';

/* Import Next links to add links to the article titles */
import Link from 'next/link';

export const revalidate = 0;

async function getData() {
  const {data} = await client.query({
    query: GetLejligheder,
  });
  return data.Lejligheder.items;
}

export default async function Home() {
  const lejligheder = await getData();

  return (
    <div>
      <h1>Kjær Boligudlejning</h1>
      <ul>
        {lejligheder.map((lejlighed) => (
          <li key={lejlighed._id}>

            {/* Add links to the artice title and use the article slug to open the new page */}
            {lejlighed.navn}
          </li>
        ))}
      </ul>
    </div>
  );
}
