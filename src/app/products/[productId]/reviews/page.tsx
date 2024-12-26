// import { generateProductMetadata } from "@/app/_lib/MetadataProduct";
// import { PageProps } from 'next/types';

// type Props = {
//   params: {
//     productId: string;
//   };
// };

// export const generateMetadata = ({ params }: Props) => 
//   generateProductMetadata(params.productId);

// export default function ReviewList({ params }: Props) {
//   return (
//     <h1 className="font-extrabold text-indigo-700">
//       Rewiev List of product {params.productId}
//     </h1>
//   );
// }

import { generateProductMetadata } from "@/app/_lib/MetadataProduct";

type Props = {
  params: Promise<{
    productId: string; // Dynamiczny segment `productId`
  }>;
};

export async function generateStaticParams() {
  return [
    { productId: '1' },
  ];
}

export const generateMetadata = async ({ params }: Props) => {
  const { productId } = await params; // Rozpakowanie asynchroniczne
  return generateProductMetadata(productId);
};

export default async function ReviewList({ params }: Props) {
  const { productId } = await params; // Rozpakowanie asynchroniczne
  return (
    <h1 className="font-extrabold text-indigo-700">
      Review List of product {productId}
    </h1>
  );
}
