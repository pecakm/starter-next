import Link from "next/link";
import Image from "next/image";

import { Locale } from '../../../i18n-config';
import { getDictionary } from '../../../get-dictionary';

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products', { next: { revalidate: 0 } });
 
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

export default async function Products({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang);
  const data = await getData();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      {dictionary.productsPage}
      <Link className="underline" href={`/${lang}`}>{dictionary.goBack}</Link>
      {data.map((product: any) => (
        <div key={product.id} className="mt-12">
          {product.title}<br />
          <Image className="max-w-xs" src={product.image} alt="" width={1049} height={1500} />
          {product.price}<br />
          {product.description}<br />
        </div>
      ))}
    </main>
  )
}
