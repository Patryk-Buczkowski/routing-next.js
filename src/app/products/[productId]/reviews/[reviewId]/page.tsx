'use client';

import { notFound } from 'next/navigation';
import { LoadingButton } from '@mui/lab';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { MyButton } from '@/components/buttons/Button';

type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
};


export default function ReviewDetail({ params }: Props) {
  const [param, setParam] = useState(0);
  const [review, setReview] = useState(0);
  const [isLoading, setIsLoading] = useState({
    productId: '',
    reviewId: '',
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
  } else if (param > 100 || param < 0 || review > 5 || review < 0) {
    notFound();
  }

  return (
    <>
      <h1 className="mt-2">
        Review {param} of product {review}
      </h1>

      <nav className="flex mt-3">
        <Link href={`/products/${param}/reviews/${review}`}>
          {`Link to => products/${param}/reviews/${review}`}
        </Link>
      </nav>

      <div>
        <h2>Params set</h2>

        <MyButton func={() => setParam(prev => prev + 1)} name="inc + 1" />
        <MyButton func={() => setParam(prev => prev - 1)} name="dec - 1" />
      </div>

      <div>
        <h2>Review set</h2>

        <MyButton func={() => setReview(prev => prev + 1)} name="inc + 1" />
        <MyButton func={() => setReview(prev => prev - 1)} name="dec - 1" />
      </div>
    </>
  );
}
