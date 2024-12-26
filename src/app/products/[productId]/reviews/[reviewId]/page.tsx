import ReviewClient from './ReviewClient';

export async function generateStaticParams() {
  return [
    { reviewId: '1', productId: '1' },
  ];
}

type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
};

export default function ReviewDetail({ params }: Props) {
  const { productId, reviewId } = params;

  return (
    <>
      <ReviewClient productId={productId} reviewId={reviewId} />
    </>
  );
}
