'use client';

import { useEffect, useState } from 'react';
import { MyButton } from '@/components/buttons/Button';

type Props = {
  productId: string;
  reviewId: string;
};

export default function ReviewClient({ productId, reviewId }: Props) {
  const [product, setProduct] = useState(+productId);
  const [review, setReview] = useState(+reviewId);

  useEffect(() => {
    if (product > 100 || product < 0 || review > 5 || review < 0) {
      alert('Not Found!');
    }
  }, [product, review]);

  return (
    <div>
      <h1 className="mt-2">
        Review {product} of product {review}
      </h1>

      <div>
        <h2>Params product</h2>
        <MyButton func={() => setProduct(prev => prev + 1)} name="inc + 1" />
        <MyButton func={() => setProduct(prev => prev - 1)} name="dec - 1" />
      </div>

      <div>
        <h2>Review set</h2>
        <MyButton func={() => setReview(prev => prev + 1)} name="inc + 1" />
        <MyButton func={() => setReview(prev => prev - 1)} name="dec - 1" />
      </div>
    </div>
  );
}
