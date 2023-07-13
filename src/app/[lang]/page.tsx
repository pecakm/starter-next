import Link from "next/link";

import { Locale } from '../../i18n-config';
import { getDictionary } from '../../get-dictionary';

import { Slider } from "@/components/slider";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="flex flex-col items-center justify-between p-12">
      {dictionary.title}
      <Link className="underline" href={`/${lang}/products`}>{dictionary.products}</Link>
      <div className="max-w-xs mt-12">
        <Slider />
      </div>
    </main>
  )
}
