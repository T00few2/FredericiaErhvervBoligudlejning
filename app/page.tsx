// ./app/page.tsx


import client from '../services/apollo-client';

import Apartment from '../components/apartment';

import { Image } from '@chakra-ui/react';

export const revalidate = 0;


export default async function Home() {
  

  return (
    <div>
      <h1>Kjær Boligudlejning</h1>
      <Apartment />
    </div>
  );
}
