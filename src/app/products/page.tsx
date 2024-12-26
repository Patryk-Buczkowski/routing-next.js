'use client';

import { MyButton } from '@/components/buttons/Button';
import { useRouter } from 'next/navigation';

// function getRandomError(number: number) {
//   return Math.floor(Math.random() * number);
// }

export default function Products() {
  const router = useRouter();
  const products = [
    'product 1',
    'product 2',
    'product 3',
    'product 4',
    'product 5',
    'product 6',
  ];

  // const randomError = getRandomError(2);

  return (
    <div className="flex flex-col w-fit gap-2">
      <h1>Product list</h1>
      {products.map((product, index) => {
        // if (randomError === 1) {
        //   throw new Error('Simulated error ;)')
        // }
        return (
          <MyButton
            key={product}
            func={() => router.push(`/products/${index + 1}`)}
            name={product} />
        );
      })}
    </div>
  );
}
