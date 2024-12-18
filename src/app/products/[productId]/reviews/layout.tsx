"use client"

import { LoadingButton } from '@mui/lab';
import { useEffect, useState } from 'react';

type Props = {
  readonly children: React.ReactNode,
  params: {
    productId: string;
  };
};

export default function RootLayout({
  children,
  params,
}: Props) {
  const [param, setParam] = useState(0);
  const [isLoading, setIsLoading] = useState({
    productId: '',
  });

  useEffect(() => {
    const unwrapParams = async () => {
      const { productId } = await params;
      setIsLoading({ productId});
      setParam(parseInt(productId, 10));
    };

    unwrapParams();
  }, [params]);

  if (!isLoading.productId) {
    return (
      <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
        Fetch data
      </LoadingButton>
    );
  }
  return (
    <>
      {children}
      <h2 className='mt-2'>Details page of product:</h2>
      <p>id: {param}</p>
    </>
  );
}
