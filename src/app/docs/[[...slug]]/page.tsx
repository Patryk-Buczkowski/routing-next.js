import Link from 'next/link';

type Params = {
  params: {
    slug?: string[];
  };
};

export default function Parts({ params }: Params) {
  const slug  = params.slug ?? [];

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
         {slug.map((part, index) => (
            <h1 key={index} className="text-lime-500">
              Param from map: {part}
            </h1>
          ))}
        </>
  );
}
