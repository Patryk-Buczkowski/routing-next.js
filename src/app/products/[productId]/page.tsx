import { generateProductMetadata } from '@/app/_lib/MetadataProduct';
import { MyLink } from '@/components/buttons/Link';

type Props = {
  params: Promise<{
    productId: string;
  }>;
};

export async function generateStaticParams() {
  return [
    { productId: ['1'] },
  ];
}

export const generateMetadata = async ({ params }: Props) => {
  const {productId} = await params;
  generateProductMetadata(productId);
}
  

export default async function ProductsDetails({ params }: Props) {
  const {productId} = await params;
  return (
    <>
      <div className="flex gap-2">
        <MyLink name="Back" to="/products" />
        <MyLink name="contact with replace" to="/contact" boolean />
        <MyLink name="contact without replace" to="/contact" />
      </div>

      <h1 className="mt-2">Details of product {productId} </h1>
    </>
  );
}
