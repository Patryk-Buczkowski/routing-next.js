'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MyButton } from '@/components/buttons/Button';
import { useEffect, useState } from 'react';

type Props = {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
};

export default function ReviewDetail({ params }: Props) {
  const [product, setProduct] = useState(0);
  const [review, setReview] = useState(0);

  if (product > 100 || product < 0 || review > 5 || review < 0) {
    notFound();
  }

  useEffect(() => {
    const fetchParams = async () => {
      const { productId, reviewId } = await params;
      setProduct(+productId);
      setReview(+reviewId);
    };

    fetchParams();
  }, [params]);

  return (
    <>
      <h1 className="mt-2">
        Review {product} of product {review}
      </h1>

      <nav className="flex mt-3">
        <Link href={`/products/${product}/reviews/${review}`}>
          {`Link to => products/${product}/reviews/${review}`}
        </Link>
      </nav>

      <div>
        <h2>Params product</h2>

        <MyButton
          func={() => setProduct(prev => prev + 1)}
          name="inc + 1"
        />
        <MyButton
          func={() => setProduct(prev => prev - 1)}
          name="dec - 1"
        />
      </div>

      <div>
        <h2>Review set</h2>

        <MyButton
          func={() => setReview(prev => prev + 1)}
          name="inc + 1"
        />
        <MyButton
          func={() => setReview(prev => prev - 1)}
          name="dec - 1"
        />
      </div>
    </>
  );
}
