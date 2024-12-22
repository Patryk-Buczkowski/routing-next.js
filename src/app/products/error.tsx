'use client';

import { MyButton } from '@/components/buttons/Button';

type Props = {
  error: Error;
  reset: () => void;
};

export default function ErrorBoundary({ error, reset }: Props) {
  return (
    <>
      <MyButton
        func={reset}
        name="reset"
      />
      <p>Simulation !!!</p>
      <p>Error in product id</p>
      <p>{error.message}</p>
    </>
  );
}
