// ./app/page.js

import { GetArticles } from '@/queries/get-articles';
import client from '@/services/apollo-client';

/* Import Next links to add links to the article titles */
import Link from "next/link";

export const revalidate = 0;

async function getData() {
  const {data} = await client.query({
    query: GetArticles,
  });
  return data.Articles.items;
}

export default async function Home() {
  const articles = await getData();

  return (
    <div>
      <h1>My blog site</h1>
      <ul>
        {articles.map((article) => (
          <li key={article._id}>

            {/* Add links to the article title and use the article slug to open the new page */}
            <Link href={article._slug}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
