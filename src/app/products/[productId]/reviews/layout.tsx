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
      const { productId, reviewId } = await params;
      setIsLoading({ productId, reviewId });
      setParam(parseInt(productId, 10));
      setReview(parseInt(reviewId, 10));
    };

    unwrapParams();
  }, [params]);

  if (!isLoading.productId || !isLoading.reviewId) {
    return (
      <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
        Fetch data
      </LoadingButton>
    );
  }
  return (
    <>
      {children}
      <h2>hello new</h2>
      <p>pass here id&apos;s</p>
    </>
  );
}
