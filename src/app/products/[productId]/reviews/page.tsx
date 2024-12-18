import { generateProductMetadata } from "@/app/_lib/MetadataProduct";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: Props) => 
  generateProductMetadata(params.productId);

export default function ReviewList({ params }: Props) {
  return (
    <h1 className="font-extrabold text-indigo-700">
      Rewiev List of product {params.productId}
    </h1>
  );
}
