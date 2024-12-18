'use client';
import LinearProgress from '@mui/material/LinearProgress';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Params = {
  params: {
    slug: string[];
  };
};

export default function Parts({ params }: Params) {
  const [slug, setSlug] = useState<string[]>([]);
  const [isLading, setIsLoading] = useState(true);

  useEffect(() => {
    const unwrapParams = async () => {
      const { slug } = await params;
      setIsLoading(false);
      setSlug(slug || []);
    };

    unwrapParams();
  }, [params]);

  if (isLading) {
    return (
      <LinearProgress sx={{
        color: 'blue'
      }} aria-busy={true} />
    );
  }

  switch (slug.length) {
    case 1:
      return (
        <>
          <p>Case 1</p>
          <h1 className="text-green-500">DUPA docs </h1>
          <p>pram first: {slug[0]}</p>
        </>
      );
    case 2:
      return (
        <>
          <p>Case 2</p>
          <h1 className="">DUPA docs</h1>
          <p>param first: {slug[0]}</p>
          <p>param second: {slug[1]}</p>
        </>
      );
    case 0:
      return (
        <>
          <p>Case 0</p>
          <nav className="flex mt-3">
            <Link href={'http://localhost:3000/docs/moj/luj/x'}>3 blocks </Link>
            <Link href={'http://localhost:3000/docs/moj/luj'}>2 blocks </Link>
            <Link href={'http://localhost:3000/docs/moj'}>1 block </Link>
          </nav>
        </>
      );
  }

  return (
    <>
      {slug.map(part => (
        <h1 key={part} className="text-lime-500">
          param from map: {part}
        </h1>
      ))}
    </>
  );
}
