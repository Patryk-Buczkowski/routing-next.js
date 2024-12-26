import ReviewClient from './ReviewClient';

export async function generateStaticParams() {
  return [
    { reviewId: '1', productId: '1' },
  ];
}

type Props = {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
};

export default async function ReviewDetail({ params }: Props) {
  const { productId, reviewId } = await params;

  return (
    <>
      <ReviewClient productId={productId} reviewId={reviewId} />
    </>
  );
}
